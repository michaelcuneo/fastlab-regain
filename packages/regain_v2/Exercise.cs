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

namespace Regain_v2
{
    class Exercise : Java.Lang.Object
    {
        private string strName;   // name of exercise
        private string[] strDesc;   // description or instructions
        private string strImage;
        private string strVideo;
        private int iCol, iRow;
        private bool isActive;   // is exercise to be included in personalised program

        public static string EMPTY = "empty";

        public int Col
        {
            get
            {
                return iCol;
            }
            set
            {
                iCol = value;
            }
        }
        public int Row
        {
            get
            {
                return iRow;
            }
            set
            {
                iRow = value;
            }
        }
        public string Name
        {
            get
            {
                return strName;
            }
            set
            {
                if (value == null || value.Length < 1)
                {
                    strName = EMPTY;
                }
                else
                {
                    strName = value;
                }
            }
        }
        public string[] Description
        {
            get
            {
                return strDesc;
            }
            set
            {
                if (value == null || value.Length < 1)
                {
                    strDesc = new string[] { "", "", "", "", "" };
                }
                else
                {
                    strDesc = value;
                }
            }
        }
        public string ImageID
        {
            get
            {
                return strImage;
            }
            set
            {
                strImage = value;
            }
        }
        public string VideoID
        {
            get
            {
                return strVideo;
            }
            set
            {
                strVideo = value;
            }
        }
        public bool Active
        {
            get
            {
                return isActive;
            }
            set
            {
                isActive = value;
            }
        }
        public string Length
        {
            get
            {
                return "Timer 2 minutes";
            }
        }
        public bool Empty
        {
            get
            {
                return Name.Equals(EMPTY);
            }
        }

        //-------------------------------------------------------------------------
        public Exercise(string name, string[] description, int col, int row, bool active, string image, string video)
        {
            Name = name;   // use the public setter
            Description = description;
            Active = active;   // use the public setter
            ImageID = image;
            VideoID = video;
            iCol = col;
            iRow = row;
        }

        //-------------------------------------------------------------------------
        // swap the position of two Exercises by swapping row and column details only
        public void Swap(Exercise other)
        {
            int tempCol = Col;
            Col = other.Col;
            other.Col = tempCol;
            int tempRow = Row;
            Row = other.Row;
            other.Row = tempRow;
        }

        //-------------------------------------------------------------------------
        // is this a group of Exercises (e.g. part of the header row shown in table)
        public bool isHeader()
        {
            return iRow == 0;
        }

        //-------------------------------------------------------------------------
        // return a string representation)
        public override string ToString()
        {
            return strName + ":" + iCol + "," + iRow + ":" + isActive;
        }
    }
}