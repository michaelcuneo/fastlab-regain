using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using System.Xml;

using System.Reflection;
using Android.Content.Res;
using System.IO;
using Android.Media;

// external file IO
// https://diptimayapatra.wordpress.com/2013/07/10/xamarin-write-file-to-sd-card-in-android/

namespace Regain_v2
{
    // general utility functions that serve the whole app
    class Utility
    {
        private static int iMaxItems = 6;   // maximum number of exercises in a group
        public static int MaxItems
        {
            get
            {
                return iMaxItems;
            }
        }
        private static string propertiesFile = "Download/Properties.xml";
        private static string strLogFile = "Download/RegainLog.txt";
        private static Exercise[,] aryExercise = null;

        //-------------------------------------------------------------------------
        // Given array indices, get the corresponding Exercise object reference
        public static void SwapExercise(Exercise first, Exercise second)
        {
            // swap position in the array
            Exercise exTemp = first;
            aryExercise[first.Col, first.Row] = second;
            aryExercise[second.Col, second.Row] = exTemp;

            first.Swap(second);   // swap stored row and col in Exercise objects
        }

        //-------------------------------------------------------------------------
        // Given array indices, get the corresponding Exercise object reference
        public static Exercise GetExercise(int col, int row)
        {
            Exercise exSpecs = null;
            try
            {
                exSpecs = aryExercise[col, row];
            }
            catch
            {

            }
            return exSpecs;
        }

        //-------------------------------------------------------------------------
        // save properties to xml file
        public static string saveProperties(Activity activ)
        {
            string result = "saveProperties: ";

            try
            {
                XmlDocument xmlDoc = new XmlDocument();

                // Create an XML declaration. 
                XmlDeclaration xmldecl;
                xmldecl = xmlDoc.CreateXmlDeclaration("1.0", null, null);
                xmldecl.Encoding = "UTF-8";

                // Add the new node to the document.
                XmlElement xeRoot = xmlDoc.DocumentElement;
                xmlDoc.InsertBefore(xmldecl, xeRoot);

                XmlElement xeProperties = xmlDoc.CreateElement("Properties");
                xmlDoc.AppendChild(xeProperties);

                // for each Exercise
                for (int col = 0; col < ColCount(); col++)
                {
                    XmlElement xeExerciseGroup = null;
                    for (int row = 0; row < RowCount(); row++)
                    {
                        if (row == 0)
                        {
                            xeExerciseGroup = xmlDoc.CreateElement("ExerciseGroup");
                            xeExerciseGroup.SetAttribute("Name", aryExercise[col, row].Name);
                            xeProperties.AppendChild(xeExerciseGroup);
                        }
                        else
                        {
                            Exercise exCurrent = aryExercise[col, row];
                            if (!exCurrent.Empty)   // dont save empty exercise slot
                            {
                                XmlElement xeExercise = xmlDoc.CreateElement("Exercise");
                                xeExercise.SetAttribute("Name", exCurrent.Name);
                                xeExercise.SetAttribute("Active", exCurrent.Active ? "True" : "False");
                                xeExercise.SetAttribute("ImageID", exCurrent.ImageID);
                               xeExercise.SetAttribute("VideoID", exCurrent.VideoID);
                                xeExerciseGroup.AppendChild(xeExercise);
                                // add description text
                                for (int ndx = 0; ndx < exCurrent.Description.Length; ndx++)
                                {
                                    if (exCurrent.Description[ndx].Length > 0)   // dont save empty string
                                    {
                                        XmlElement xeDescription = xmlDoc.CreateElement("Instruction");
                                        xeDescription.InnerText = exCurrent.Description[ndx];
                                        xeExercise.AppendChild(xeDescription);
                                    }
                                }
                            }
                        }
                    }
                }
                // save xml file to external storage
                string path = Android.OS.Environment.ExternalStorageDirectory.Path;
                string filePath = System.IO.Path.Combine(path, propertiesFile);
                xmlDoc.Save(filePath);

                // https://stackoverflow.com/questions/7429087/cant-see-a-file-in-windows-written-by-an-android-app-on-sd-card-unless-i-force
                MediaScannerConnection.ScanFile(activ, new String[] { filePath }, null, null);

                result = "saved to: " + filePath + System.Environment.NewLine;
            }
            catch
            {
                result += " failed" + System.Environment.NewLine;
            }

            return result;
        }

        //-------------------------------------------------------------------------
        public static int ColCount()
        {
            int result = -1;
            try
            {
                result = aryExercise.GetLength(0);
            }
            catch
            {

            }
            return result;
        }

        //-------------------------------------------------------------------------
        // returns the number of rows, including the header row
        public static int RowCount()
        {
            int result = -1;
            try
            {
                result = aryExercise.GetLength(1);
            }
            catch
            {

            }
            return result;
        }

        //-------------------------------------------------------------------------
        // loads properties from string resource if no copy found in file
        public static string loadDefaults(Activity activ)
        {
            string result = "loadDefaults: ";

            try
            {
                // https://developer.xamarin.com/guides/android/application_fundamentals/resources_in_android/part_6_-_using_android_assets/
                // load from Assets.Properties.xml
                AssetManager assets = activ.Assets;
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.Load(assets.Open("Properties.xml"));   // convert stream to XmlDocument
                result += getProperties(xmlDoc) + " ";
            }
            catch
            {
                result += "failed";
            }

            return result;
        }

        //-------------------------------------------------------------------------
        public static string loadProperties()
        {
            string result = "loadProperties: ";

            try
            {
                //string path = Application.Context.FilesDir.Path;
                string path = Android.OS.Environment.ExternalStorageDirectory.Path;
                string filePath = System.IO.Path.Combine(path, propertiesFile);
                XmlDocument xmlDoc = new XmlDocument();
                xmlDoc.Load(filePath);
                result += getProperties(xmlDoc) + " ";
            }
            catch
            {
                result += "failed";
            }

            return result;
        }

        //-------------------------------------------------------------------------
        // get properties from an XML document that has been loaded from file
        public static string getProperties(XmlDocument xmlDoc)
        {
            string result = "getProperties: ";
            string name = "no exercise";

            try
            {
                XmlNodeList xnlGroup = xmlDoc.SelectNodes("/Properties/ExerciseGroup");
                aryExercise = new Exercise[xnlGroup.Count, iMaxItems + 1];
                int col = 0;   // index to ExerciseGroup objects
                foreach (XmlNode nGroup in xnlGroup)
                {
                    name = nGroup.Attributes.GetNamedItem("Name").Value;
                    aryExercise[col, 0] = new Exercise(name, null, col, 0, true, null, null);   // group name always row 0
                    XmlNodeList xnlExer = nGroup.SelectNodes("Exercise");
                    int row = 1;
                    foreach (XmlNode nExer in xnlExer)
                    {
                        name = nExer.Attributes.GetNamedItem("Name").Value;
                        bool active = nExer.Attributes.GetNamedItem("Active").Value.Equals("True");
                        string image = nExer.Attributes.GetNamedItem("ImageID").Value;
                        string video = nExer.Attributes.GetNamedItem("VideoID").Value;
                        XmlNodeList xnlInst = nExer.SelectNodes("Instruction");
                        string[] aryDesc = new string[xnlInst.Count];
                        for (int ndx = 0; ndx < xnlInst.Count; ndx++)
                        {
                            string inst = xnlInst.Item(ndx).InnerText;
                            aryDesc[ndx] = inst;
                        }
                        aryExercise[col, row] = new Exercise(name, aryDesc, col, row, active, image, video);
                        row++;
                    }
                    col++;
                }

                // check integrity of array
                int iCount = 0;
                for (col = 0; col < aryExercise.GetLength(0); col++)
                {
                    for (int row = 0; row < aryExercise.GetLength(1); row++)
                    {
                        if (aryExercise[col, row] == null)
                        {
                            aryExercise[col, row] = new Exercise("", null, col, row, false, null, null);
                        }
                        else
                        {
                            iCount++;
                        }
                    }
                }

                result += "Loaded " + iCount + " ";
            }
            catch
            {
                result += "failed at " + name + " ";
            }

            return result;
        }

        //-------------------------------------------------------------------------
        // write a single string to the log file. If file does not exist, create it
        public static void WriteLog(Activity activ, string message)
        {
            //message = DateTime.Now.ToString() + " " + activ.LocalClassName + " " + message + System.Environment.NewLine;
            //message = DateTime.Now.ToString() + " " + activ.Title + " " + message + System.Environment.NewLine;
            string[] strClassName = activ.LocalClassName.Split('.');
            message = DateTime.Now.ToString() + " " + strClassName[1] + " " + message + System.Environment.NewLine;

            // save string file to external storage
            // string path = Android.OS.Environment.GetExternalStoragePublicDirectory(Android.OS.Environment.DirectoryDocuments);
            string path = Android.OS.Environment.ExternalStorageDirectory.Path;
            string filePath = System.IO.Path.Combine(path, strLogFile);
            System.IO.File.AppendAllText(filePath, message);
            MediaScannerConnection.ScanFile(activ, new String[] { filePath }, null, null);
        }

    }
}