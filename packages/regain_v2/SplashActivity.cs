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

// splash example from here:
// https://xamarinhelp.com/creating-splash-screen-xamarin-forms/

namespace Regain_v2
{
    [Activity(Label = "Regain v2",
        Icon = "@drawable/appicon", 
        Theme = "@style/SplashScreen",
        MainLauncher = true,
        NoHistory = true,
        ScreenOrientation = ScreenOrientation.Landscape)]
    public class SplashActivity : Activity
    {
        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Create your application here
        }

        protected override void OnResume()
        {
            base.OnResume();
            StartActivity(typeof(MainActivity));
        }
    }
}