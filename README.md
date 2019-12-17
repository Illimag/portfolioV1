# Portfolio Website

## Overview

This is the portfolio website source code.

The URL for the website is:

	https://jaemnkm.com

Web Hosting is with Github Pages, which is a static website hosting service by Github.

This website can also be reached with this URL:

	https://jaemnkm.github.io

Which will redirect to:

	https://jaemnkm.com

## Index Page

The index page is written in HTML with CSS's style and JavaScript's script tags inside the HTML page.

This allows the website to load without having reference additional external sheets.

As well as having inline CSS to make changes to the CSS for individual elements, to allow for designing with code.

Responsiveness is achieved using media queries.

Video background is disabled on mobile devices to save bandwidth.

To achieve this the source of the video file is embedded with:

	data-src

Instead of:

	src

Which means the video will not load unless the JavaScript is triggered to change:

	data-src

to

	src

Depending on the screen width of the device.

## Profile and Portfolio

The Profile and Portfolio pages are implemented with Mozilla Foundation's PDF viewer.

The PDF viewer is embedded with iframe onto the webpage.

For the Profile the webpage is:

	/about/about.html

The about.html has the iframe embedded with the PDF viewer as well as HTML/CSS that implements a back button over the PDF viewer.

The PDF viewer files are located here:

	/web

	/build

For Portfolio the link from the index page will link to the:

		/portfolio/redirect

From here depending on the device used, mainly if it is a mobile device or desktop device, it will redirect to the mobile or the desktop version of the portfolio.

The reasons for this is to save bandwidth for the user.

The size of the PDF file for mobile is much smaller than the one of Desktop.

So if the user is viewing the portfolio on a mobile device they will download a file ment for mobile devices.

While if the user is viewing the portfolio on a desktop device they will download a file ment for desktop devices.

The desktop and mobile portfolio files' image resolutions are set for their respective devices as well as the size of the actual PDF document.

For mobile devices it will be redirected here:

	portfolio-mobile.html

For desktop devices it will be redirected here:

	portfolio.html

From here the embedded iframe with the PDF viewer is loaded.

Both the portfolio-mobile and portfolio HTML pages have a custom HTML/CSS button to go back to the index page.

## Showcase

The showcase page is an interactive example of the portfolio.

Also it will showcase older work as well as up-to-date work, while the portfolio page showcase recent work.

The folder that the showcase component is located here:

	/showcase

Firstly the user is directed to here:

	redirect.html

From here depending on the size of the device it will redirect to a certain directory.

If the user's device is a mobile device then the page will redirect here:

	/showcase/mobile/index.html

If the user's device is a desktop device then the page will redirect here:

	/showcase/desktop/index.html

The design as well as the implementation of the mobile and desktop showcase is inherently different.

### Mobile Showcase

Firstly for mobile, it is designed as an web application.

As so it is built with AngularJS for it's single page application functionality.

This is implemented in the navigation.

Originally the navigation was built with custom HTML/CSS/JavaScript code that allows for this specific feature.

Here is an overview of that custom code:

	Problem:

	Wanted a navigation that would allow the user to navigate to different pages without the website reloading. 

	Basically a single page application type navigation. 

	But didn't want to use a framework because heavy boilerplate code. 

	Looked into Vue but wanted something even more simple, didn't want to add another library.

	Solution:

	Index.html has nav and iframe.

	Iframe allows .html page to load on another .html page, also will load all files on same server no problem.

	Navigation with click event that passes data-src of li element's .html to iframe's src.

	This allows the user to stay on index.html page while the navigation loads different .html pages on top of it depending on what button is clicked on the nav.

	Additional:

	Added CSS .active1 class which shows which button is currently active.

	Then with jQuery created function that removesClass .active1 from current and addClass to clicked via classSelector.

	Ran into issue when trying to build button on loaded page.

	An example would be if there is two buttons on test page 1, (Go to test page 2) and (Go to test page 3).

	If test page 2 button is clicked via href the page is loaded but navigation css .active1 would not be on correct li.

	More difficult because the selected id of buttom is in the DOM of test_page_1.html but it would need to change the css of the navigation in the DOM of index.html.

	The solution was using parent and window.frame functions to allow cross-DOM selecting.

	To test if this works the code needs to be uploaded to a live server.

	Test will not work local.

The source code can be found in the Scripts Repository in my Github.

From here, the index page of the mobile version of the showcase portfolio, the navigation has three tabs with three embedded iframes.

The three iframes links the three sections of the showcase.

The sections themselves are written with HTML/CSS/JavaScript.

### Desktop Showcase

The Desktop Showcase is still under design and development.

Mainly it is implemented with jQuery and Themepunch's Revolution Slider, as well as HTML/CSS/JavaScript.

## Live website

The live website can be reached with this URL:

	https://jaemnkm.com
