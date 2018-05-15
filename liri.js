// require("dotenv").config();

// var fs = require("./keys.js");
var request = require("request");

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// Takes in all of the command line arguments
var inputString = process.argv;

var userInput = inputString[2];

// if (userInput === "hey") {
//     console.log("pendejo");
// }

if (userInput === "my-tweets") {
    // console.log("this");
    
}
if (userInput === "spotify-this-song") {
    console.log("is how");
}
if (userInput === "movie-this") {
    // console.log("you");
    // Grab the movieName which will always be the third node argument.
var movieName = process.argv[3];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title of the movie: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Rated: " + JSON.parse(body).Rated);
    console.log("IMDB rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[2].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
  }
});

}
if (userInput === "do-what-it-says") {
    // console.log("do it!!");
    // fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);
//   comment we want to run
  userInput = dataArr[0]
// media title
  mediaName = dataArr[1]
});
}