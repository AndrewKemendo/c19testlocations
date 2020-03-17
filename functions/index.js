const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// https://us-central1-c19testlocations.cloudfunctions.net/helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
 
	response.send("Hello from Firebase!");
});


// https://us-central1-c19testlocations.cloudfunctions.net/getCovidLocations
exports.getCovidLocations = functions.https.onRequest((request, response) => {
 
 	// Add code here to retrieve Covid test locations from a database instead of this hard-coded array
	var testCovidLocations = [{
	  locationName: "Test Location 1",
	  streetAddress: "111 Everett Ave #2c, Chelsea, MA 02150",
	  gpsLatLng: {lat: 42.394552, lng: -71.039241},
	  websiteUrl: "https://google.com",
	  notes: "",
	  hasTestsAvailable: true,
	  lastUpdated: new Date()
	}, {
	  locationName: "Test Location 2",
	  streetAddress: "332 Hanover St, Boston, MA 02113",
	  gpsLatLng: {lat: 42.3646633, lng: -71.0537095},
	  websiteUrl: "https://google.com",
	  notes: "",
	  hasTestsAvailable: false,
	  lastUpdated: new Date()
	}, {
	  locationName: "Test Location 3",
	  streetAddress: "70 Inner Belt Rd, Somerville, MA 02143",
	  gpsLatLng: {lat: 42.3767454, lng: -71.0802636},
	  websiteUrl: "https://google.com",
	  notes: "",
	  hasTestsAvailable: true,
	  lastUpdated: new Date()
	}];

	response.set({ 'Access-Control-Allow-Origin': '*' });
	response.send(testCovidLocations);
});
