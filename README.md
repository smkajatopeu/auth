# Authorization with React Native & Firebase
### Sign-in method Email & Password
> ### Usage
```
Firebase (v9.9.0)
@react-navigation/native,
@react-navigation/native-stackm
react-native-safe-area-context
react-native-screens
```
_____
> ### Installation
```
git clone https://github.com/smkajatopeu/auth.git
cd auth/
yarn
yarn start
```
_____
> ### Run on an emulator or on a real device
You need an android emulator to run
but it is possible with a real device, the instruction is given at the bottom of the page

## It is important

#### Design borrowed from Purrweb UI/UX Studio on https://dribbble.com/

#### link to layout: https://dribbble.com/shots/14442698/attachments/6123956?mode=media

> <img src='https://github.com/smkajatopeu/auth/blob/main/src/assets/LoginScreen.jpg' width='250' height='500' /> <img src='https://github.com/smkajatopeu/auth/blob/main/src/assets/RegisterScreen.jpg' width='250' height='500' /> <img src='https://github.com/smkajatopeu/auth/blob/main/src/assets/HomeScreen.jpg' width='250' height='500' />
_____
## Launching a project on a real device via usb cable

> Connect usb cable to computer/laptop;

> Then in the device > developer settings, enable the developer option usb debugging;

> We go into Android Studio, pen the android folder into project;

> After initializing the project, go to the device tab in the upper right corner;

> In the physical tab, select your device and run app;

> Once completed, the app should appear on your device;

> Close Android Studio and go to console/terminal;

> In the console, being in the project directory, namely auth, we write these commands:
```
adb devices
adb -s <Your Device> reverse tcp:8081 tcp:8081
yarn start
```
> and then 
> Open the application on your phone in order to connect the device to the project
