var map;
var youtubeKey = "AIzaSyC6BkKzkgAhJoLwYgb2JgtY6UhCEqdN0ng";
var queryURL = "https://www.googleapis.com/youtube/v3/search";

var searchVideos = ["cats", "food", "dogs"];
var searchVideosSchool = ["HTML", "CSS", "JavaScript"];
var searchVideosCaribou = ["Surfing", "Bahamas", "Moose"];


var homeLatitude = 35.145922;
var homeLatitudeLow = (homeLatitude - 0.00144927536231884);
var homeLatitudeHigh = (homeLatitude + 0.00144927536231884);
var homeLongitude = -80.820793;
var homeLongitudeLow = (homeLongitude - 0.001785714285714285714285714285714);
var homeLongitudeHigh = (homeLongitude + 0.001785714285714285714285714285714);

var schoolLatitude = 35.2282027;
var schoolLatitudeLow = (schoolLatitude - 0.00144927536231884);
var schoolLatitudeHigh = (schoolLatitude + 0.00144927536231884);
var schoolLongitude = -80.8351357;
var schoolLongitudeLow = (schoolLongitude - 0.001785714285714285714285714285714);
var schoolLongitudeHigh = (schoolLongitude + 0.001785714285714285714285714285714);

var caribouCoffeeLatitude = 35.1469818;
var caribouCoffeeLatitudeLow = (caribouCoffeeLatitude - 0.00144927536231884);
var caribouCoffeeLatitudeHigh = (caribouCoffeeLatitude + 0.00144927536231884);
var caribouCoffeeLongitude = -80.8088891;
var caribouCoffeeLongitudeLow = (caribouCoffeeLongitude - 0.001785714285714285714285714285714);
var caribouCoffeeLongitudeHigh = (caribouCoffeeLongitude + 0.001785714285714285714285714285714);

var cloneCounter = 1;

var latBuffer = 0.00144927536231884;
var longBuffer = 0.001785714285714285714285714285714;

// ---------------------------------------------------FUNCTIONS

$(document).ready(function() {
    var cardPrototype = $(".playerlocation");

    var newCard = function() {
        var carteNouveau = cardPrototype.clone();
        $(".master-container")
        .append($("<div>")
            .addClass(("clone" + cloneCounter))
            .append(carteNouveau));
        carteNouveau.find("#new-card-btn").click(newCard);
        cloneCounter++;
    }
    $("#new-card-btn").on("click", function() {
        newCard();
    });

    getMyLocation();

    // RENDER YOUTUBE SEARCH QUIERIES 

    renderButtons(searchVideos);

    $("#search-button").on("click", function() {
        console.log("clicked");

        event.preventDefault();

        // validate();

        youtubeApiCall();

        var video = $("#search-yt").val().trim();

        searchVideos.push(video);

        renderButtons(searchVideos);

    });

    $(".new-search").on("click", function() {
        var buttonText = $(this).text();
        $.ajax({
            cache: false,
            data: $.extend({
                key: youtubeKey,
                part: "snippet",
                q: buttonText
            }, { maxResults: 1 }),
            dataType: "json",
            url: queryURL,
            timeout: 5000,
            type: "GET"

        }).done(function(response) {
            console.log(response);
            for (var i = 0; i < response.items.length; i++) {
                var title = response.items[i].snippet.thumbnails.title;
                var videoId = response.items[i].id.videoId;

                $("#player").append('<iframe width="555" height="370" src="https://www.youtube.com/embed/' + videoId + '"' + 'frameborder="0" allowfullscreen></iframe>');
            }
        });

    });

    $("#address-submit").on("click", function() {

        event.preventDefault();
        validate();

        var currentAddress = $("#current-address").val().trim();
        var cardAddress = $("#card-address").val().trim();

        if (currentAddress !== cardAddress) {
            console.log("wrong!");
            $("#address-fail").append('<img src="http://download.gamezone.com/uploads/image/data/1204957/star-wars-darth-vader-sixth-scale-feature-1000763.jpg">');
        } else {
            $("#address-success").append('<img src="http://vignette2.wikia.nocookie.net/sonic/images/9/9c/Mario_-_Mario_Party_10.png/revision/latest?cb=20150609205200">');
            console.log("score");
        }
    });
});

// ---------------------------------------------------YOUTUBE API

function youtubeApiCall() {
    var searchText = $("#search-yt").val().trim();

    $.ajax({
        cache: false,
        data: $.extend({
            key: youtubeKey,
            part: "snippet",
            q: searchText
        }, { maxResults: 1 }),
        dataType: "json",
        url: queryURL,
        timeout: 5000,
        type: "GET"

    }).done(function(response) {
        console.log(response);
        for (var i = 0; i < response.items.length; i++) {
            var title = response.items[i].snippet.thumbnails.title;
            var videoId = response.items[i].id.videoId;

            $("#player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '"' + 'frameborder="0" allowfullscreen></iframe>');
        }
    });

}

function renderButtons(e) {
    $("#button-location").empty();

    // Looping through the array of search items
    for (var i = 0; i < e.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("new-search");
        a.addClass("btn btn-primary");
        // Adding a data-attribute
        a.attr("data-name", e[i]);
        // Providing the initial button text
        a.text(e[i]);
        // Adding the button to the buttons-view div
        $("#button-location").append(a);
    }
}

// ---------------------------------------------------LOCATION FUNCTIONS

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("Location Unavailable At This Time");
    }
}

function displayLocation(position) {
    // Function Varibles
    var latitude = position.coords.latitude;
    // console.log(latitude)
    var longitude = position.coords.longitude;
    var latLng = new google.maps.LatLng(latitude, longitude);
    // Internal Functions
    showMap(latLng);
    createMarker(latLng);

    var div = document.getElementById("location");
    div.innerHTML = ("You are at Latitude: " + latitude + ", Longitude: " + longitude);

    if (latitude >= homeLatitudeLow && latitude <= homeLatitudeHigh && longitude >= homeLongitudeLow && longitude <= homeLongitudeHigh) {
        home();
        console.log("You are at home");
    } else if (latitude >= caribouCoffeeLatitudeLow && latitude <= caribouCoffeeLatitudeHigh && longitude >= caribouCoffeeLongitudeLow && longitude <= caribouCoffeeLongitudeHigh) {
        console.log("You are at caribou");
        caribou();
    } else if (latitude >= schoolLatitudeLow && latitude <= schoolLatitudeHigh && longitude >= schoolLongitudeLow && longitude <= schoolLongitudeHigh) {
        school();
        console.log("You are at school");
    } else {
        console.log(latitude)
        console.log(longitude)
        console.log("Not Available")
    };
}

function showMap(latLng) {
    console.log("in showMap function");
    var mapOptions = {
        center: latLng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

function createMarker(latLng) {
    console.log("in createMarker function");
    var markerOptions = {
        position: latLng,
        map: map,
        animation: google.maps.Animation.DROP,
        clickable: true
    }

    var marker = new google.maps.Marker(markerOptions);

    var content = "You Are Here" + latLng.lat() + ", " + latLng.lng();
    addInfoWindow(marker, latLng, content);
}

function addInfoWindow(marker, latLng, content) {
    var infoWindowOptions = {
        content: content,
        position: latLng
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
}

function school() {
    $("#place").html('<h1>School</h1>');
    renderButtons(searchVideosSchool);
}

function caribou() {
    $("#place").text("Location: Caribou");
    renderButtons(searchVideosCaribou);
}

function validate() {
    var x = $("#search-yt").val();
    if (x == "") {
        $("#validate").html('<h3>Please provide an input search!</h3>');
        $("#search-yt").focus();
        return false;
    }
}

$("#formReveal").on("click", function() {
    $("#formDiv").removeClass("hidden");
});

$("#newLocationSubmit").on("click", function() {
    $("#formDiv").addClass("hidden");
});

