
require('dotenv').config()

const spotify = require("node-spotify-api");
const bandsInTown = require("bandsintown");
const omdb = require("omdb");
const moment = require("moment");
const axios = require("axios");
const os = require('os');
const fs = require('fs');
const keys = require('./keys.js')

//LINK SPOTIFY, BANDS IN TOWN, AND OMDB AND TEST TO MAKE SURE THEY WORK

let omdbKey = process.env.OMDB_KEY;
let spotifyKey = process.env.SPOTIFY_ID;
let bandsKey = process.env.BANDS_IN_TOWN_KEY;
//omdb








let command1 = process.argv[2];
let command2 = process.argv[3];
let command3 = process.argv[4];
let command4 = process.argv[5];
let command5 = process.argv[6];



// let spotifykey = new Spotify(keys.spotify);

// console.log(spotifykey)

switch (command1) {
    case "concert-this":
        concertThis()
        break;
    case "spotify-this-song":
        spotifyThisSong()
        break;
    case "movie-this":
    movieThis(command2)


        break;
    case "do-what-it-says":
        doWhatItSays()
        break;
}


//AREA FOR MY FUNCTIONS


function concertThis() {
    console.log("the function: concertThis worked!")

    //FROM HOMEWORK INSTRUCTIONS: 

    // * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    // * Name of the venue

    // * Venue location

    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
};

function spotifyThisSong() {
    console.log("the function: spotifyThisSong worked!")
    //FROM HOMEWORK INSTRUCTIONS: 

    // * This will show the following information about the song in your terminal/bash window

    // * Artist(s)

    // * The song's name

    // * A preview link of the song from Spotify

    // * The album that the song is from

    // * If no song is provided then your program will default to "The Sign" by Ace of Base.

    // * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.

    // * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

    // * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

    // * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

    // * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

    // * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).


};

function movieThis(movie) {
    console.log("the function: movieThis worked!")
    //FROM HOMEWORK INSTRUCTIONS: 
    //weird situation update: so I can take an argument from the command line, but it still only works with "remember the titans" it's the weirdest thing.
let testMovie = "remember+the+titans"
    // let axiosRequest = `http://www.omdbapi.com/?t=shrek&y=&plot=short&apikey=${omdbKey}`
    axios.get(
        "http://www.omdbapi.com/?t=" + 
        // testMovie 
        movie
        + "&y=&plot=short&apikey=" + omdbKey
        // axiosRequest
        ).then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
    // console.log(response)
  }
);




    // * This will output the following information to your terminal/bash window:

    // ```
    //   * Title of the movie.
    //   * Year the movie came out.
    //   * IMDB Rating of the movie.
    //   * Rotten Tomatoes Rating of the movie.
    //   * Country where the movie was produced.
    //   * Language of the movie.
    //   * Plot of the movie.
    //   * Actors in the movie.
    // ```

    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    // * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

    // * It's on Netflix!

    // * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

};

function doWhatItSays() {
    console.log("the function: doWhatItSays worked!")
    //FROM HOMEWORK INSTRUCTIONS: 


    // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    // * Edit the text in random.txt to test out the feature for movie-this and concert-this.

    // ### BONUS

    // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

    // * Make sure you append each command you run to the `log.txt` file. 

    // * Do not overwrite your file each time you run a command.


};





























































