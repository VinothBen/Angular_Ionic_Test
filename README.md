# Ionic 2 Webpack Starter

Ionic 2 starter project using Webpack 2 and [@ngtools/webpack](https://github.com/angular/angular-cli/tree/master/packages/webpack) for AoT template compilation.

Includes Sass support for [theming your app](https://ionicframework.com/docs/v2/theming/theming-your-app/).

## Motivation

The [Ionic CLI](http://ionicframework.com/docs/cli/) is the officially supported tool for creating and managing Ionic projects. So why use a custom project workflow instead? Here are my reasons:

* Isolate the project from possible breaking changes in the [Ionic CLI](https://github.com/driftyco/ionic-cli) and related moving parts, i.e. [ionic-app-scripts](https://github.com/driftyco/ionic-app-scripts), [ionic2-app-base](https://github.com/driftyco/ionic2-app-base), etc.
* Build as a web app or a Cordova mobile app, with slightly different settings. E.g. `cordova.js` should not be included when deploying to a web server.
* Encapsulate styles in components the Angular way, i.e. using `styleUrls`, instead of requiring Sass rules to match the component `selector`.
* Follow the Angular [style guide](https://angular.io/styleguide#!#02-02) convention for file naming.

In other words, have full control over the build process.

## Usage

### Clone This Project

Simply clone this project and use it as it is, or rename it to whatever you like.
```
git clone https://github.com/mirkonasato/ionic2-webpack2-starter my-app
```

### Install Dependencies

Install all the dependencies (this only needs to be done once) with NPM:
```
cd my-app
npm install
```
(You can also use [Yarn](https://yarnpkg.com/) instead of NPM of course.)

### Add Cordova

If you only want to create a (progressive) web app you can skip this step. To be able to build a mobile app with Cordova, create a new Cordova project in a `cordova` sub-folder using the [Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/) (did I say Cordova enough times?):

```
cordova create cordova
```

then edit `cordova/config.xml` and set your app id, name, etc.

### Local Development Server

To start a local development web server with automatic refresh type:
```
npm run serve
```
Your application will be accessible at [localhost:8080](http://localhost:8080/) by default. See the [webpack-dev-server docs](https://webpack.github.io/docs/webpack-dev-server.html) if you want to customise anything.

### Build Targets

* `npm run build` - builds the project as a (progressive) web app inside the `dist` folder.
* `npm run build:prod` - same as above but with production settings, i.e. it enables Angular production mode, Ahead-of-Time template compilation, and code obfuscation/minification.
* `npm run build:cordova` - prepares the project for building a mobile app with Cordova. The output in this case is the `cordova/www` folder.
* `npm run build:cordova:prod` - same as above but with production settings.

### Running as a Mobile App

Simply build the project as described above, then use [Cordova CLI](https://cordova.apache.org/docs/en/latest/guide/cli/) from inside the `cordova` sub-folder to build and run.

E.g. for Android build the project in the top-level folder
```
npm run build:cordova
```
add Android as a platform (only needs to be done once):
```
cd cordova
cordova platform add android
```
and then you run the app in an emulator with
```
cordova emulate android
```

For iOS it's the same, just replace `android` with `ios`. Please refer to the [Cordova CLI docs](https://cordova.apache.org/docs/en/latest/guide/cli/) for the full list of available commands.

### LiveReload in Android/iOS

To automatically reload the app at every change while running it in Android/iOS launch
```
npm run serve:cordova
```
this will start the dev server and create a special build in `cordova/www` with `index.html` set to load scripts from the dev server, using your machine external IP address.

In another terminal deploy the app to Android/iOS as usual with e.g.
```
ionic emulate android
```

You can even deploy to multiple devices and they will all live reload any changes.

#### READMEFILE FROM QUICKSTART OF ANGULAR@ AND KARAMA JASMIN ##########
################                              ##################
#########                                           ##########

# Angular QuickStart Source
[![Build Status][travis-badge]][travis-badge-url]

**This repository is now deprecated. The Angular Quickstart project was a nice starting point for creating Angular applications. Now we recommend using the [Angular CLI](https://github.com/angular/angular-cli) to create new Angular projects.**

**Starting from 1 November 2017, all the Angular documentation, at [angular.io](https://angular.io), is based on the Angular CLI.**

**Let's [get started](https://angular.io/guide/quickstart)**

---

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.

It's been extended with testing support so you can start writing tests immediately.

**This is not the perfect arrangement for your application. It is not designed for production.
It exists primarily to get you started quickly with learning and prototyping in Angular**

We are unlikely to accept suggestions about how to grow this QuickStart into something it is not.
Please keep that in mind before posting issues and PRs.

## Updating to a newer version of the Quickstart Repo

From time to time the QuickStart will be enhanced with support for new features or to reflect
changes to the [official Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

You can update your existing project to an up-to-date QuickStart by following these instructions:
- Create a new project using the [instructions below](#create-a-new-project-based-on-the-quickstart)
- Copy the code you have in your project's `main.ts` file onto `src/app/main.ts` in the new project
- Copy your old `app` folder into `src/app`
- Delete `src/app/main.ts` if you have one (we now use `src/main.ts` instead)
- Copy your old `index.html`, `styles.css` and `tsconfig.json` into `src/`
- Install all your third party dependencies
- Copy your old `e2e/` folder into `e2e/`
- Copy over any other files you added to your project
- Copy your old `.git` folder into your new project's root

Now you can continue working on the new project.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/angular/quickstart  my-proj
cd my-proj
```

We have no intention of updating the source on `angular/quickstart`.
Discard the `.git` folder..
```shell
rm -rf .git  # OS/X (bash)
rd .git /S/Q # windows
```
### Delete _non-essential_ files (optional)

You can quickly delete the _non-essential_ files that concern testing and QuickStart repository maintenance
(***including all git-related artifacts*** such as the `.git` folder and `.gitignore`!)
by entering the following commands while in the project folder:

##### OS/X (bash)
```shell
xargs rm -rf < non-essential-files.osx.txt
rm src/app/*.spec*.ts
rm non-essential-files.osx.txt
```

##### Windows
```shell
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```shell
git init
git add .
git commit -m "Initial commit"
```

>Recover the deleted `.gitignore` from the QuickStart repository 
if you lost it in the _Delete non-essential files_ step.

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```shell
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)

## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured Protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
