# React-Native Project Setup

## Step 1. Support ESLint, Prettier and Conventional Commits

### Setup Eslint

#### Installation

```bash
npm install eslint --save-dev
```

#### Config ESLint with Airbnb Package

Creating a ESLint configuration file with running:

```bash
npx eslint --init
```

Answer the questions about the configuration files

- **_How would you like to use ESLint?_**

  **_‣ To check syntax, find problems, and enforce code style_**

- **_What type of modules does your project use?_**

  **_‣ JavaScript modules (import/export)_**

- **_Which framework does your project use?_**

  **_‣ React_**

- **_Does your project use TypeScript?_**

  **_‣ No_** (Depends on which language you use in your project)

- **_Where does your code run?_**

  **_Browser_** (Choose Node if you are programing backend)

- **_How would you like to define a style for your project?_**

  **_▸ Use a popular style guide_**

- **_Which style guide do you want to follow?_**

  **_Airbnb: <https://github.com/airbnb/javascript>_**

- **_What format do you want your config file to be in?_**

  **_▸ JSON_**

Then the programe will check dependencies and ask if you want to install the dependencies.

```
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0
```

Choose `yes` to install all the dependencies

- **_Would you like to install them now with npm?_**

  **_‣ Yes_**

Now after you install the ESLint with Airbnb package,

1. Open your VSCode,
2. Go to `Extensions`,
3. Search `ESlint`,
4. Choose the one made by `Microsoft`,
5. Reopen your project with VSCode.

There will be an `.eslintrc.json` file created at your project root folder.

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [],
  "rules": {}
}
```

You can add your rules under the `rules` block.

### Setup Prettier

#### Install the dependencies

```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

#### Configuration

Add `eslint-plugin-prettier` to `"prettier"` and `"rules"` of your `.eslintrc.json` file that you created from last section.

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

This plugin ships with a `plugin:prettier/recommended` config that sets up both the `plugin` and `eslint-config-prettier` in one go.

Add `eslint-config-prettier` to `"extends"` of your `.eslintrc.json` file that you created from last section.

```json
{
  // ...
  "extends": ["airbnb", "plugin:prettier/recommended"]
}
```

Since airbnb rules could have conflict rules with Prettier, for example, Airbnb javascript style guide asks

> Always use double quotes (") for JSX attributes, but single quotes (') for all other JS.

However, Prettier uses [double quotes](https://prettier.io/docs/en/options.html#quotes) by default even though it doesn't suggest.

For solving this kind of conflicts, We need to create a `.prettierrc` file under your project folder with code:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 120,
  "singleQuote": true,
  "arrowParens": "always",
  "proseWrap": "preserve"
}
```

#### Add Prettier as npm command

We can also format all of our code by using prettier with a command line.

Open your `package.json` and add the below code block to your `scripts`.

```json
{
  // ...
  "scripts": {
    // ...
    "format": "prettier --write \"**/*.{js,jsx,json,md}\""
  }
}
```

### Setup commitlint

#### Install commitlint

```bash
npm install @commitlint/cli @commitlint/config-conventional --save-dev
```

#### Create `commitlint.config.js` file

Create the `commitlint.config.js` file at your project root folder, add the below configuration to the file.

```js
module.exports = { extends: ["@commitlint/config-conventional"] };
```

### Setup lint-staged

#### Install lint-staged

```bash
npm install lint-staged --save-dev
```

#### Config lint-staged

Create a file called `.lintstagedrc.json` at the root directory and add the below lint-staged command in it. You can check `lint-staged document` to figure out what command that lint-staged supports.

```json
{
  "src/**/*.+(js|json|ts|tsx)": ["eslint"],
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": ["prettier --write"]
}
```

### Setup Husky

#### Installation

```bash
npm install husky --save-dev
```

#### Enable Git hooks

`husky install` must be run in the same directory as `.git`, run the below code to enable git hooks.

```bash
cd .. && npx husky install app/.husky
```

Enable git hooks automatically after install

In the `pacakge.json` file, add

```json
// package.json
{
  "scripts": {
    "prepare": "cd .. && husky install front/.husky"
  }
}
```

#### Support commitlint with commit-msg git hook

Add `commit-msg` file at your root directory with the below command:

```bash
cd app && npx husky add .husky/commit-msg
```

Now go to `.husky/commit-msg` file, add the below code to the file

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

cd app
npx --no-install commitlint --edit "$1"
```

#### Support lint-staged with pre-commit git hook

Add `pre-commit` file at your root directory with the below command:

```bash
cd app && npx husky add .husky/pre-commit 'npm run lint-staged'
```

Open your `package.json` file, add the below code to the `scripts`:

```json
{
  // ...
  "scripts:" {
    // ...
    "lint-staged": "lint-staged",
  }
}
```

Now go to `.husky/pre-commit` file, add the below code to the file

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

cd app
npm run lint-staged
```

## Step 2: Support App Center

### 2-1: Add the SDK to the project

In a terminal window opened at the root of a React Native project, enter the following line to add Crash and Analytics services to your app:

```bash
npm install appcenter appcenter-analytics appcenter-crashes --save-exact
```

### 2-2: Integrate the SDK

#### 🍎 IOS

In the `iOS` folder

```bash
cd app/ios
```

Run `pod install` from iOS directory to install CocoaPods dependencies.

Open `app.xcworkspace` file, select the project -> right click -> select `New Files...`.

Filter `Property` at search bar and add a `Property List` file named as `AppCenter-Config.plist`

Open `AppCenter-Config.plist` as source code in the Xcode and copy the below content.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
      <key>AppSecret</key>
      <string>your-ios-appsecret-from-appcenter</string>
    </dict>
</plist>
```

**Modify** the app's `AppDelegate.m` file to include code for starting SDK:

Add these lines to import section above the `#if DEBUG` or `#ifdef FB_SONARKIT_ENABLED` declaration (if present):

```objc
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>
```

Add these lines to the `didFinishLaunchingWithOptions` method

```objc
[AppCenterReactNative register];
[AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
[AppCenterReactNativeCrashes registerWithAutomaticProcessing];
```

#### 🤖 Android

Create a new file with the filename `appcenter-config.json` in `android/app/src/main/assets/` with the following content:

```json
{
  "app_secret": "your-android-appsecret-from-appcenter"
}
```

**Modify** the app's `res/values/strings.xml` to include the following lines:

```xml
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
```

### 2-3: Explore Data

Now build and launch your app, then go to the Analytics section. You should see one active user and at least one session! The charts will get more relevant as you get more users. Once your app actually crashes, you will have Crashes data show up as well.

## Step 3: Install React-Navigation

### Installation

Install the required packages in your React Native project:

```bash
npm install @react-navigation/native
```

### Installing dependencies into a bare React Native project

```bash
npm install react-native-screens react-native-safe-area-context
```

#### For iOS

Run `npx pod-install ios`.

#### For Android

`react-native-screens` package requires one additional configuration step to properly work on Android devices. Edit `MainActivity.java` file which is located in `android/app/src/main/java/app/MainActivity.java`

Add the following code to the body of `MainActivity` class:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

and make sure to add an import statement at the top of this file:

```java
import android.os.Bundle;
```

This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.

Now, we need to wrap the whole app in NavigationContainer. Usually you'd do this in your entry file, such as index.js or App.js:

```javascript
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error "Unable to resolve module", you need to install that module in your project.

Now you are ready to build and run your app on the device/simulator.

## 4. Integrate a login stack view and a bottom tabs view for main pages in the app

### 4-1 Install native stack navigator

```bash
npm install @react-navigation/native-stack
```

### 4-2 Create an AppNavigator

Create an AppNavigator which contains two navigators, one is `MainStackNavigator`, the other one is `LoginStackNavigator`.

### 4-3 Install tab-based navigation

```bash
npm install @react-navigation/bottom-tabs
```

## 4. Add Redux

## 5.Setup DEV UAT Production Environment

## 6. Support Theme
