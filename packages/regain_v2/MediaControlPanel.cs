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
    class MediaControlPanel : MediaController
    {
        bool keepVisible;
        public bool KeepVisible
        {
            get
            {
                return keepVisible;
            }
            set
            {
                keepVisible = value;
            }
        }

        //-------------------------------------------------------------------------
        // this constructor has to be declared but should never be used!
        private MediaControlPanel() : base(null)
        {
            // no content
        }

        //-------------------------------------------------------------------------
        // this constructor can be used
        public MediaControlPanel(Context context, Boolean useFastForward) : base(context, useFastForward)
        {
            keepVisible = false;   // default behaviour, same as base class
        }

        //-------------------------------------------------------------------------
        // this class has more explicit control over when to hide the controls
        public override void Hide()
        {
            if (keepVisible)
            {
                base.Show();
            }
            else
            {
                base.Hide();
            }

        }
    }
}