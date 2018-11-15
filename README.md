# The Lion Inn Website
## www.lioninn.co.uk

## Overview

This repository contains all the files used for developing the WordPress theme for The Lion Inn website.

The Lion Inn is a pub in Trellech, Monmoutshire, Wales.

### Start to Finish

#### Phase 1 - Alpha (Complete)

The target for phase 1 was to create a barebones, MVP site that included the home, food, menu and events sections.  This needed to be done as early as possible so that the Christmas menu would be live in plenty of time of people to view and book.

This was achieved on Sunday 4th November 2018.

The 'alpha' was released with an acceptably functioning website including the required sections explained above.  The events section was released without the desired functionality of the embedded scrollable upcoming events section (refer to docs/designs/pngs/desktop.png) to see what I mean.

No WordPress functionality was included in this release.  However, this design will be used as the first versoin of the theme used for WordPress - lioninn-alpha. 

#### Phase 2 - WordPress Integration of Alpha Theme (Current)

Following on from phase 1, the next phase is to create a WordPress version of the alpha site.  The main goal of this phase is for the menu and (potentially) the events sections to be editable (add, edit, delete menu items & event items).

#### Phase 3 - Beta

Back to theme development, as opposed to WordPress development.  Phase 3 will focus on adding the remaining sections (about us, gallery, and accommodation).  

The goal being the release of the lioninn-beta theme.

#### Phase 4 - WordPress Integration of Beta Theme

Once the lioninn-beta theme is finished, I will integrate the new beta theme into WordPress. 

When this site is released, we will begin to move out of the beta stage and into a finalised product.  As bugs and improvements get resolved following the beta release, the site will form into a fully functioning and (hopefully) lasting product.  

#### Phase 5 - Maintenance

The final phase - maintenance - will essentially be a constant on-going phase.  I expect the busiest part of this phase to be in the months following the final big release.  It will slowly get quieter and quieter over time.

## Technologies & Tools

__WordPress__ - Content Management System (CMS) used so that client can edit and update site when needed (within reason).

__HTML__ - Markup language used for theme (obviously).

__CSS__ - Used to style theme (on top of Bootstrap styles).

__Bootstrap__ - Front-End Framework used to style themes.  Primary use is for scalability and structure.

__JavaScript__ & __JQuery__ - Used for theme functionality (on top of Bootstrap).

__PHP__ - Scripting inside of WordPress.

__Taiga__ - Agile / Kanban board to track things to-do and passively document previous bugs and features.

__Git__ & __GitHub__ - Source control (obviously - you're here).

__Gulp__ - Task Runner - automatically compile Sass, concatenate CSS & JS files, create folder for production / test release.

__NodeJS__ & __NPM__ - Used purely to install and manage any packages needed for Gulp tasks.

## Prerequisites

- NodeJS Installed

## Download & Setup

Git clone etc

### Windows

italic - "assumed Windows 10 but will probably also work with Windows 7"


### Mac OSX


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

__Creating New Files__

If you need to create a new stylesheet - create a new .scss file and put into the 'sass' folder.  No references need to be added anyway as this will compile into the style.css file.

If you need to create a new script file - create a new .js file and put into the 'scripts' folder.  Again, no new references need to be added.

__Conclusion__

In essence, all you need to do is run ```gulp watch```.   You can then develop as needed and refresh the browser and the changes will show.  If changes do not show; either you refreshed too quickly, and the gulp task didn't finish yet, or there was an error in the code (check the gulp watch feed in the cmd prompt or Git Bash).

## Testing

There are no tests of any sort (_yet_).  The only form of testing at the moment is locally and on two test sites.

I have setup two 'test environments' for the site.  These are just freely hosted sites (hence the advertisement in the domain name).  These allow me to get feedback from others as they can navigate to these two websites like any normal site.

Before uploading to either of these sites, we must first create the 'prod package' (this technically isn't necessary, but it makes it easier to ensure that everything needed is included.

Stop the ```gulp watch``` task using ```Ctrl + C```.  Then run ```gulp prod```.  This will combine all of the files and folders needed into one folder called 'prod'.  Everything in this folder needs to be uploaded for the site to run properly.

__1. http://test-lion.orgfree.com/__

Uploading to this test site:

Uploading to this site uses FTP.  _Uploading to the second test site is easier, but has a lot of issues signing into the file manager for the site.  This is due to faults on the hosting companies side._

_Add FTP process / info / software in here_

__2. https://test-lion.000webhostapp.com/__

Uploading to this test site:

Navigate to https://files.000webhost.com/.

Site Name: test-lion

Password: _ask for it_

_Update this when the site actually starts working again_

## Design

Design documentation can be found in [docs/designs](https://github.com/LordA98/lion-inn/tree/master/docs/designs).

This directory contains two sub-directories:

1. ```pngs``` - PNG versions of website design.

2. ```psds``` - The original Photoshop versions of the website design.

Use the PNG files as a reference for development.

Minor changes to the design are not replicated in the designs as the trade off of effort to value isn't worth it.

Any major changes will require the designs to be updated in Photoshop and for new PNG files to be created.
