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
using Android.Content.PM;

// popup example from https://milenppavlov.wordpress.com/2015/10/15/xamarin-android-popup-window-recipe/

namespace Regain_v2
{
    [Activity(Label = "InfoActivity",
        Theme = "@android:style/Theme.NoTitleBar",
        Icon = "@drawable/appicon",
        ScreenOrientation = ScreenOrientation.Landscape)]
    public class InfoActivity : Activity
    {
        ImageView imgBack;
        ImageView imgHead;
        ImageView imgInfo;
        TextView txtInfo;
        private ListView _listView;
        // start numbers at zero then position and contents are the same
        private string[] choice = new string[] { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };

        //-------------------------------------------------------------------------
        // create the view
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Info);

            // Get buttons from the layout resource, attach events
            imgBack = FindViewById<ImageView>(Resource.Id.infoImgBack);
            imgHead = FindViewById<ImageView>(Resource.Id.infoImgIcon);   // debug only
            imgInfo = FindViewById<ImageView>(Resource.Id.infoImgInfo);
            txtInfo = FindViewById<TextView>(Resource.Id.infoTxtAbout);

            imgBack.Click += delegate { imgBack_Click(); };
            //imgHead.Click += delegate { imgHead_Click(); };
            imgInfo.Click += delegate { imgInfo_Click(); };

            string strDebug = "OnCreate ";
            Utility.WriteLog(this, strDebug);   // save to log file
        }

        //-------------------------------------------------------------------------
        // show a numeric pad to enter passcode
        private void imgBack_Click()
        {
            string strDebug = "imgBack_Click -> ContentActivity ";
            Utility.WriteLog(this, strDebug);   // save to log file
            var intent = new Intent(this, typeof(ContentActivity));
            StartActivity(intent);
        }

        //-------------------------------------------------------------------------
        // show a numeric pad to enter passcode
        private void imgInfo_Click()
        {
            string strDebug = "imgInfo_Click -> popup ";
            Utility.WriteLog(this, strDebug);   // save to log file
            var popup = CreatePopupWindow();
            popup.ShowAsDropDown(imgInfo, 10, 10);
        }

        //-------------------------------------------------------------------------
        // show a numeric pad to enter passcode
        private PopupWindow CreatePopupWindow()
        {
            int clicks = 0;
            string passentry = "";
            var ppw = new PopupWindow(this);

            var adapter = new ArrayAdapter<string>(this, Android.Resource.Layout.SimpleDropDownItem1Line, choice);

            _listView = new ListView(this) { Adapter = adapter };

            _listView.ItemClick += (sender, args) =>
            {
                string strDebug = "popup click ";
                Utility.WriteLog(this, strDebug);   // save to log file
                passentry += choice[args.Position];
                strDebug += passentry;
                clicks++;
                if (clicks >= 4)
                {
                    string strPassword = Resources.GetString(Resource.String.Password);
                    if (passentry.Equals(strPassword))
                    {
                        strDebug += " OK ";
                        // open new activity for settings
                        var intent = new Intent(this, typeof(SettingsActivity));
                        StartActivity(intent);
                    }
                    ppw.Dismiss();
                }
                Utility.WriteLog(this, strDebug);   // save to log file
            };

            ppw.Width = 100;
            ppw.Height = ViewGroup.LayoutParams.WrapContent;
            ppw.ContentView = _listView;
            return ppw;
        }
    }
}