# iDest #
## Interactive Front-end Web Development Project ##

![idest Logo](assests/images/idest_logo.png)

## Aim ##

The aim of this project was to create and build a Single-Page-Application (SPA) interactive front-end website using Google 
Maps API [iDest](https://anthonynicklin.github.io/ms2-idest/). The SPA would allow users to search for their next holiday destination and 
help users find attractions, hotels, bars and restaurants.

## UX ##

Starting with a mobile first design approach to this project I started creating mockups and wireframes for mobile and small screens. I then moved onto creating mockups 
and wireframes for medium and larger screens. The design of the site is modern, image rich, and easy to navigate and use. 

Below are user stories that were conducted in order to gain clear goals that needed to be achieved for this website.
1. I want to chose the country and city where my city break will be.
2. I want a map to center on the city I select.
3. I want the map to show me points of interest POI like bars, restaurants, attractions and hotels.
4. I want to be able to use this on different sized screens.
5. I want to be able to control the map.
6. With a click or tap have more information displayed about the POI.
7. On large screens show the results displayed in a formative way.
8. I would like a form I can fill in in order to contact someone to discuss my break and book a trip.


The navigation bar is responsive having break points for smaller, medium and large screens. The navigation links disapear on screen width's below 992 pixals and a burger menu icon appears 
top left. When the burger icon is clicked, it brings a drop down menu with the navigation links displayed vertically down the left-hand side. The logo is visalble on medium to larger
screens in order to reduce the size of the navigation bar on small screens. There is a fixed "to the top button" that appears when the user starts to scroll down the page to provide
ease of navigation at all time.

The [landing](https://anthonynicklin.github.io/ms2-idest/index.html) and [about](https://anthonynicklin.github.io/ms2-idest/index.html#about) sections combined make a visualy appealing
start to the users experience. Designed to give the user a simple message to explore and explain what the web application is here to do. The [about](https://anthonynicklin.github.io/ms2-idest/index.html#about)
has a carousel of images of POIs. The carousel is interactive with buttons on the botton and on each side the user can click to select of go back and foruth through the images. Each image
has a small inspirational message at the botton.

'Find your spot' is the message the user first sees on the [find](https://anthonynicklin.github.io/ms2-idest/index.html#find) section to encourage them to use the app. Simple instructions are written 
to ensure there is no confusion on how to user the app itself. The country dropdown menu already has some pre-populate countries and also a 'All' option incase the country they wish to view is not listed.
The input for the city destination uses Google Maps autocomplete function speeding up the process and also providing better useability on tounch screens as it can save further typing. The four POI buttons
once tappedor click set the application off bringing back the results. The results for smaller screens are just displayed on the map with markers. Details of the POI can be display by tapping or clicking
on the marker itself which presents a neat info window. I kept to just the map on smaller screens as displaying the results in another context on the same page would clutter the page. Medium and larger screens
have results also displayed as cards vertically along side the map. When the user clicks on the card the info window is dispalyed above the marker on the map so they can see POI location on the map. 

The [booking](https://anthonynicklin.github.io/ms2-idest/index.html#book) section provide a easy to use contact form that send the users infomation via email in order for someone to contact them back 
to discuss future trip. An image was use behind the contact form in order make the form more appealing. Once the form is submitting a modal is displayed thanking them.

During the process of designing this SPA, finding images and icons that visualy went together was difficult and time consuming. 

## Features ##

Features on this website are:

* The links in the navigation when hovered over turn black to indicate which link the users cursor is over.
* When hovering over any links the cursor changes from a pointer to a hand.
* The carousel in the [about](https://anthonynicklin.github.io/ms2-idest/index.html#about) section has interactive buttons at the
    to select the images.
* The country input field has a autocomplete function to aide the user in selecting/finding the city they which to visit.
* Markers on the map when clicked or tapped bring up an info window with details information about that POI.
* The results cards are like to the map and when clicke or tapped will bring up its respected info window for additional information
* The booking form uses Bootstrap4 input validation to check values before they are submitted.
* The booking form sends the information to an email using emailJS in order for the user to be contacted back.
* A successful form submittion will dispaly a modal with a thank you message.
* The modal can be close using  the close cross, close button, or by clicking anywhere outside the modal.

Future features
* Travel blog describing experiences in different cities around the world.
* Price checker for flights and hotels.
* User accounts so searchs can be saved.

## Technologies Used ##

Below are a list of the programming languages, technologies and frameworks used for this website.

* HTML5
* CSS3
* SASS
* JavaScritpt
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
* [GitHub](https://github.com)
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
    * Google Ghrome
    * Firefox
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
    * All selected as the country and checked autocomplete shows cities from different countries.
    * Select each country and check autocomplete shows cities from the respected country.
    * When the country and city have been selected the map centers and zooms in on that city.
2. POIs
    * Click on 'Find' in navbar.
    * When clicked each POI button dispalys the correct POIs repectivly. 
    * Results from the last search are cleared before the next search results are dispalyed.
3. Web application works across different device types
    * Load website on different device types and perform all testing that has been stated above.
4. Booking form
    * Use navigation link to "Book" section.
    * Try to submit the empty form and verify that an error message about the required fields appears.
    * Try to submit the form with an invalid email address and verify that a relevant error message appears.
    * Try to submit the form with an invalid telephone number and verify that a relevant error message appears.
    * Try to submit the form with all inputs valid. Modal should be displayed with thank you message.
5. Map
    * Contorls are shown on the map.
    * Drag the map around in all directions.
    * Zoom in and out of the map.
    * Switch between Map and Satellite views.
    * Click on a marker to display more information.
    * Click on a results card and display more information above the marker on the map.


## Deployment ##

The website was created using Cloud9 IDE using Ubuntu with BASH. Git was used for version control and pushed to a repository hosted on 
[GitHub](https://github.com).

The website is deployed using GitHub pages [iDest](https://anthonynicklin.github.io/ms2-idest)


## Credits ##

### Code ###

* [Scroll to top button](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
    Used to create the to top button.
* [Goolge Map Hotel Search](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)
    Code was used and customised in order to achieve user story objectives.
* [Modal](https://www.w3schools.com/howto/howto_css_modals.asp)
    Modal for successful booking form submition.

### Images ###

Logo
Stamp picture was taken from [Pixaby](https://pixabay.com/vectors/stamp-postage-post-vintage-postal-303749/) under free commercial license.
The writing of 'iDest' was screenshooted from Free Google fonts [font](https://fonts.google.com/specimen/Special+Elite), Special Elite and 
then overlayed using Abode Xd to create the final image.

Markers
Flags[Icons](https://icons8.com/icon/set/flag/color)

Landing image of New York skyline [Pixaby]()
Hotel in carousel [Pixaby]()
Paris in carousel [Pixaby]()
Restaurant in carousel [Pixaby]()
Bar in carousel [Pixaby]()

Hotel icon [Icons](https://icons8.com/icon/set/hotel/color)
Bar icon [Icons](https://icons8.com/icon/set/bar/color)
Restaurant icon [Icons](https://icons8.com/icon/set/restaurant/color)
Attractions icon [Icons](https://icons8.com/icon/set/fun-fair/color)


