console.log("linked");

// // 2. This code loads the IFrame Player API code asynchronously.
//       var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//       var player;
//       function onYouTubeIframeAPIReady() {
//         player = new YT.Player('player', {
//           height: '390',
//           width: '640',
//           videoId: 'tFC6nU6C5aE',
//           events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//           }
//         });
//       }

//       // 4. The API will call this function when the video player is ready.
//       function onPlayerReady(event) {
//         event.target.playVideo();
//       }

//       // 5. The API calls this function when the player's state changes.
//       //    The function indicates that when playing a video (state=1),
//       //    the player should play for six seconds and then stop.
//       var done = false;
//       function onPlayerStateChange(event) {
//         if (event.data == YT.PlayerState.PLAYING && !done) {
//           setTimeout(stopVideo, 6000);
//           done = true;
//         }
//       }
//       function stopVideo() {
//         player.stopVideo();
//       }
var key = "AIzaSyC6BkKzkgAhJoLwYgb2JgtY6UhCEqdN0ng";
var queryURL = "https://www.googleapis.com/youtube/v3";

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': key,
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest']
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=' + key +
     '&part=snippet,contentDetails,'
    });
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);



// function searchListByKeyword(part, maxResults, q, type) {
//   var request = gapi.client.youtube.search.list(
//       {maxResults: maxResults,
//        part: part,
//        q: q,
//        type: type});
//   executeRequest(request);
// }





$.ajax({
	url: queryURL,
	method:"GET"

}).done(function(response) {
	console.log(response);
});















