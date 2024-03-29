# iDest #
## Interactive Front-end Web Development Project ##

![idest Logo](assests/images/idest_logo.png)

## Aim ##

The aim of this project was to create and build a Single-Page-Application (SPA) interactive front-end website using Google 
Maps API - [iDest](https://anthonynicklin.github.io/ms2-idest/). The SPA would allow users to search for their next city break and 
help users find attractions, hotels, bars and restaurants.

## UX ##

Starting with a mobile first design approach to this project I started creating mockups and wireframes for mobile and small screens. I then moved onto creating mockups 
and wireframes for medium and larger screens. The design of the site is modern, image rich, and easy to navigate and use. 

Mockups and wireframes can be view via this link - [Mockups/wireframes](assests/mockups_wireframes).

Below are user stories that were conducted in order to gain clear goals that needed to be achieved for this website.
1. I want to chose the country and city where my city break will be.
2. I want a map to center on the city I select.
3. I want the map to show me points of interest (POI) like bars, restaurants, attractions and hotels.
4. I want to be able to use this on different sized screens.
5. I want to be able to control the map.
6. With a click or tap have more information displayed about the POI.
7. I would like a form I can fill out in order to contact someone to discuss my break and book a trip.


The navigation bar is responsive having break points for smaller, medium and large screens. The navigation links disapear on screen width's below 992 pixals and a burger menu icon appears 
top right. When the burger icon is clicked, it brings a drop down menu with the navigation links displayed vertically down the left-hand side. There is a "to the top button" that 
appears when the user starts to scroll down the page for ease of navigation at all times and the navigation bar is also fixed to the top of the screen.

The [landing](https://anthonynicklin.github.io/ms2-idest/index.html) and [about](https://anthonynicklin.github.io/ms2-idest/index.html#about) sections combined make a visualy appealing
start to the users experience. Designed to give the user a simple message to explore and explain what the web application is there to do. Below the [about](https://anthonynicklin.github.io/ms2-idest/index.html#about)
section there is a carousel of images. The carousel is interactive with buttons on the bottom and sides to allow the user to go back and fourth through the images. Each image
has a small title on the left hand-side to add a little content. 

'Find your spot' is the message the user first sees on the [find](https://anthonynicklin.github.io/ms2-idest/index.html#find) section to encourage them to use the app. Simple instructions are written 
to ensure there is no confusion on how to use the app. The country dropdown menu already has some pre-populated countries but also includes an 'All' option incase the country they wish to view is not listed.
The input for the city destination uses Google Maps autocomplete function speeding up the process and also providing better useability on tounch screens as it can save further typing. The four POI buttons
once tapped or clicked sets the application off bringing back the results. Each tile and marker when clicked or tapped presents a neat info window anchored above the POI marker on the map. Different font weight
has been used in order to give the text in the tiles some hierarchy with out creating the font bigger. Shadow underneath each tile has also been applied to make them stand off the page.

The [booking](https://anthonynicklin.github.io/ms2-idest/index.html#book) section provides a easy to use contact form that sends the users information via email in order for someone to contact them back 
to discuss future trips. A image was used for the background of this section with the booking form itself having a white opacity to make it really stand out. Once the form has been submitted a modal is 
displayed thanking them.

During the process of designing this SPA, finding images and icons that visualy went together I found difficult and time consuming.

## Features ##

Features on this website are:

* The links in the navigation when hovered over turn black to indicate which link the users cursor is over.
* When hovering over any links the cursor changes from a pointer to a hand.
* The carousel in the [about](https://anthonynicklin.github.io/ms2-idest/index.html#about) section has interactive buttons.
* The country input field has a autocomplete function to aide the user in selecting/finding the city they wish to visit.
* Markers on the map when clicked or tapped bring up an info window with detailed information about that POI.
* The results cards are linked to the map and when clicked or tapped will bring up it's respected info window for additional information.
* The booking form uses custom input validation script to check the values before they are submitted.
* The booking form sends the information to an email address using emailJS.
* A successful form submission will display a modal with a thank you message.
* The modal can be closed using the close cross, close button, or by clicking anywhere outside the modal.

Future features
* Travel blog describing experiences in different cities around the world.
* Price checker for flights and hotels.
* User accounts so searches can be saved.

## Technologies Used ##

Below are a list of the programming languages, technologies and frameworks used for this website.

* HTML5
* CSS3
    * SASS
* JavaScript
* JQuery
* EmailJS
    * For sending the booking form vaules entered to an email address. 
* Markdown
    * Used to write the README.md file.
* [Bootstrap4.3.1 framework](https://getbootstrap.com/)
    * The website uses boostrap framework for it's grid system, pagelayout, button styling and responsive navigation bar.
* [Cloud9IDE](https://aws.amazon.com/cloud9/)
    * Cloud9 was the IDE used to write the code for this website.
* [MarvelApp](https://marvelapp.com)
    * This was used to design and create the wireframes for this project.
* [Google Fonts](https://fonts.google.com/)
* Git
    * Version control
* [Github](https://github.com)
* [Font Awesome](https://fontawesome.com/)
    * For social media icons and Glyphicons
* Google Chrome Developer Tools
* Firefox Inspector
* Safari

## Testing ##

I conducted testing across different platforms and web browsers in order to make sure the website worked correctly, and
looked great across each one. I also asked friends and family to test across their own devices and to give me honest opinons and feedback.

Platforms:
* Samsung Galaxy 8
    * Google Chrome
    * Firefox
    * Samsung web browser
* iPad Mini
    * Safari
* MacBook Pro
    * Google Chrome
    * Firefox
    * Safari
* Ubuntu 18.0
    * Google Chrome
    * Firefox
* Windows 10
    * Google Chrome
    * Firefox
    * Mircosoft Edge
    * IE 11

Manual testing was conducted to ensure the user story objectives where achieved.
1. Country
    * 'All' selected as the country and checked autocomplete shows cities from different countries.
    * Select each country and check autocomplete shows cities from the respected country.
    * When the country and city have been selected the map centers and zooms in on that city.
2. POIs
    * Click on 'Find' in navbar.
    * When clicked each POI button dispalys the correct POIs respectively. 
        * When 'All' and no city is selected.
        * When a country and city is selected.
    * Results from the last search are cleared before the next search results are dispalyed.
    * Markers are cleared on the map before the next markers are displayed.
3. Booking form
    * Use navigation link to 'Book' section.
    * Try to submit the empty form and verify that an error message about the required fields appears.
    * Try to submit the form with an empty name field and verify that a relevant error message appears.
    * Try to submit the form with invaild values in the name field and verify that a relevant error message appears.
    * Try to submit the form with an empty email field and verify that a relevant error message appears.
    * Try to submit the form with an invalid email address and verify that a relevant error message appears.
    * Try to submit the form with an empty telephone field and verify that a relevant error message appears.
    * Try to submit the form with an invalid telephone number and verify that a relevant error message appears.
    * Try to submit the form with all inputs valid. Modal should be displayed with thank you message.
    * Modal can be closed by clicking on any part of the window outside the modal.
    * Modal can be closed using the closed button or the cross button.
4. Map
    * Controls are shown on the map.
    * Drag the map around in all directions.
    * Zoom in and out of the map.
    * Switch between Map and Satellite views.
    * Click on a marker to display more information.
    * Click on a results tile and display more information above the marker on the map.
5. Web application works across different device types
    * Load website on different device types and perform all testing that has been stated above.

On Internet Explorer the position property 'sticky' was causing the map to be dispalyed 5.5em down from the top. The CSS value `top: 5.5em;`
is there to move the map down enough so the sticky navigation bar does not hide it when the user scrolls down. On IE, the browser was applying this
regardless if the user had scrolled down the page. In order for IE browser to display `top: 0;`, I had to add some CSS to target IE only. This issue
also highlighted the fact that IE does not support the position property 'sticky' at this time of writing. I have only be able to test this on IE 11
so far.

The map would fail to load and render randomly, occuring once every 10 times or so. The console would print *'InitMap is not a function'*. The
was caused due to the loading order of the scripts in my index.html file. The Google Maps API script was set to load first, then main.js that actually held the initMap function. 
On occasion the Google Maps API script would finish loading before the main.js file had. The Google Maps API would call the initMap function which had not
fully loaded resulting in not being able to call the function. By moving the Google Maps API script under the main.js script has resolve the issue.

HTML validation would pass values on required fields when they are actually incorrect. For example, in the name field numbers are excepted, in the email field it will pass 'anthony@example', and the telephone
field can except just characters. I created my own input validation script that also checks all fields are correct before submitting ([emailForm.js](js/emailForm.js)). If incorrect an error message will be 
displayed as an alert box to correct the user. 

## Deployment ##

The website was created using Cloud9 IDE using Ubuntu with BASH. Git was used for version control and pushed to a repository hosted on 
[Github](https://github.com).

The website is deployed using Github pages [iDest](https://anthonynicklin.github.io/ms2-idest)

### How to deploy the code locally ###

If you wish to run this code locally then please follow the instructions below. 

1. Download the code from the Github repository at [https://github.com/AnthonyNicklin/ms2-idest](https://github.com/AnthonyNicklin/ms2-idest).
2. Click on *Clone or download* then *Download ZIP*. This will download the code into a ZIP folder locally on your computer.
3. Uncompress the ZIP folder. 

#### Create your own Google API keys ####
In order to use this code for your own projects you will need to generate your own Google API key. This can be done by following the
instructions on the [Google Maps API](https://developers.google.com/places/web-service/get-api-key) website. Once you have a API key
continue to follow on with the steps below to add your key.

4. Open the index.html page with an IDE or using a text editior of your chose.
5. At the bottom of the page locate the Google Maps API link in the script section and input your API key after `key=`.

![Google API key location](assests/images/googleApiKey.png) 

*Make sure you save the file once you have added your key!*

The code is now ready to be run from either a web server or just locally from your computer. Configuring web servers is not in 
scope of this README file but instructions are below if you wish to run this locally.
1. Change to or open the directory the folder is located in.
2. Open the folder > right click on index.html > Open with > select a web browser. The code will open up in the web browser and will be running 
locally on your computer.


## Credits ##

### Code ###

* Scroll to top button [w3schools.com](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
    * Used to create the 'to top button'.
* Goolge Map Hotel Search [Google Maps examples](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)
    * Creates the search and then sends the query to Google. 
    * Code was customised in order to achieve user story objectives.
* Modal [w3schools.com](https://www.w3schools.com/howto/howto_css_modals.asp)
    * Modal for successful booking form submission.

### Images ###

All images for this web site are being used under free commercial license from [Pixaby](https://pixabay.com/). Links to each image are below.

* [New York skyline](https://pixabay.com/photos/new-york-skyline-new-york-city-city-668616/)
* [Hotel in carousel](https://pixabay.com/photos/hotel-hotel-rooms-home-decoration-1749602/)
* [Paris in carousel](https://pixabay.com/photos/paris-eiffel-tower-france-french-843229/)
* [Restaurant in carousel](https://pixabay.com/photos/restaurant-bar-counter-people-food-690569/)
* [Bar in carousel](https://pixabay.com/photos/buildings-night-urban-neon-sign-1245953/)

### Logo ###

Image of the stamp was taken from [Pixaby](https://pixabay.com/vectors/stamp-postage-post-vintage-postal-303749/) under free commercial license.
The writing of 'iDest' was screenshot from [Google Fonts](https://fonts.google.com/specimen/Special+Elite) Special Elite, and 
then overlayed using Abode Xd to create the final image.

### Markers ###

Flags where sourced under free commercial license at [Icons](https://icons8.com/icon/set/flag/color).

### Icons ###

The icons for the POI buttons where sourced under free commercial license from [Icons](https://icons8.com).

* [Hotel icon](https://icons8.com/icon/set/hotel/color)
* [Bar icon](https://icons8.com/icon/set/bar/color)
* [Restaurant icon](https://icons8.com/icon/set/restaurant/color)
* [Attractions icon](https://icons8.com/icon/set/fun-fair/color)


