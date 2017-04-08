console.log("linked");

var key = "AIzaSyC6BkKzkgAhJoLwYgb2JgtY6UhCEqdN0ng";
var queryURL = "https://www.googleapis.com/youtube/v3";

<script src="https://apis.google.com/js/api.js"> 
<script>
function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'YOUR_API_KEY',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
      }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.people.people.get({
      resourceName: 'people/me'
    });
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);
</script>





$.ajax({
	url: queryURL,
	method:"GET"

}).done(function(response) {
	console.log(response);
});















