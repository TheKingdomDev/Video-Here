console.log("linked");

var youtubeKey = "AIzaSyC6BkKzkgAhJoLwYgb2JgtY6UhCEqdN0ng";
var queryURL = "https://www.googleapis.com/youtube/v3/search";
var searchVideos = ["cats", "food"];

$(document).ready(function() {
  
renderButtons();

  $("#search-button").on("click", function() {
    console.log("clicked");

    youtubeApiCall();

    

  });

});


function youtubeApiCall() {
   var searchText = $("#search-yt").val().trim();

    

    $.ajax({
      cache: false,
      data: $.extend({
        key: youtubeKey,
        part:"snippet",
        q: searchText
      }, {maxResults: 2}),
      dataType: "json",
    	url: queryURL,
      timeout: 5000,
    	type:"GET"

    }).done(function(response) {
      console.log(response);
        for (var i = 0; i < response.items.length; i++) {
          var title = response.items[i].snippet.thumbnails.title;
          var videoId = response.items[i].id.videoId;

          $("#player").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '"' + 'frameborder="0" allowfullscreen></iframe>');
        }
    });

}

function renderButtons() {
  $("#button-location").empty();

  // Looping through the array of search items
        for (var i = 0; i < searchVideos.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("search-button");
          a.addClass("btn btn-primary");
          // Adding a data-attribute
          a.attr("data-name", searchVideos[i]);
          // Providing the initial button text
          a.text(searchVideos[i]);
          // Adding the button to the buttons-view div
          $("#button-location").append(a);
        }
}

// function googleMapsApiCall() {
//   $("#map").googleMap({
//       zoom: 10, // Initial zoom level (optional)
//       coords: [48.895651, 2.290569], // Map center (optional)
//       type: "ROADMAP" // Map type (optional)
//     });
//   $("#map").addMarker({
//     coords: [48.895651, 2.290569], // GPS coords
//       url: 'http://www.tiloweb.com', // Link to redirect onclick (optional)
//       id: 'marker1' // Unique ID for your marker
//     });   
// }

// googleMapsApiCall();







