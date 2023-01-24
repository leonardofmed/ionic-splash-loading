# ionic-splash-loading
Experimental component for using loading animations together with asynchronous functions in an Ionic splash screen. This is useful for applications that need to load or synchronize data before the user can use it.

<img src="https://github.com/leonardofmed/ionic-splash-loading/blob/main/src/assets/emulator.gif" width="300" height="500"/>

## How to run (Android)
- Clone the repo and install dependencies with `npm i`;
- Create an emulator or connect a device to your machine;
- Run the application in device with `ionic cap run android`;

## Default Splash Screen
Ionic has a default splash screen that can be enabled through a plugin and some customization settings. More details can be seen in the [documentation](https://ionicframework.com/docs/native/splash-screen). In this project the default splash screen is shown for 2 seconds after moving to custom splash screen.

## Custom Splash Screen
After the default splash screen another custom splash screen is shown. This one is actually a page with the custom elements in it.