# dactr_app
The mobile app for Dactr.

### Dependencies:
1. Have Node.js installed
2. Install Nativescript CLI
      `$ npm install -g nativescript`
3. Once installed enter dactr_app directory and run command:
      `$ npm install` 
   This will install all the dependencies in the package.json file
 
### Run App:
1. tns preview 
      The command above will create a QR code that you can scan using the Nativescript Playground App on your phone
  
  
  
### Android Emulation:
1. Navigate to dactr_app directory and run `$ tns run android`
2. Run option 2 (configure for local builds) and allow the powershell script to install dependencies
3. (OPTION 1) Navigate to the Android\android-sdk\tools\bin directory it installs and follow the steps in the command tools section of https://docs.nativescript.org/tooling/android-virtual-devices#setup-android-emulators 
      - **Instead of "system-images;android-25;google_apis;x86", use "system-images;android-28;google_apis;x86_64". Make sure to download the image first with sdkmanager, as it describes**
4. (OPTION 2) Go to https://www.genymotion.com/download/ and download your OS version (with VirtualBox if needed). When the software is opened, sign up with the option for personal use. Then choose an android decice image in their catalogue (with Android 8 or higher), accept the default settings, and run it.
      - To enable Google Play Services, click on the "**Open GAPPS**" button at the side of the VM and let it do its thing.
5. Back in the dactr_app directory, run `$ tns run android` again. Let the emulator load. If the app launch fails and the emulator is still loading itself, wait for the emulator to be fully loaded and try `$ tns run android` once again.
