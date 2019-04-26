var map, places, infoWindow;
var markers = [];
var results = {};
var autocomplete;
var countryRestrict = {'country': 'uk'};
var MARKER_PATH = '../assests/images/markers/red_marker';
var hostnameRegexp = new RegExp('^https?://.+?/');

var countries = {
    'au': {
        center: {lat: -25.3, lng: 133.8},
        zoom: 4
    },
    'br': {
        center: {lat: -14.2, lng: -51.9},
        zoom: 3
    },
    'ca': {
        center: {lat: 62, lng: -110.0},
        zoom: 3
    },
    'fr': {
        center: {lat: 46.2, lng: 2.2},
        zoom: 5
    },
    'de': {
        center: {lat: 51.2, lng: 10.4},
        zoom: 5
    },
    'mx': {
        center: {lat: 23.6, lng: -102.5},
        zoom: 4
    },
    'ng': {
        center: {lat: 9.1, lng: 8.7},
        zoom: 5
    },
    'nz': {
        center: {lat: -40.9, lng: 174.9},
        zoom: 5
    },
    'ir': {
        center: {lat: 53.3, lng: -6.2},
        zoom: 5
    },
    'it': {
        center: {lat: 41.9, lng: 12.6},
        zoom: 5
    },
    'za': {
        center: {lat: -30.6, lng: 22.9},
        zoom: 5
    },
    'es': {
        center: {lat: 40.5, lng: -3.7},
        zoom: 5
    },
    'pt': {
        center: {lat: 39.4, lng: -8.2},
        zoom: 6
    },
    'us': {
        center: {lat: 37.1, lng: -95.7},
        zoom: 3
    },
    'uk': {
        center: {lat: 54.8, lng: -4.6},
        zoom: 5
    }
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: countries['uk'].zoom,
        center: countries['uk'].center,
        streetViewControl: false
    });

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('info-content')
        });

    // Create the autocomplete object and associate it with the UI input control.
    // Restrict the search to the default country, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */ (
            document.getElementById('autocomplete')), {
            types: ['(cities)'],
            componentRestrictions: countryRestrict
        });
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);

        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('country').addEventListener(
            'change', setAutocompleteCountry);
}

// Set the country restriction based on user input.
// Also center and zoom the map on the given country.
function setAutocompleteCountry() {
    var country = document.getElementById('country').value;
        if (country == 'all') {
          autocomplete.setComponentRestrictions({'country': []});
          map.setCenter({lat: 15, lng: 0});
          map.setZoom(2);
        } else {
          autocomplete.setComponentRestrictions({'country': country});
          map.setCenter(countries[country].center);
          map.setZoom(countries[country].zoom);
        }
        clearResults();
        clearMarkers();
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
        map.panTo(place.geometry.location);
        map.setZoom(15);
    } else {
        document.getElementById('autocomplete').placeholder = 'Enter a city';
    }
}

// Listener for hotel submit button
var hotel = document.getElementById('hotel-button').addEventListener('click', checkHotels);
var bar = document.getElementById('bar-button').addEventListener('click', checkBars);
var restaurant = document.getElementById('restaurant-button').addEventListener('click', checkRestaurants);
var attraction = document.getElementById('attraction-button').addEventListener('click', checkAttractions );

var search = {
        types:[]
    };
    
function checkHotels() {
//Adds the correct value into the 'types' arrary and gets the city location and passes it to the map object.
    hideLogo();
    search.types = [];
    search.bounds = map.getBounds();
    search.types.push('lodging');
    searchPoi();
}

function checkBars() {
//Adds the correct value into the 'types' arrary and gets the city location and passes it to the map object.
    hideLogo()
    search.types = [];
    search.bounds = map.getBounds();
    search.types.push('bar');
    searchPoi();
}

function checkRestaurants() {
//Adds the correct value into the 'types' arrary and gets the city location and passes it to the map object.
    hideLogo()
    search.types = [];
    search.bounds = map.getBounds();
    search.types.push('restaurant');
    searchPoi();
}

function checkAttractions() {
//Adds the correct value into the 'types' arrary and gets the city location and passes it to the map object.
    hideLogo()
    search.types = [];
    search.bounds = map.getBounds();
    search.types.push('point_of_interest');
    searchPoi();
}

//Preforms the search adding the correct value to the types array first.
function searchPoi() {
    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each hotel found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
                var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
                var markerIcon = MARKER_PATH + markerLetter + '.png';
                // Use marker animation to drop the icons incrementally on the map.
                markers[i] = new google.maps.Marker({
                    position: results[i].geometry.location,
                    animation: google.maps.Animation.DROP,
                    icon: markerIcon
                });
                // If the user clicks a hotel marker, show the details of that hotel
                // in an info window.
                markers[i].placeResult = results[i];
                google.maps.event.addListener(markers[i], 'click', showInfoWindow);
                setTimeout(dropMarker(i), i * 100);
                addResult(results[i], i);
            }
        }
    });
}

function dropMarker(i) {
    return function() {
        markers[i].setMap(map);
    };
}

function addResult(result, i) {
    var results = document.getElementById('results');
    var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
    var markerIcon = MARKER_PATH + markerLetter + '.png';;
    
    //Creating the card div
    var card = document.createElement('div');
    card.className = 'card';
    card.onclick = function() {
        google.maps.event.trigger(markers[i], 'click');
    };
    
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    
    //Creating marker to go into a card.
    var iconFlag = document.createElement('div');
    iconFlag.setAttribute("class","col-2 d-flex");
    var icon = document.createElement('img');
    icon.src = markerIcon;
    icon.setAttribute('class', 'placeIcon');
    
    //Creating div for the name and address of the venue .
    var listingDiv = document.createElement('div');
    listingDiv.setAttribute('class','listing col-8');
    var nameDiv = document.createElement('h4');
    var addressDiv = document.createElement('p');
    listingDiv.appendChild(nameDiv);
    listingDiv.appendChild(addressDiv);
    
    //Variables for the name and address to be held in.
    var name = document.createTextNode(result.name);
    var address = document.createTextNode(result.vicinity);
    
    //Creating div for ratings. Check is listing has a rating
    //and if no display 'no ratings found' message.
    var ratingDiv = document.createElement('div');
    ratingDiv.setAttribute('class','rating col-2 d-flex');
    var ratingP = document.createElement('p');
    ratingP.setAttribute('class', 'align-self-center');
    var rating;
    if (result.rating) {
        rating = document.createTextNode(result.rating);
        } else {
        rating = document.createTextNode('No ratings found');
        }
    //Add listing variables into there elements.
    iconFlag.appendChild(icon);
    nameDiv.appendChild(name);
    addressDiv.appendChild(address);
    ratingP.appendChild(rating);
    ratingDiv.appendChild(ratingP);
    
    //Append each created element into the card to be displayed.
    row.appendChild(iconFlag);
    row.appendChild(listingDiv);
    row.appendChild(ratingDiv);
    card.appendChild(row);
    
    //Append the card element in to the results container on the page.
    results.appendChild(card);
}

//Have the iDest logo disappear when any of the check functions are called
function hideLogo() {
    document.getElementById("logo-overlay-id").style.display = "none";
}


// Get the place details for a POI. Show the information in an info window,
// anchored on the marker for the POI that the user selected.
function showInfoWindow() {
    var marker = this;
    places.getDetails({placeId: marker.placeResult.place_id},
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
        });
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
    document.getElementById('iw-icon').innerHTML = '<img class="icon" ' +
        'src="' + place.icon + '"/>';
    document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
        '">' + place.name + '</a></b>';
    document.getElementById('iw-address').textContent = place.vicinity;

    if (place.formatted_phone_number) {
        document.getElementById('iw-phone-row').style.display = '';
        document.getElementById('iw-phone').textContent =
            place.formatted_phone_number;
    } else {
        document.getElementById('iw-phone-row').style.display = 'none';
    }

// Assign a five-star rating to the hotel, using a black star ('&#10029;')
// to indicate the rating the hotel has earned, and a white star ('&#10025;')
// for the rating points not achieved.
    if (place.rating) {
        var ratingHtml = '';
        for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

function clearResults() {
    //Clear results
    var removeList = document.getElementById('results');
    while (removeList.firstChild) {
        removeList.removeChild(removeList.firstChild);
    }
    
    results = {};
}

