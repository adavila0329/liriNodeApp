// require("dotenv").config();

var fs = require("./keys.js");
var request = require("request");

// this is how we import the twit package
var Twit = require('twit');
// import spotify package
var Spotify = require('node-spotify-api')
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// Takes in all of the command line arguments
var inputString = process.argv;
var userInput = inputString[2];

// my-tweets logics
if (userInput === "my-tweets") {
  // console.log("this");
  // var myTweets = process.argv[3];

  var T = new Twit 
  //   consumer_key: '...',
  //   consumer_secret: '...',
  //   access_token: '...',
  //   access_token_secret: '...',
  //   // optional HTTP request timeout to apply to all requests.
  //   timeout_ms: 60 * 1000,
 
  // this is the param variable which will have key and value 
  // var client = new Twitter(keys.twitter);
  var params = {
    q: 'akshay',
    count: 20
  };

  // function to search the tweets with 3 paramaters
  T.get('search/tweets', params, searchedData);
  // searchdata function returns the data when we make a search
  function searchedData(err, data, response) {
    console.log(data);
  }
};


// spotify logics
if (userInput === "spotify-this-song") {
  console.log("is how");
  var song = process.argv[3];
  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
}
module.exports = spotify;
// movies logic
if (userInput === "movie-this") {
  // console.log("you");
  // Get movieName from command line [3] 3rd object
  var movieName = process.argv[3];

  // Then run a request to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

      // Parse the body of the site and recover just the imdbRating
      console.log("Title: " + JSON.parse(body).Title);
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
  fs.readFile("random.txt", "utf8", function (error, data) {

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
module.exports = client;