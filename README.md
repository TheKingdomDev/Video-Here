# Video Here

# Description

A web-based application that generates a YouTube player with pre-selected search options as well as GPS coordinates, Google Map, and pindrop of current location. Site also includes a form that enables the user to add an additional location and interests.

# Project URL
- https://thekingdomdev.github.io/Video-Here/

# Github Link
- https://github.com/TheKingdomDev/Video-Here

# Trello Board
- https://trello.com/b/2KfTSAjb

## Demo

## Technologies used

	* Technical Stuff * 

- HTML
- CSS
- Bootstrap
- Bootstrap Theme: Material Design Bootstrap
- JavaScript
- jQuery
- jQuery Validator
- AJAX
- JSON
- APIs
- Command Line 
- GitHub

	* Team Communication & Workflow * 

- Slack
- Trello
- Google Drive, Docs, etc
- Google Hangouts

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

	1) Go https://github.com/TheKingdomDev/Video-Here.git
	2) Clone or download
	3) Open

### Prerequisities

 - Nothing outside of a modern web browser.

## Built With

* Sublime Text 3

## Original Idea & Application Concept

- To utilize the google maps api and the spotify api to play a album or playlist based on a specific location. No search, just input keywords or playlist names based on the location.I.e - Gym, hardcore metal. Pings the current location and plays the metal songs in that 
location.

## Front-End & Design

- Originally we used W3C CSS schools for the front end. It was good to add the logic and test functionality. After that we had a functional bootstrap template theme. Finally we simply rebuilt the front end and cleaned up the code. The final product featured is a bootstrap build using the material design bootstrap theme.

## Logic & Such

- API’s - The two API’s we ended using were the YouTube API and the Google Maps API.

- Youtube - We used this in place of spotify due to the crazy Authentication required to access user information on Spotify. It just was to complicated for what we were hoping to do at first and we decided to do the same thing with Youtube. Functionally we used an Ajax call to bring back a keyword search onclick, also saving buttons to the screen to view multiple video types.

- Google API - Originally we wanted to simply use the API to check the location. Eventually we decided to show the map and add a marker for the location of the current device. At first we thought about allowing the user to input an address or GPS Coords (why we do that?). To then place a pin and save a location for a card. Ultimately we realized that we could simply ping location with a plugin and do a check based on lat and long of current location and device location.

## New Technologies Used

- HTML5 Geolocation
- Bootstrap Theme

## What We Would Do With More Time 

 - We would have liked to utilize storage and authentication to allow the user to sign in and remember the searches and additional cards implemented. Making the app more dynamic and functional.

## Problems/Issues 

 - GitHub - Like most of everyone else we had issues with creating separate branches staying current and pushing to master. Made us all appreciate planning workflow and working on the same application.

 - API documentation, understanding how to implement what we wanted to execute. It was just BOOOOOO. BOOO. BOOOOOO. IE - Google based API’s having a large amount of documentation to go through and understand.

## Authors & Contributions

* **Eric King**
	-YouTube API, Logic
* **Ed Nixon**
	-Google Maps API, Logic
* **Gary Newton**
	-Front-End, Logic

## Acknowledgments

* Thanks to our instructor and TA's
* Thanks to Timothy R. Anderson (working with the .clone() was fun)

## Resources

	Google Maps API
		https://developers.google.com/maps/
	YouTube API
		https://developers.google.com/youtube/
	Spotify API
		https://developer.spotify.com/web-api/
	Google Materialize
		http://materializecss.com/
	Bootstrap Theme: Material Design Bootstrap
		https://mdbootstrap.com/
