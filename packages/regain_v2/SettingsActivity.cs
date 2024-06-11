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
using Android.Graphics;
using Android.Content.PM;

namespace Regain_v2
{
    [Activity(Label = "Regain v2",
        Theme = "@android:style/Theme.NoTitleBar",
        Icon = "@drawable/appicon",
        ScreenOrientation = ScreenOrientation.Landscape)]
    public class SettingsActivity : Activity
    {
        ImageView imgBack;
        GridLayout gridLayout;
        TextView txtDebug;
        EditText txtPrevious;
        EditText etEditName;
        EditText etEditDesc;
        EditText etEditReps;
        Button butDefault;

        private static string strButDefault = "Set to default";
        private static string strButEdit = "Edit exercise";
        private static string strButCancel = "Cancel edit";

        [Flags]
        private enum Options
        {
            None = 0,
            Clickable = 1,
            ColGreen = 2,
            ColGray = 4,
            ColRed = 8,
            ColWhite = 16,
            TxtName = 32,
            TxtInstr = 64,
            TxtRepeat = 128,
            UseName = 256,
            UseInstr = 512,
            UseRepeat = 1024,
            UseImage = 2048,
            Editable = 4096,
        }

        //-------------------------------------------------------------------------
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Settings);

            txtDebug = FindViewById<TextView>(Resource.Id.setTxtDebug);
            butDefault = FindViewById<Button>(Resource.Id.setButDefault);
            butDefault.Text = strButDefault;
            butDefault.Click += ButDefault_Click;
            imgBack = FindViewById<ImageView>(Resource.Id.setImgBack);
            imgBack.Click += delegate { imgBack_Click(); };
            gridLayout = FindViewById<GridLayout>(Resource.Id.setGridLayout);

            txtPrevious = null;
            txtDebug.Text = "Tap any exercise to add or remove from program.";
            string result = "OnCreate" + LayoutTable();
            Utility.WriteLog(this, result);   // save to log file
        }

        //-------------------------------------------------------------------------
        private string LayoutTable()
        {
            gridLayout.RemoveAllViews();
            for (int col = 0; col < Utility.ColCount(); col++)
            {
                for (int row = 0; row < Utility.RowCount(); row++)
                {
                    Exercise exer = Utility.GetExercise(col, row);
                    if (row == 0)
                    {
                        createCell(col, row, 200, 70, exer, 25, Options.UseName | Options.Clickable | Options.ColWhite);
                    }
                    else if (exer.Active)
                    {
                        createCell(col, row, 200, 70, exer, 20, Options.UseName | Options.Clickable | Options.ColGreen);
                    }
                    else
                    {
                        createCell(col, row, 200, 70, exer, 20, Options.UseName | Options.Clickable | Options.ColGray);
                    }
                }
            }

            return " gridLayout OK " + Utility.ColCount() + " " + Utility.RowCount();
        }

        //-------------------------------------------------------------------------
        private string LayoutEdit()
        {
            string result = "";
            gridLayout.RemoveAllViews();
            Exercise exer = (Exercise)txtPrevious.Tag;   // get associated Exercise
                                                         //createCell(0, 0, 200, 80, exer, 30, Options.TxtName);
                                                         //createCell(0, 1, 200, 350, exer, 30, Options.TxtInstr);
                                                         //createCell(0, 2, 200, -1, exer, 30, Options.TxtRepeat);

            //createCell(0, 0, 50, 50, exer, 30, Options.None);   // spacer cell

            createCell(1, 1, 700, 60, exer, 30, Options.UseName | Options.Editable | Options.ColWhite);
            createCell(1, 2, 700, 350, exer, 30, Options.UseInstr | Options.Editable | Options.ColWhite);
            createCell(1, 3, 700, -1, exer, 30, Options.UseRepeat | Options.Editable | Options.ColWhite);

            //createCell(2, 1, 300, 60, exer, -1, Options.None);   // spacer cell
            createCell(2, 2, 200, 350, exer, 30, Options.UseImage);

            txtDebug.Text = txtPrevious.Text;

            return result;
        }

        //-------------------------------------------------------------------------
        private void ButDefault_Click(object sender, EventArgs e)
        {
            string result = "ButDefault_Click: " + butDefault.Text + " ";

            if (butDefault.Text.Equals(strButDefault))   // user wants to return to defaults
            {
                // load default setting from resource
                result += Utility.loadDefaults(this) + " ";
                txtDebug.Text = "Exercise program returned to default settings.";
                result += LayoutTable();   // clear table and layout again
            }
            else if (butDefault.Text.Equals(strButEdit))    // user wants to edit an exercise
            {
                Exercise exer = (Exercise)txtPrevious.Tag;
                if (exer.Active)
                {
                    result += LayoutEdit() + " ";
                    txtDebug.Text = "Press back arrow (top left) to save changes, or button to cancel.";
                    butDefault.Text = strButCancel;
                }
            }
            else if (butDefault.Text.Equals(strButCancel))   // user cancels edit
            {
                txtDebug.Text = "Edit of " + etEditName.Text + " was cancelled";
                txtPrevious = null;
                butDefault.Text = strButDefault;
                result += LayoutTable();   // clear table and layout again
            }

            Utility.WriteLog(this, result);   // save to log file
        }

        //-------------------------------------------------------------------------
        private void imgBack_Click()
        {
            string strDebug = "imgBack_Click ";
            if (butDefault.Text.Equals(strButCancel))   // was in exercise edit mode
            {
                strDebug = "Edited " + txtPrevious.Text + " ";
                strDebug += "edit -> table view ";
                Utility.WriteLog(this, strDebug);   // save to log file

                txtDebug.Text = "Edited " + txtPrevious.Text + " ";

                // make changes to the exercise
                Exercise exer = (Exercise)txtPrevious.Tag;
                exer.Name = etEditName.Text;
                string[] aryTemp = etEditDesc.Text.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries);
                exer.Description = new string[aryTemp.Length + 1];   // extra line required for repeat information
                for (int ndx = 0; ndx < aryTemp.Length; ndx++)
                {
                    exer.Description[ndx] = aryTemp[ndx];
                }
                exer.Description[aryTemp.Length] = etEditReps.Text;


                txtPrevious = null;
                strDebug += LayoutTable();   // clear table and layout again

                butDefault.Text = strButDefault;
            }
            else   // was in full table view
            {
                strDebug += Utility.saveProperties(this) + " settings to InfoActivity ";
                Utility.WriteLog(this, strDebug);   // save to log file
                var intent = new Intent(this, typeof(InfoActivity));
                StartActivity(intent);
            }

        }

        //-------------------------------------------------------------------------
        // create an EditText for cell contents and add to the GridLayout at correct index
        private string createCell(int col, int row, int width, int height, Exercise exer, int size, Options options)
        {
            string result = "createCell ";

            GridLayout.LayoutParams layoutParams = new GridLayout.LayoutParams();
            layoutParams.ColumnSpec = GridLayout.InvokeSpec(col);
            layoutParams.RowSpec = GridLayout.InvokeSpec(row);
            if (width > 0)
            {
                layoutParams.Width = width;
            }
            else
            {
                layoutParams.Width = GridLayout.LayoutParams.WrapContent;
            }
            if (height > 0)
            {
                layoutParams.Height = height;
            }
            else
            {
                layoutParams.Height = GridLayout.LayoutParams.WrapContent;
            }
            layoutParams.SetMargins(2, 2, 2, 2);

            EditText editItem = new EditText(this);
            if (options.HasFlag(Options.Editable))
            {
                editItem.Activated = true;
                editItem.Clickable = true;
                editItem.Enabled = true;
                editItem.Focusable = true;
            }
            else
            {
                editItem.Focusable = false;  // disable editing
            }
            if (options.HasFlag(Options.TxtName))
            {
                editItem.Text = "Name:";
            }
            else if (options.HasFlag(Options.TxtInstr))
            {
                editItem.Text = "Instructions:";
            }
            else if (options.HasFlag(Options.TxtRepeat))
            {
                editItem.Text = "Repeats:";
            }
            if (options.HasFlag(Options.UseName))
            {
                editItem.Text = exer.Name;
                etEditName = editItem;
            }
            else if (options.HasFlag(Options.UseInstr))
            {
                var strNewline = System.Environment.NewLine;
                for (int iLine = 0; iLine < exer.Description.Length - 1; iLine++)
                {
                    editItem.Text += exer.Description[iLine] + strNewline;
                }
                etEditDesc = editItem;
            }
            else if (options.HasFlag(Options.UseRepeat))
            {
                editItem.Text = exer.Description[exer.Description.Length - 1];
                etEditReps = editItem;
            }
            else if (options.HasFlag(Options.UseImage))
            {
                // get ID of the image resource
                int idImage = Resources.GetIdentifier(exer.ImageID, "drawable", PackageName);
                if (idImage == 0)   // was not found
                {
                    result += "could not find " + exer.ImageID;
                    idImage = Resources.GetIdentifier("warm_up_main", "drawable", PackageName);   // load default
                }
                editItem.SetBackgroundResource(idImage);
            }

            editItem.SetTextSize(Android.Util.ComplexUnitType.Dip, size);
            editItem.Gravity = GravityFlags.CenterHorizontal;
            editItem.SetTextColor(Android.Graphics.Color.Black);

            if (options.HasFlag(Options.ColGreen))
            {
                editItem.SetBackgroundColor(Color.LightSeaGreen);
            }
            else if (options.HasFlag(Options.ColGray))
            {
                editItem.SetBackgroundColor(Color.Gray);
            }
            else if (options.HasFlag(Options.ColRed))
            {
                editItem.SetBackgroundColor(Color.Red);
            }
            else if (options.HasFlag(Options.ColWhite))
            {
                editItem.SetBackgroundColor(Color.White);
            }
            // if no colour options, then don't set any background

            if (options.HasFlag(Options.Clickable))
            {
                editItem.Clickable = true;
                editItem.Click += TxtItem_Click;
                editItem.LongClick += TxtItem_LongClick;
            }

            editItem.Selected = false;
            editItem.LayoutParameters = layoutParams;
            editItem.Tag = exer;

            gridLayout.AddView(editItem);
            gridLayout.UpdateViewLayout(editItem, layoutParams);

            return result;
        }

        //-------------------------------------------------------------------------
        private void EditItem_FocusChange(object sender, View.FocusChangeEventArgs e)
        {
            EditText etChanged = (EditText)sender;
            etChanged.Text = e.ToString();
        }

        //-------------------------------------------------------------------------
        private void EditItem_AfterTextChanged(object sender, Android.Text.AfterTextChangedEventArgs e)
        {
            EditText etChanged = (EditText)sender;
            etChanged.Text = e.ToString();
        }

        //-------------------------------------------------------------------------
        // single click to make a single exercise active or inactive
        private void TxtItem_Click(object sender, EventArgs e)
        {
            string result = "TxtItem_Click ";
            txtDebug.Text = "";
            butDefault.Text = strButDefault;

            try
            {
                EditText txtClicked = (EditText)sender;   // get EditText just clicked
                Exercise excClicked = (Exercise)txtClicked.Tag;   // get associated Exercise

                if (!excClicked.isHeader())   // ignore all clicks on header row
                {
                    // cancel any cells selected
                    if (txtPrevious != null)
                    {
                        Exercise excPrevious = (Exercise)txtPrevious.Tag;
                        Deselect(txtPrevious, excPrevious);
                        result += "Deselect " + txtPrevious.Text + " ";
                    }
                    // toggle active state
                    if (excClicked.Active)
                    {
                        excClicked.Active = false;
                        txtClicked.SetBackgroundColor(Color.Gray);
                        result += "Set " + txtClicked.Text + " inactive ";
                    }
                    else if (!excClicked.Empty)
                    {
                        excClicked.Active = true;
                        txtClicked.SetBackgroundColor(Color.LightSeaGreen);
                        result += "Set " + txtClicked.Text + " active ";
                    }
                }
            }
            catch
            {
                result += "error";
            }
            txtPrevious = null;

            Utility.WriteLog(this, result);   // save to log file
        }

        //-------------------------------------------------------------------------
        // long click to select an exercise or swap places with another
        private void TxtItem_LongClick(object sender, View.LongClickEventArgs e)
        {
            string result = "TxtItem_LongClick ";

            try
            {
                EditText txtClicked = (EditText)sender;   // get EditText just clicked
                Exercise excClicked = (Exercise)txtClicked.Tag;   // get associated Exercise

                //if (!excClicked.isHeader() && !txtClicked.Text.Equals(Exercise.EMPTY))   // ignore all clicks on header row
                if (!excClicked.isHeader())   // ignore all clicks on header row
                {
                    if (txtClicked.Selected)   // already selected
                    {
                        Deselect(txtClicked, excClicked);
                        txtPrevious = null;
                        result += "Deselect " + txtClicked.Text + " ";
                        txtDebug.Text = "";
                        butDefault.Text = strButDefault;
                    }
                    else if (txtPrevious == null)   // not selected and no previous
                    {
                        txtClicked.Selected = true;   // select and colour
                        txtClicked.SetBackgroundColor(Color.Red);
                        txtPrevious = txtClicked;
                        result += "Selected " + txtClicked.Text + " ";
                        txtDebug.Text = "Long click another exercise to swap them.";
                        if (excClicked.Active)
                        {
                            butDefault.Text = strButEdit;
                        }
                        else
                        {
                            butDefault.Text = strButDefault;
                        }
                    }
                    else if (txtClicked != txtPrevious)
                    {
                        Swap(txtClicked);   // swap attributes
                        result += "Swap " + txtClicked.Text + " with " + txtPrevious.Text + " ";
                        txtPrevious = null;
                        txtDebug.Text = "Exercises swapped.";
                        butDefault.Text = strButDefault;
                    }
                }
            }
            catch
            {
                result += "error";
            }

            Utility.WriteLog(this, result);   // save to log file
        }

        //-------------------------------------------------------------------------
        // deselect an EditText and colour appropriately
        private void Deselect(EditText txtSelected, Exercise excSelected)
        {
            txtSelected.Selected = false;   // deselect and colour appropriately
            if (excSelected.Active)
            {
                txtSelected.SetBackgroundColor(Color.LightSeaGreen);
            }
            else
            {
                txtSelected.SetBackgroundColor(Color.Gray);
            }
        }

        //-------------------------------------------------------------------------
        // swap details of two EditTexts
        private void Swap(EditText txtClicked)
        {
            Exercise excClicked = (Exercise)txtClicked.Tag;
            Exercise excPrevious = (Exercise)txtPrevious.Tag;

            // deselect both and ensure appropriate colour
            //Deselect(txtClicked, excClicked);
            //Deselect(txtPrevious, excPrevious);

            // swap exercise names shown in grid
            //string strTemp = txtClicked.Text;
            //txtClicked.Text = txtPrevious.Text;
            //txtPrevious.Text = strTemp;

            //EditText etTemp = txtClicked;
            //txtClicked = txtPrevious;
            //txtPrevious = etTemp;

            //if (excPrevious.Active)
            //{
            //    txtClicked.SetBackgroundColor(Color.LightSeaGreen);
            //}
            //else
            //{
            //    txtClicked.SetBackgroundColor(Color.Gray);
            //}
            //if (excClicked.Active)
            //{
            //    txtPrevious.SetBackgroundColor(Color.LightSeaGreen);
            //}
            //else
            //{
            //    txtPrevious.SetBackgroundColor(Color.Gray);
            //}

            // swap items in the data structure
            Utility.SwapExercise(excClicked, excPrevious);
            LayoutTable();
        }
    }
}
