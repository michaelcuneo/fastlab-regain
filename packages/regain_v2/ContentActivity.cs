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
using Android.Graphics.Drawables;
using Android.Graphics;
using Android.Content.PM;

namespace Regain_v2
{
    [Activity(Label = "Content",
        Theme = "@android:style/Theme.NoTitleBar",
        Icon = "@drawable/appicon",
        ScreenOrientation = ScreenOrientation.Landscape)]
    public class ContentActivity : Activity
    {
        ImageView imgBack;
        ImageView imgInfo;
        GridLayout gridLayout;
        TextView txtDebug;
        GridLayout groupGrid;
        VideoView vvItem;
        TextView tvControl;
        //MediaControlPanel mcVideo;
        MediaController mcVideo;
        private int iGroupNum;
        private int iExerNum;
        private enum State { Choose, Instruction, Video }
        private State displayState;

        private static int iItemWidth = 350;
        private static int iItemHeight = 200;
        private static int iButWidth = 200;
        private static int iButHeight = 40;
        private static int iTextHeight = 60;
        //private static int[] aryImgExer = new int[] { Resource.Drawable.exercise01, Resource.Drawable.exercise02, Resource.Drawable.exercise03, Resource.Drawable.exercise04, Resource.Drawable.exercise05, Resource.Drawable.exercise06 };

        [Flags]
        private enum Options
        {
            None = 0,
            CheckActive = 1,   // check if this exercise is active (included in patients program)
            CheckGroup = 2,   // check if this is the currently selected exercise group
            UseName = 4,
            UseDesc = 8,
            UseLast = 16,   // special text: last line of instructions
            Clickable = 32,
            AlignLeft = 64,
            UseStart = 128,   // special text: "start exercise"
            TextBlue = 256,
            TextItal = 512,
            ButGreen = 1024,   // always show a green button image
            ButWhite = 2048,   // always show a white button image
            TextPrev = 4096,   // special text: "< previous exercise"
            TextNext = 8192,   // special text: "next exercise >"
        }

        //-------------------------------------------------------------------------
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Content);

            // Get buttons from the layout resource, attach events
            imgBack = FindViewById<ImageView>(Resource.Id.contImgBack);
            imgInfo = FindViewById<ImageView>(Resource.Id.contImgInfo);
            txtDebug = FindViewById<TextView>(Resource.Id.contTxtDebug);

            gridLayout = FindViewById<GridLayout>(Resource.Id.contGridLayout);
            groupGrid = FindViewById<GridLayout>(Resource.Id.contGroupGrid);

            imgBack.Click += delegate { imgBack_Click(); };
            imgInfo.Click += delegate { imgInfo_Click(); };

            iGroupNum = 0;   // select first exercise group, usually warm-ups
            iExerNum = 0;

            string strDebug = "OnCreate " + LayoutTable() + " ";

            displayState = State.Choose;

            Utility.WriteLog(this, strDebug);   // save to log file
        }

        //-------------------------------------------------------------------------
        // fill table with options from the active exercises
        private string LayoutTable()
        {
            string result = "";

            gridLayout.RemoveAllViews();
            groupGrid.RemoveAllViews();

            // number of items is the max number of exercises that can appear under each group
            for (int item = 0; item < Utility.MaxItems; item++)   // start from 1 to ignore group name
            {
                // get table cell coordinates from index number
                int col = item % 3;
                int row = item < 3 ? 0 : 2;
                Exercise excCurrent = Utility.GetExercise(iGroupNum, item + 1);   // add one to skip the header row or group name

                string strImage = excCurrent.ImageID;
                int idImage = -1;   // default
                if (strImage != null && strImage.Length > 0)
                {
                    idImage = Resources.GetIdentifier(strImage, "drawable", PackageName);
                }
                CreateImageCell(col, row, iItemWidth, iItemHeight, excCurrent, idImage, Options.CheckActive | Options.Clickable);
                row++;
                CreateTextCell(col, row, iItemWidth, iTextHeight, excCurrent, 20, Options.CheckActive | Options.Clickable | Options.UseName);
            }

            // create buttons with the names of each exercise group
            for (int item = 0; item < Utility.ColCount(); item++)
            {
                Exercise exer = Utility.GetExercise(item, 0);   // exercise group
                CreateButtonCell(item, iButWidth, iButHeight, exer, 16, Options.CheckGroup | Options.UseName);
            }

            return result;
        }

        //-------------------------------------------------------------------------
        // bottom grid button clicked, so adjust the exercise group shown on page
        private void TailItem_Click(object sender, EventArgs e)
        {
            string strDebug = "TailItem_Click: ";

            try
            {
                TextView txtClicked = (TextView)sender;   // get TextView just clicked
                strDebug += txtClicked.Text + " ";
                Exercise excClicked = (Exercise)txtClicked.Tag;   // get associated Exercise
                strDebug += excClicked.Row + " ";
                if (excClicked.Row == 0)   // an exercise group
                {
                    iGroupNum = excClicked.Col;
                    strDebug += "group no. " + iGroupNum + " ";
                    LayoutTable();
                    displayState = State.Choose;
                }
                else   // an individual exercise
                {
                    iExerNum = excClicked.Row;
                    strDebug += "exercise no. " + iGroupNum + " ";
                    LayoutInstruction(excClicked);
                    displayState = State.Instruction;
                }
            }
            catch
            {
                strDebug += "error";
            }
            Utility.WriteLog(this, strDebug);
        }

        //-------------------------------------------------------------------------
        // fill cell of main grid with image
        private void CreateImageCell(int col, int row, int width, int height, Exercise exer, int image, Options options)
        {
            GridLayout.LayoutParams layoutParams = new GridLayout.LayoutParams();
            layoutParams.ColumnSpec = GridLayout.InvokeSpec(col);
            layoutParams.RowSpec = GridLayout.InvokeSpec(row);
            layoutParams.Width = width;
            layoutParams.Height = height;

            ImageView imgItem = new ImageView(this);
            if (!options.HasFlag(Options.CheckActive) || exer.Active)
            {
                if (image > 0)   // check if it looks like a valid resource ID
                {
                    imgItem.SetImageResource(image);
                }
                if (options.HasFlag(Options.Clickable))
                {
                    imgItem.Clickable = true;
                    imgItem.Click += GridItem_Click;
                }
                else
                {
                    imgItem.Clickable = false;
                }
            }
            imgItem.SetPadding(0, 30, 0, 0);
            imgItem.LayoutParameters = layoutParams;
            imgItem.Tag = exer;

            gridLayout.AddView(imgItem);
            gridLayout.UpdateViewLayout(imgItem, layoutParams);
        }

        //-------------------------------------------------------------------------
        // fill cell of main grid with TextView
        private void CreateTextCell(int col, int row, int width, int height, Exercise exer, int size, Options options)
        {
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

            layoutParams.SetGravity(GravityFlags.Center);

            TextView txtItem = new TextView(this);
            txtItem.Gravity = GravityFlags.Center;

            if (!options.HasFlag(Options.CheckActive) || exer.Active)
            {
                if (options.HasFlag(Options.UseName))
                {
                    txtItem.Text = exer.Name;
                }
                else if (options.HasFlag(Options.UseDesc))
                {
                    var strNewline = System.Environment.NewLine;
                    for (int iLine = 0; iLine < exer.Description.Length - 1; iLine++)
                    {
                        txtItem.Text += exer.Description[iLine] + strNewline;
                    }
                    //foreach (string str in exer.Description)
                    //{
                    //    txtItem.Text += str + strNewline;
                    //}
                }
                else if (options.HasFlag(Options.UseLast))
                {
                    txtItem.Text = exer.Description[exer.Description.Length - 1];   // use last line
                    //txtItem.Gravity = GravityFlags.Center;
                }
                else if (options.HasFlag(Options.UseStart))
                {
                    txtItem.Text += "Start Exercise";
                    //txtItem.Gravity = GravityFlags.Center;
                }

                txtItem.SetTextSize(Android.Util.ComplexUnitType.Dip, size);
                txtItem.SetTextColor(Android.Graphics.Color.Black);
                if (options.HasFlag(Options.TextBlue))
                {
                    txtItem.SetTextColor(Android.Graphics.Color.Blue);
                }
                if (options.HasFlag(Options.ButGreen))   // show a white button image
                {
                    txtItem.SetBackgroundResource(Resource.Drawable.green_btn_200);
                    txtItem.SetTextColor(Android.Graphics.Color.White);
                }
                if (options.HasFlag(Options.TextItal))
                {
                    txtItem.SetTypeface(txtItem.Typeface, TypefaceStyle.Italic);
                }
                if (options.HasFlag(Options.Clickable))
                {
                    txtItem.Clickable = true;
                    txtItem.Click += GridItem_Click;
                }
                else
                {
                    txtItem.Clickable = false;
                }
            }

            if (options.HasFlag(Options.AlignLeft))
            {
                txtItem.Gravity = GravityFlags.Left;
            }
            txtItem.LayoutParameters = layoutParams;
            txtItem.Tag = exer;

            gridLayout.AddView(txtItem);
            gridLayout.UpdateViewLayout(txtItem, layoutParams);
        }

        //-------------------------------------------------------------------------
        // fill cell of bottom button grid
        private void CreateButtonCell(int item, int width, int height, Exercise exer, int size, Options options)
        {
            GridLayout.LayoutParams layoutParams = new GridLayout.LayoutParams();
            layoutParams.ColumnSpec = GridLayout.InvokeSpec(item);
            layoutParams.RowSpec = GridLayout.InvokeSpec(0);
            layoutParams.Width = width;
            layoutParams.Height = height;
            layoutParams.SetGravity(GravityFlags.Center);

            TextView txtGroupGrid = new TextView(this);
            txtGroupGrid.Clickable = true;
            txtGroupGrid.Click += TailItem_Click;
            txtGroupGrid.Gravity = GravityFlags.Center;
            if (options.HasFlag(Options.CheckGroup) && item == iGroupNum)   // if this button is the currently selected group
            {
                txtGroupGrid.SetBackgroundResource(Resource.Drawable.green_out_200);
                txtGroupGrid.SetTextColor(Android.Graphics.Color.White);
            }
            else if (options.HasFlag(Options.CheckGroup) | options.HasFlag(Options.ButWhite))   // show a white button image
            {
                txtGroupGrid.SetBackgroundResource(Resource.Drawable.white_btn_200);
                txtGroupGrid.SetTextColor(Android.Graphics.Color.Green);
            }
            else if (options.HasFlag(Options.ButGreen))   // show a white green image
            {
                txtGroupGrid.SetBackgroundResource(Resource.Drawable.green_btn_200);
                txtGroupGrid.SetTextColor(Android.Graphics.Color.Green);
            }
            else
            {
                txtGroupGrid.SetTextColor(Android.Graphics.Color.Black);   // no button image
            }

            txtGroupGrid.SetTextSize(Android.Util.ComplexUnitType.Dip, size);

            if (options.HasFlag(Options.UseName))
            {
                txtGroupGrid.Text = exer.Name;
            }
            else if (options.HasFlag(Options.TextPrev))
            {
                txtGroupGrid.Text = "< previous exercise";
            }
            else if (options.HasFlag(Options.TextNext))
            {
                txtGroupGrid.Text = "next exercise >";
            }

            txtGroupGrid.Tag = exer;
            groupGrid.AddView(txtGroupGrid);
            groupGrid.UpdateViewLayout(txtGroupGrid, layoutParams);
        }

        //-------------------------------------------------------------------------
        // an individual exercise was tapped, so change layout to show instructions
        private void GridItem_Click(object sender, EventArgs e)
        {
            string strDebug = "GridItem_Click ";

            try
            {
                Exercise excClicked = null;

                if (sender is TextView)
                {
                    TextView txtClicked = (TextView)sender;   // get TextView just clicked
                    excClicked = (Exercise)txtClicked.Tag;
                }
                else if (sender is ImageView)
                {
                    ImageView imgClicked = (ImageView)sender;   // get TextView just clicked
                    excClicked = (Exercise)imgClicked.Tag;
                }

                strDebug += excClicked.Name + " ";
                iExerNum = excClicked.Row;

                if (displayState == State.Choose)
                {
                    strDebug += "choose -> instruction ";
                    LayoutInstruction(excClicked);   // change layout to show single exercise instructions
                    displayState = State.Instruction;
                }
                else if (displayState == State.Instruction)
                {
                    strDebug += "instruction -> video ";
                    LayoutVideoView(excClicked);
                    displayState = State.Video;
                }

            }
            catch
            {
                strDebug += "error";
            }

            Utility.WriteLog(this, strDebug);
        }

        //-------------------------------------------------------------------------
        // display the video for a single exercise
        private string LayoutVideoView(Exercise excCurrent)
        {
            string result = "LayoutVideoView ";
            gridLayout.RemoveAllViews();
            groupGrid.RemoveAllViews();

            GridLayout.LayoutParams layoutParams = new GridLayout.LayoutParams();
            layoutParams.ColumnSpec = GridLayout.InvokeSpec(0);
            layoutParams.RowSpec = GridLayout.InvokeSpec(0);
            layoutParams.Width = 800;
            //layoutParams.Height = 400;
            layoutParams.Width = GridLayout.LayoutParams.WrapContent;

            vvItem = new VideoView(this);
            mcVideo = new MediaController(this, true);
            //mcVideo = new MediaControlPanel(this, true);
            //mcVideo.KeepVisible = true;
            vvItem.SetMediaController(mcVideo);

            vvItem.Prepared += OnVideoPlayerPrepared;
            vvItem.LayoutParameters = layoutParams;
            vvItem.Tag = excCurrent;

            gridLayout.AddView(vvItem);
            gridLayout.UpdateViewLayout(vvItem, layoutParams);

            // get ID of the video resource
            int idVideo = Resources.GetIdentifier(excCurrent.VideoID, "drawable", PackageName);
            if (idVideo == 0)   // was not found
            {
                result += "could not find " + excCurrent.VideoID;
                idVideo = Resources.GetIdentifier("test", "drawable", PackageName);
            }

            var uri = Android.Net.Uri.Parse("android.resource://" + Application.PackageName + "/" + idVideo);
            vvItem.SetVideoURI(uri);
            vvItem.Start();

            return result;
        }

        //-------------------------------------------------------------------------
        // callback for video player
        private void OnVideoPlayerPrepared(object sender, EventArgs e)
        {
            //mcVideo.SetAnchorView(txtDebug);   // use for now, but need to change
            mcVideo.SetAnchorView(vvItem);
            mcVideo.Show();
            //mcVideo.Show(Int32.MaxValue);
        }

        //-------------------------------------------------------------------------
        // display the instructions for a single exercise
        private string LayoutInstruction(Exercise excCurrent)
        {
            string result = "";

            gridLayout.RemoveAllViews();
            groupGrid.RemoveAllViews();

            // create a blank text cell on left as a spacer
            CreateTextCell(0, 0, 50, 50, excCurrent, 30, Options.None);

            CreateTextCell(1, 1, 700, 80, excCurrent, 30, Options.UseName | Options.AlignLeft | Options.TextBlue);
            CreateTextCell(1, 2, 700, 350, excCurrent, 30, Options.UseDesc | Options.AlignLeft);
            CreateTextCell(1, 3, 700, -1, excCurrent, 30, Options.UseLast | Options.AlignLeft | Options.TextItal);

            CreateImageCell(2, 1, 300, 80, excCurrent, -1, Options.None);
            string strImage = excCurrent.ImageID;
            int idImage = -1;   // default: not found
            if (strImage != null && strImage.Length > 0)
            {
                idImage = Resources.GetIdentifier(strImage, "drawable", PackageName);
            }
            CreateImageCell(2, 2, 300, 350, excCurrent, idImage, Options.None);
            //CreateImageCell(2, 2, 300, 350, excCurrent, Resource.Drawable.warm_up_main, Options.None);
            CreateTextCell(2, 3, iButWidth, iButHeight, excCurrent, 20, Options.UseStart | Options.Clickable | Options.ButGreen);

            // create previous and next buttons along bottom grid
            Exercise exer = null;
            int iExerRow = excCurrent.Row;
            int iExerNdx = iExerRow - 1;
            bool found = false;
            while (iExerNdx > 0)   // search for previous exercise in set
            {
                exer = Utility.GetExercise(iGroupNum, iExerNdx);   // previous exercise
                if (exer.Active)   // found
                {
                    found = true;
                    break;
                }
                iExerNdx--;
            }
            if (found)
            {
                CreateButtonCell(0, iButWidth, iButHeight, exer, 16, Options.UseName | Options.ButWhite);
                CreateButtonCell(1, iButWidth, iButHeight, null, 16, Options.TextPrev);
            }
            else
            {
                CreateButtonCell(0, iButWidth, iButHeight, null, 16, Options.None);
                CreateButtonCell(1, iButWidth, iButHeight, null, 16, Options.None);
            }

            // make blank spacer
            CreateButtonCell(2, iButWidth, iButHeight, null, 0, Options.None);

            iExerNdx = iExerRow + 1;
            found = false;
            while (iExerNdx < Utility.RowCount())   // search for next exercise
            {
                exer = Utility.GetExercise(iGroupNum, iExerNdx);   // next exercise
                if (exer.Active)
                {
                    found = true;
                    break;
                }
                iExerNdx++;
            }
            if (found)
            {
                CreateButtonCell(3, iButWidth, iButHeight, null, 16, Options.TextNext);
                CreateButtonCell(4, iButWidth, iButHeight, exer, 16, Options.UseName | Options.ButWhite);
            }
            else
            {
                CreateButtonCell(3, iButWidth, iButHeight, null, 16, Options.None);
                CreateButtonCell(4, iButWidth, iButHeight, null, 16, Options.None);
            }
            return result;
        }

        //-------------------------------------------------------------------------
        private void imgInfo_Click()
        {
            string strDebug = "imgInfo_Click ";
            var intent = new Intent(this, typeof(InfoActivity));
            strDebug += "InfoActivity ";
            Utility.WriteLog(this, strDebug);
            StartActivity(intent);
        }

        //-------------------------------------------------------------------------
        // if choosing an exercise, return to MainActivity with general instructions
        // if viewing instructions for an exercise, return to listing of exercises
        private void imgBack_Click()
        {
            string strDebug = "imgBack_Click ";

            if (displayState == State.Choose)
            {
                strDebug += " choose -> MainActivity ";
                var intent = new Intent(this, typeof(MainActivity));
                StartActivity(intent);
            }
            else if (displayState == State.Instruction)
            {
                strDebug += " instruction -> choose ";
                LayoutTable();
                displayState = State.Choose;
            }
            else if (displayState == State.Video)
            {
                strDebug += " video -> instruction ";
                Exercise exer = Utility.GetExercise(iGroupNum, iExerNum);
                LayoutInstruction(exer);
                displayState = State.Instruction;
                //mcVideo.KeepVisible = false;
                //mcVideo.Hide();
            }

            Utility.WriteLog(this, strDebug);
        }
    }
}
