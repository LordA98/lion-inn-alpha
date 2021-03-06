# The Lion Inn Website
## www.lioninn.co.uk

## Overview

This repository contains all the files used for developing the alpha version for The Lion Inn website.  This version was also used as the starting blocks for the WordPress theme.

I created this 'alpha' bare bones version of the site as we wanted to get something live as soon as possible.

The Lion Inn is a pub in Trellech, Monmoutshire, Wales.

## Technologies & Tools

__HTML__ - Markup language used for theme (obviously).

__CSS__ - Used to style theme (on top of Bootstrap styles).

__Bootstrap__ - Front-End Framework used to style themes.  Primary use is for scalability and structure.

__JavaScript__ & __JQuery__ - Used for theme functionality (on top of Bootstrap).

__Taiga__ - Agile / Kanban board to track things to-do and passively document previous bugs and features.

__Git__ & __GitHub__ - Source control (obviously - you're here).

__Gulp__ - Task Runner - automatically compile Sass, concatenate CSS & JS files, create folder for production / test release.

__NodeJS__ & __NPM__ - Used purely to install and manage any packages needed for Gulp tasks.

## Download & Setup

```git clone https://github.com/LordA98/lion-inn-alpha.git```

### Windows

_Assumed Windows 10 but will probably also work with Windows 7_

Download & Install NodeJS from here - [NodeJS](https://nodejs.org/en/download/).

To check if Node is installed, run ```node -v``` or ```npm -v```.

Run ```npm i```.

Run ```gulp watch``` to check that Gulp is working.

### Mac OSX

We need NodeJS installed in order to use NPM to install Gulp.  I have used Homebrew to install Node, but as long as it's installed, it doesn't matter.

To check if Node is installed, run ```node -v``` or ```npm -v```.

Retrieve the latest version of Node:

```brew update```

If it recommends to do so, run: 

```brew upgrade```

Install Node:

```brew install node```

Check install with ```node -v``` and ```npm -v```.

Run ```npm i```.

Try running ```gulp watch``` to check that it works.

__Trouble Shooting__

"_Error: Node Sass does not yet support your current environment..._": 

Run ```npm rebuild node-sass```.  Or if your error isn't Node Sass related, replace 'node-sass' with the relevant module name.


## Development

### Theme Development

I've been using Gulp to automate Sass compilation and concatenate all CSS files into style.css and all JS files into script.js.

Open a cmd prompt or Git Bash and navigate to the repository.

Run ```gulp watch```.

There might be a delay before it starts, but it should say this:

```
$ gulp watch
[19:05:57] Using gulpfile C:\projects\Websites\lion-inn\gulpfile.js
[19:05:57] Starting 'watch'...
```

Whenever you make a change (and save) to a CSS or JS file, it will automatically compile / concatenate as needed.  The output should be:

For CSS:

```
[19:09:16] Starting 'sass'...
[19:09:17] Finished 'sass' after 535 ms
[19:09:17] Starting 'css'...
[19:09:18] Finished 'css' after 436 ms
```

For JS:

```
[19:10:07] Starting 'js'...
[19:10:07] Finished 'js' after 113 ms
```

__Project Structure__

_HTML_

Other than the index.html file, all other HTML files should be placed into the 'html' directory.

_Sass & CSS_

Other than the style.min.css file, any new stylesheets should be created in the 'sass' directory with a .scss extension.  The 'gulp watch' task explained above with compile the Sass into CSS (in the 'stylesheets' directory) and then concatenate the CSS files into style.min.css.

_JavaScript_

Other than the script.js and gulpfile.js files, any other JavaScript files should be placed into 'scripts' directory.  The 'gulp watch' task will concatenate this into script.js.

__Conclusion__

In essence, all you need to do is run ```gulp watch```.   You can then develop as needed and refresh the browser and the changes will show.  If changes do not show; either you refreshed too quickly, and the gulp task didn't finish yet, or there was an error in the code (check the gulp watch feed in the cmd prompt, Git Bash or Terminal).

## Testing

There are no tests of any sort (_yet_).  The only form of testing at the moment is locally and on two test sites.

I have setup two 'test environments' for the site.  These are just freely hosted sites (hence the advertisement in the domain name).  These allow me to get feedback from others as they can navigate to these two websites like any normal site.

Before uploading to either of these sites, we must first create the 'prod package' (this technically isn't necessary, but it makes it easier to ensure that everything needed is included.

Stop the ```gulp watch``` task using ```Ctrl + C```.  Then run ```gulp test```.  This will combine all of the files and folders needed into one folder called 'test'.  Everything in this folder needs to be uploaded for the site to run properly.

__1. http://test-lion.orgfree.com/__

Uploading to this test site:

Uploading to this site uses FTP.  _Uploading to the second test site is easier, but has a lot of issues signing into the file manager for the site.  This is due to faults on the hosting companies side._

FTP Details:

Host: doms.freewha.com
Username: test-lion.orgfree.com
Password: _ask for it_


__2. https://test-lion.000webhostapp.com/__

Uploading to this test site:

Navigate to https://files.000webhost.com/.

Site Name: test-lion
Password: _ask for it_

Delete files in 'public_html' directory.  

Drag and drop files from 'prod' folder into 'public_html' folder on website.

Alternatively, also use FTP:

Host: files.000webhost.com
Username: test-lion
Password: _ask for it_

## Deployment

Stop running any Gulp tasks currently running (probably 'gulp watch').

Run ```gulp prod```.  

This will move the files currently in 'prod' to a backup folder - backups/DDMMYYYY.  It then deletes everything from the 'prod' folder.  Then adds all needed files into the 'prod' folder.  

The 'prod' folder and 'backups' folders should hardly change and not be touched.  The idea of the 'prod' folder is to keep track of what is currently live, and to ensure we deploy all needed files.

All the files and folders that are needed are listed in the 'prod' task in the gulpfile.js file. 

## Documentation

### Design

Design documentation can be found in [docs/designs](https://github.com/LordA98/lion-inn/tree/master/docs/designs).

This directory contains two sub-directories:

1. ```pngs``` - PNG versions of website design.

2. ```psds``` - The original Photoshop versions of the website design.

Use the PNG files as a reference for development.

Minor changes to the design are not replicated in the designs as the trade off of effort to value isn't worth it.

Any major changes will require the designs to be updated in Photoshop and for new PNG files to be created.
