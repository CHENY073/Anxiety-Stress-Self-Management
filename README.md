### GUIDE TO START THE APPLICATION

## Step 1: in terminal, update the version of react-native to the latest version
npm install --save react-native@latest

# NOTE: if you have node_modules already in your directory, delete the node_modules file and run the above command again. You only have to run the above command once, every other time after you will use
npm install


## Step 2: To start Metro, inside your React Native project run
npx react-native start

# open a new terminal and run the line below (inside VSC)
npm start
    or
npx react-native start

## Step 3: Start your application

# (Android) open another terminal aside from the first one and run the line below
npm run android
    or
npx react-native run-android

# (ios) open another terminal aside from the first one and run the line below
npm run ios
    or
npx react-native run-ios --verbose

# TROUBLESHOOTING: go to https://reactnative.dev/docs/troubleshooting


----------------------------------------------------------------------------------------------

### ANDROID SET UP

## Step 1: 


----------------------------------------------------------------------------------------------

### IOS SETUP

# Step 1: Open terminal outside of VSC (Keep this terminal open)
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
# delete the node_modules, reinstall pods, delete workspace build, re-install dependencies, and run metro and the project again