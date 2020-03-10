---
title: How to build an Electron app using create-react-app. No webpack configuration or “ejecting” necessary.
date: 2018-08-03
tags: [javascript, react, electron, nodejs]
path: blog/build-electron-app-with-react
cover: ./preview.png
excerpt: Build a fantastic Electron app from scratch using create-react-app.
---
I recently built an [Electron](https://electronjs.org/ "ElectronJS site") app using [create-react-app](https://github.com/facebook/create-react-app "create-react-app repository"). I didn’t need to muck about with Webpack, or “eject” my app, either. I’ll walk you through how I accomplished this.

I was drawn to the idea of using create-react-app because it hides the webpack configuration details. But my search for existing guides for using Electron and create-react-app together didn’t bear any fruit, so I just dove in and figured it out myself.

If you’re feeling impatient, you can dive right in and look at my code. Here’s the [GitHub repo](https://github.com/csepulv/electron-with-create-react-app "Repository of this tutorial") for my app.

Before we get started, let me tell you about Electron and React, and why create-react-app is such a great tool.

## Electron and React
React is Facebook’s JavaScript view framework.
And Electron is GitHub’s framework for building cross-platform desktop apps in JavaScript.

Most use webpack for the configuration necessary for React development. webpack is a configuration and build tool that most of the React community has adopted over alternatives like Gulp and Grunt.

The configuration overhead varies (more on this later), and there are many boilerplate and application generators available, but in July 2016 Facebook Incubator released a tool, create-react-app. It hides most of the configuration and lets the developer use simple commands, such as npm start and npm run build to run and build their apps.

### What is ejecting, and why do you want to avoid it?

create-react-app makes certain assumptions about a typical React setup. If these assumptions aren’t for you, there is an option to *eject* an application (`npm run eject`). Ejecting an application copies all the encapsulated configuration of create-react-app to the your project, providing a boilerplate configuration that you can change as you wish.

But this is a _one way_ trip. You can’t undo ejecting and go back. There have been 49 releases (as of this post) of `create-react-app`, each making improvements. But for an ejected application, you would have to either forgo these improvements or figure out how to apply them.

An ejected configuration is over 550 lines spanning 7 files (as of this post). I don’t understand it all (well, most of it, actually) and I don’t want to.

## Goals

My goals are simple:

* avoid ejecting the React app
* minimize glue to get React and Electron working together
* preserve the defaults, assumptions and conventions made by Electron and create-react-app/React. (This can make it easier to use other tools that assume/require such conventions.)

## Basic Recipe
1. run `create-react-app` to generate a basic React application
2. run `npm install --save-dev electron`
3. add `main.js` from electron-quick-start (we’ll rename it to electron-starter.js, for clarity)
4. modify call to `mainWindow.loadURL` (in electron-starter.js) to use `localhost:3000` (webpack-dev-server)
5. add a main entry to `package.json` for electron-starter.js
6. add a run target to start Electron to `package.json`
7. `npm start` followed by `npm run electron`

Steps 1 and 2 are pretty straightforward. Here’s the code for steps 3 and 4:

```javascript
const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

And for steps 5 and 6:

```
{
  "name": "electron-with-create-react-app",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "electron": "^1.4.14",
    "react-scripts": "0.8.5"
  },
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  },
  "main": "src/electron-starter.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "electron": "electron ."
  }
}
```

When you run the npm commands in step 7, you should see this:

![Electron + React](./image-1.png)

## Specifying the loadURL in Production and Dev
In development, an environment variable can specify the url for mainWindow.loadURL (in electron-starter.js). If the env var exists, we’ll use it; else we’ll use the production static HTML file.

We’ll add a npm run target (to package.json) as follows:

```
"electron-dev": "ELECTRON_START_URL=http://localhost:3000 electron ."
```

This is just an example of a post. The original is here: https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c