# Anxiety and Stress Self Management - howRU.life
#### With the ever increasing demand of people suffering from mental health issues, it has been very difficult for patients to seek some cure and relief from stress and anxiety. When dealing with day to day activities, whether it is school or work, many people sometimes face stress and/or become anxious.

#### There are limited resources in the market that allow for these people to help cope with stress and anxiety. The app’s goal is to be an interactive platform to help users manage stress and anxiety by first evaluating how they feel and then offering healthy practices to help eliminate the stress and/or anxiety that the user is facing.

#### The purpose of this capstone project was to develop the first iteration of the Anxiety and Stress Self Management mobile application, named howRU.life. Primarily, the app’s goal is to be an interactive platform to help users manage stress and anxiety by first evaluating how they feel and then offering healthy practices to help eliminate the stress and/or anxiety that the user is facing. 

### Example Screens:


Home  Screen       |  Mood Diary Screen
:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/90110498/164375385-7130c694-50a0-4403-a09d-442e5c0bb7a3.JPG" alt="Home" width="350"/><br>  |  <img src="https://user-images.githubusercontent.com/90110498/164375491-ebc28945-5746-4596-a37e-1b7ba3685df6.JPG" alt="Calendar" width="350"/><br>

In Control Screen           |  Breathing Exercise
:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/90110498/164375381-8d02b87e-11e4-4812-bb14-c0a7b0c0a64d.JPG" alt="Mood" width="350"/><br>  |  <img src="https://user-images.githubusercontent.com/90110498/164375370-32a9ec0f-a7d1-4799-a7f0-870eebf17f80.JPG" alt="Music" width="350"/><br>

-----------------------------------------------------------------------------------------------------------------------------------------------------------


### GUIDE TO START THE APPLICATION

## Step 1: in terminal, update the version of react-native to the latest version
npm install

# NOTE: To upgrade react-native to the latest version (DO NOT DO THIS UNLESS YOU ARE TOLD TO)!!!
npm install --save react-native@latest

# NOTE: if you upgrade react-native's version, you also have to update the react-native-cli (DO NOT DO THIS UNLESS YOU ARE TOLD TO)
npm install -i -g --force react-native-cli

## Step 2: Start Metro (application watcher), inside your React Native project run
npx react-native start

## Step 3: Start the application

# (Android) open another terminal aside from the first one and run the line below
npx react-native run-android

# (ios) open another terminal aside from the first one and run the line below
npx react-native run-ios

# TROUBLESHOOTING: go to https://reactnative.dev/docs/troubleshooting

----------------------------------------------------------------------------------------------


### ANDROID SETUP

## Step 1: Download Node LTS windows installer, go to
https://nodejs.org/en/download/

## Step 2: Download Java 11 jdk, go to
https://www.oracle.com/java/technologies/downloads/

## Step 3: Download and install Android Studio
https://developer.android.com/studio

## Step 4: Configure the ANDROID_HOME environment variable
File Explorer > Control Panel > User Account > User Accounts > Change my environment variables

# Under "user variables" > "New..."
Variable name: ANDROID_HOME
Variable value: C:\Users\[name]\AppData\Local\Android\Sdk

# Copy and paste into powershell, and verify ANDROID_HOME has been added
Get-ChildItem -Path Env:\ 

## Step 5: Configure JAVA_HOME environment variable
File Explorer > Control Panel > User Account > User Accounts > Change my environment variables

# Under "user variables" > "New..."
Variable name: JAVA_HOME
Variable value: C:\Program Files\Java\jdk-[version]
# "OK"

# under "user variables" > "Path" > "Edit..." > "New"
%JAVA_HOME%\bin
# "OK"

# Copy and paste into CMD, and verify JAVA_HOME has been added
echo %JAVA_HOME%

## Step 6: Configure path to Android Studio platform tool (this will allow you to run the project from VSC)

# under "user variables" > "Path" > "Edit..." > "New"
C:\Users\[name]\AppData\Local\Android\Sdk\platform-tools
# "OK"

## Step 7: Open Android Studio > open settings > SDK Manager > SDK Platforms, select
Android API 32
Android 11.0 (R)

# Select "Show Package Details" and under "Android 11.0 (R)" section, select
Android SDK Platform 30
Sources for Android 30
Intel x86 Atom_64 System Image
Google APIs Intel x86 Atom System Image
Google APIs Intel x86 Atom_64 System Image
Google Play Intel x86 Atom System Image
Google Play Intel x86 Atom_64 System Image

## Step 8: Open Android Studio > open settings > SDK Manager > SDK Tools, select
Android SDK Build-Tools 33-rc1
Android SDK Command-line Tools (latest)
Android Auto API Simulators
Android Auto Desktop Head Unit Emulator
Android Emulator
Android SDK Platform-Tools
Google Play APK Expansion library
Google Play Instant Development SDK
Google Play Licensing Library
Google Play services
Google Web Driver
Intel x86 Emulator Accelerator (HAXM installer)
# OK

## Step 9: Open Android Studio > open settings > Virtual Device Manager > Create device, select
Pixel 2

# Under x86 Images, download both
R 30 x86 Android 11.0(Google APIs)
R 30 x86_64 Android 11.0

# NOTE: Select the image that has (Google APIs) on it, and press "Finish", then try launching the emulator, if it works, you're good to go. 
If you get an error, try the option below

# NOTE: Select the image WITHOUT (Google APIs) on it, then try launching the emulator.
If you still get an error, try the option below

# NOTE: Select the image that has (Google APIs) on it, then before pressing "Finish" under the section of "Emulated Performance" change the Graphics to "Software - GLES 2.0", then try running the emulator.
If you still get an error, try the option below

# NOTE: Select the image WITHOUT (Google APIs) on it, then before pressing "Finish" under the section of "Emulated Performance" change the Graphics to "Software - GLES 2.0", then try running the emulator.
If you still get an error, try the option below

# NOTE: Open File Explorer > C:\Users\[name]\.android, add a new file called "advancedFeatures.ini", inside add
Vulkan = off
GLDirectMem = on
# save and repeat Step 9, until one of the options above works

## Step 10: Open the project in Android Studio under the "android" file that's inside of the main directory of this project. (Keep Android Studio Opened)

### ANDROID SETUP DONE


----------------------------------------------------------------------------------------------

### IOS SETUP

# Step 1: Open terminal outside of VSC (Keep this terminal open)
brew update
brew install node
brew install watchman
brew install git

## Step 2: Install XCode through the app store
## Step 3: Install and/or update XCode command line tools through the terminal (May take a while to download)
xcode-select --install
softwareupdate --install -a

# NOTE: if you already have XCode, but your command line tools are not updating, it is likely because you might have a pending MacOS update. If this is the case run
sudo rm -rf /Library/Developer/CommandLineTools
xcode-select --install

## Step 3: Open up XCode > Preferences > Locations
on the "Command Line Tools" section, make sure you have the latest version selected

## Step 4: XCode > Preferences > Components
download the iOS 15.0 Simulator (Latest Version)

## Step 5: Open another terminal outside of VSC 
sudo gem install cocoapods

# NOTE: if you get an error installing cocoapods do
brew cleanup -d -v 
brew install cocoapods

# NOTE: if you see failed to link then run 
brew link cocoapods

# Step 6: initialize Podfile, while on the main directory do
cd ios
pod init
# (If it doesn't exist) and then
pod install

### IOS SETUP DONE

# NOTE: if you get ** BUILD FAILED ** when attempting to start the application, you most likely will have to run the project inside of XCode itself. The file you want to open is on ANXIETY-STRESS-SELF-MANAGEMENT > ios > anxietyStressSelfManagement.xcodeproj

# NOTE: if you get "fatal error: 'React/RCTBridgeDelegate.h' file not found #import <React/RCTBridgeDelegate.h>", repeat Step 6, but at the end open the workspace project and delete the build from ios folder, then start the application

# NOTE: if you get "Error error SHA-1 for file is not computed" issue, do
npm install -i -g --force react-native-cli
# delete the node_modules, reinstall pods, delete workspace build, re-install dependencies, and run metro and the project again.


# remember to delete the pods file and the podfile.lock and do
cd ios
pod install --repo-update
cd ..
npx react-native run-ios