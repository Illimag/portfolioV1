# Portfolio Website Github.io Page

Live at this URL:

https://jaemnkm.github.io

Feel free to contact:

Email: jaemnkm@gmail.com
PGP: keybase.io/jaemnkm


## 10/4/2018

- Updated the Mobile version of the website's navigation to AngularJS.

### NOTE: 

1. button tags break on iOS.
2. Github gist that are too long will break the site on iOS.
3. There is a bug on the pro_[].html pages. It might have to do with the images sizes but not sure. The issue might be that the page loads before the images load completely.

### TODO:

2. Compress all files but have a folder with files that arent compressed for easy viewing.
3. Clean up code.
6. Add the live chat button functionality.

## 10/5/2018

- Added Desktop version of the website in desktop folder.

- The desktop version of the website is built with HTML/CSS/JS, this is just a prototype for design purposes.

### NOTE:

1. Because Marconi is the first item and design is the first category, marconi.html can be seen as the index page of the desktop version.
2. jaemnkm.github.io/index.html has a js that redirects to jaemnkm.github.io/desktop/marconi.html if the screen width is greater than or equal to 699 pixels.

.

	if (screen.width >= 699) {
		document.location = "desktop/marconi.html";
		}

.

3. "VIEW MORE" button links to more_[].html: EX: marconi.html -> more_marconi.html.
4. The reason why there is a seperate page for each item is because the website is built with Slider Revolution 5.3+ each seperate page for each seperate item has an api call that moves the slider to the slide of the item previously selected.

	EX: 

	-> marconi.html 

	-> VIEW MORE links to more_marconi.html

	-> more_marconi.html

	-> BACK TO PORTFOLIO links to marconi.html

	-> Rev Slider slide index for marconi is (1) so it slides to the first slide in the slider.

Here is the API for Rev Slider

	var tpj=jQuery;
	var revapi54;
	tpj(document).ready(function(){
		revapi54.on('revolution.slide.onloaded', function(){
			revapi54.revshowslide(1);
		}
	} 

### TODO:

1. Create High res versions of portfolio
2. Rethink Code page
3. Rethink UI/UX
4. Angular NAV for Desktop as well

## 10/8/2018

- Changed Website background to black.

- Added text to mobile nav

- Design edits to Code page

- Creating full background portfolio pages to display once item is selected. Test located in ~/test_folder/full_back_test

### NOTE:

1. Decided to change portfolio color scheme to black.
2. Code Page looks more like terminal, because of black background.
3. I like it but don't know until AB testing, but I don't want every client. Maybe black website will filter the ones I want to work for and filter out the ones I dont (Contrast).
4. After item is selected on mobile, I want it to go to a full background screen of the portfolio pieces in one image that can scroll. For example ~/test_folder/full_back_test/test0.html
5. White flicker between page changes, because of load time, website is default white but if it's fast enough it shouldn't show.

### TODO:

1. Create documentation for iOS iFrame scroll
2. Create documentation for full background tests.
3. Create full page portfolio scrollable assets for each of the portfolio items.
4. The test0 is connected to the marconi item page on the live site, rememeber to reverse it once test is completed.

## 10/10/2018

- Updated the rest of the portfolio on the mobile website

- Removed 789tens and Polarproduction from develop page

### NOTE:

1. Needs to keep working on the porfolio.
2. Remember to do the Desktop version next.
3. 789tens and polarproductions only did server migration/design edits/minor edits to source code.

### TODO:

1. Finish up the Mobile site and remember to start on the Desktop version next.
