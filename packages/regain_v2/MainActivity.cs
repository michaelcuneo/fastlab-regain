using System;
using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;



using System.Globalization;
using System.Resources;
using System.Collections;
using Android.Content.PM;

namespace Regain_v2
{
    [Activity(Label = "Regain_2",
        Theme = "@android:style/Theme.NoTitleBar", 
        MainLauncher = false,
        Icon = "@drawable/appicon", 
        ScreenOrientation = ScreenOrientation.Landscape)]
    public class MainActivity : Activity
    {
        TextView movingText;
        TextView progressText;
        TextView welcomeText;
        Button butBack;
        Button butSkip;
        Button butNext;
        //int scrollY;
        String[] strIntroPages;
        static int ndxIntro = 0;

        //-------------------------------------------------------------------------
        protected override void OnCreate(Bundle bundle)
        {
            base.OnCreate(bundle);
            SetContentView(Resource.Layout.Main);

            // Get buttons from the layout resource, attach events
            butBack = FindViewById<Button>(Resource.Id.mainButBack);
            butSkip = FindViewById<Button>(Resource.Id.mainButSkip);
            butNext = FindViewById<Button>(Resource.Id.mainButNext);

            butBack.Click += delegate { butBack_Click(); };
            butBack.Visibility = ViewStates.Invisible;
            butSkip.Click += delegate { butSkip_Click(); };
            butNext.Click += delegate { butNext_Click(); };

            progressText = FindViewById<TextView>(Resource.Id.mainTxtProg);
            movingText = FindViewById<TextView>(Resource.Id.mainTxtIntr);
            welcomeText = FindViewById<TextView>(Resource.Id.mainTxtWelc);

            strIntroPages = Resources.GetStringArray(Resource.Array.IntroText);
            movingText.Text = strIntroPages[ndxIntro];
            welcomeText.Text = "Welcome to";
            progressText.Text = String.Format("{0} / {1}", ndxIntro + 1, strIntroPages.Length);

            string strDebug = "OnCreate " + Utility.loadProperties();   // use text field for debug
            if (strDebug.Contains("failed"))
            {
                strDebug += Utility.loadDefaults(this);
            }
            Utility.WriteLog(this, strDebug);   // save to log file
        }

        //-------------------------------------------------------------------------
        // jump text backwards
        private void butBack_Click()
        {
            butNext.Visibility = ViewStates.Visible;
            ndxIntro--;
            if (ndxIntro < 0)
            {
                ndxIntro = 0;
            }

            if (ndxIntro == 0)
            {
                butBack.Visibility = ViewStates.Invisible;
            }
            movingText.Text = strIntroPages[ndxIntro];
            progressText.Text = String.Format("{0} / {1}", ndxIntro + 1, strIntroPages.Length);

            string strDebug = "butBack_Click " + progressText.Text;
            Utility.WriteLog(this, strDebug);   // save to log file
        }

        //-------------------------------------------------------------------------
        // change to another view
        private void butSkip_Click()
        {
            string strDebug = "butSkip_Click ";
            var intent = new Intent(this, typeof(ContentActivity));
            Utility.WriteLog(this, strDebug);   // save to log file
            StartActivity(intent);
        }

        //-------------------------------------------------------------------------
        // jump text forwards
        private void butNext_Click()
        {
            butBack.Visibility = ViewStates.Visible;
            ndxIntro++;
            if (ndxIntro >= strIntroPages.Length)
            {
                ndxIntro = strIntroPages.Length - 1;
            }
            if (ndxIntro == strIntroPages.Length - 1)
            {
                butNext.Visibility = ViewStates.Invisible;
            }
            movingText.Text = strIntroPages[ndxIntro];
            progressText.Text = String.Format("{0} / {1}", ndxIntro + 1, strIntroPages.Length);

            string strDebug = "butNext_Click " + progressText.Text;
            Utility.WriteLog(this, strDebug);   // save to log file
        }
    }
}

