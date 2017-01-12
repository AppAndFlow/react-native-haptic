using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.ReactNativeHaptic
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class ReactNativeHapticModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="ReactNativeHapticModule"/>.
        /// </summary>
        internal ReactNativeHapticModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "ReactNativeHaptic";
            }
        }
    }
}
