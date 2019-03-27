require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var nodeArgs = process.argv;
var command = process.argv[2];
var selection = "";
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    selection = selection + "+" + nodeArgs[i];
  } else {
    selection += nodeArgs[i];
  }
}
console.log(selection);
console.log(command);

if (command == "movie-this") {
  movie();
} else if (command == "spotify-this-song") {
  song();
}
//movie-this
function movie() {
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl =
    "http://www.omdbapi.com/?t=" + selection + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  axios.get(queryUrl).then(function(response) {
    // console.log(response);
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Plot: " + response.data.Plot);
    console.log("Genre: " + response.data.Genre);
    console.log("Language: " + response.data.Language);
    console.log("Country: " + response.data.Country);
    console.log("Actors: " + response.data.Actors);
    console.log("IMDB ratings: " + response.data.imdbRating);
    console.log("Rotten Tomatoes:" + response.data.Ratings[1].Value);
  });
}
//concert-this

//spotify-this-song

//do-what-it-says
