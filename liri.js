
require('dotenv').config()

const spotify = require("node-spotify-api");
const bandsInTown = require("bandsintown")('9faf2bd4a625291d96f4ff683873d5e3');
const omdb = require("omdb");
const moment = require("moment");
const axios = require("axios");
const os = require('os');
const fs = require('fs');
const keys = require('./keys.js')

//LINK SPOTIFY, BANDS IN TOWN, AND OMDB AND TEST TO MAKE SURE THEY WORK

// var newSpotifyKey = new Spotify(keys.spotify);


let omdbKey = process.env.OMDB_KEY;
let spotifyKey = process.env.SPOTIFY_ID;
let bandsKey = process.env.BANDS_IN_TOWN_KEY;
//omdb

var Spotify = new spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
})






let command1 = process.argv[2];
let command2 = process.argv[3];
let command3 = process.argv[4];
let command4 = process.argv[5];
let command5 = process.argv[6];



// let spotifykey = new Spotify(keys.spotify);

// console.log(spotifykey)

switch (command1) {
    case "concert-this":
        concertThis(command2)
        break;
    case "spotify-this-song":
        spotifyThisSong(command2)
        break;
    case "movie-this":
        movieThis(command2)
        break;
    case "do-what-it-says":
        doWhatItSays(command2)
        break;
}


//AREA FOR MY FUNCTIONS


function concertThis(artist) {
    console.log("the function: concertThis worked!")

    if (!artist) {
        artist = 'skrillex'
    }

    let axiosRequest = `https://rest.bandsintown.com/artists/${artist}/events?app_id=%279faf2bd4a625291d96f4ff683873d5e3%27`
    axios.get(axiosRequest).then(
        function (response) {
            for (i = 0; i < 5; i++) {

                console.log(" ")
                console.log("∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆")
                console.log(" ")
                console.log(`=-=-=-=-=-=-=-=-=-=-=-=-Concert ${i + 1}=-=-=-=-=-=-=-=-=-=-`)
                console.log(" ")
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-Venue=-=-=-=-=-=-=-=-=-=-=-=-")

                console.log(response.data[i].venue.name)
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-City=-=-=-=-=-=-=-=-=-=-=-=-=")

                console.log(response.data[i].venue.city)
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-Region=-=-=-=-=-=-=-=-=-=-=-=")

                console.log(response.data[i].venue.region)
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-Country=-=-=-=-=-=-=-=-=-=-=-")

                console.log(response.data[i].venue.country)
                    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
                console.log("=-=-=-=-=-=-=-=-=-=-=-=-Time and Date=-=-=-=-=-=-=-=-")

                console.log(response.data[i].datetime)
                console.log(" ")
                console.log("∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆")
                console.log(" ")
            }
        })
};

function spotifyThisSong(song) {
    if (!song) {
        song = "Jingle Bells";
    }
    console.log(song)

    Spotify.search({ type: 'track', query: song }, function (error, data) {
        if (!error) {
            let trackData = data.tracks.items[0];
            console.log(" ")
            console.log("Here is your song information:")
            console.log(" ")
            console.log("∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆")
            console.log(" ")

            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Artist=-=-=-=-=-=-=-=-=-=-=-")
            console.log(trackData.artists[0].name);
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Song=-=-=-=-=-=-=-=-=-=-=-=-")
            console.log(trackData.name);
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Album=-=-=-=-=-=-=-=-=-=-=-=")
            console.log(trackData.album.name);
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Preview=-=-=-=-=-=-=-=-=-=-=")
            console.log(trackData.preview_url);
            console.log(" ")
            console.log("∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆")
            console.log(" ")

        } else {
            console.log('Error occurred.');
        }
    });

};

function movieThis(movie) {
    if (!movie) {
        movie = "Mr. Nobody"
    }
    let testMovie = "remember+the+titans"
    let axiosRequest = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=${omdbKey}`
    axios.get(axiosRequest).then(
        function (response) {
            console.log(" ")
            console.log("Here is your movie information:")
            console.log(" ")
            console.log("∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆")
            console.log(" ")
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Title=-=-=-=-=-=-=-=-=-=-=-=-")
            console.log(response.data.Title)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Year=-=-=-=-=-=-=-=-=-=-=-=-=")
            console.log(response.data.Year)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-imdbRating=-=-=-=-=-=-=-=-=-=")
            console.log(response.data.imdbRating)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Rotten Tomatoes Rating=-=-=-=")
            //  console.log(response.data.Ratings[1].Value)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Country=-=-=-=-=-=-=-=-=-=-=-")
            console.log(response.data.Country)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Language=-=-=-=-=-=-=-=-=-=-=")
            console.log(response.data.Language)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Plot=-=-=-=-=-=-=-=-=-=-=-=-=")
            console.log(response.data.Plot)
            console.log("=-=-=-=-=-=-=-=-=-=-=-=-Actors=-=-=-=-=-=-=-=-=-=-=-=")
            console.log(response.data.Actors)
            console.log(" ")
            console.log("∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆˚∆")
            console.log(" ")
            //  console.log(response)
        }
    );

};

function doWhatItSays() {
    console.log("the function: doWhatItSays worked!")
    //FROM HOMEWORK INSTRUCTIONS: 
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
        if (dataArr[0] === 'spotify-this-song') {
            console.log('spotify')
            spotifyThisSong(dataArr[1])
        }else if (dataArr[0] === 'concert-this')
        {
            console.log("concert")
            concertThis(dataArr[1])

        } else if (dataArr[0] === 'movie-this') {
            console.log("movie")
            movieThis(dataArr[1])
        } else {
            console.log("I'm afraid I can't do that")
        }
      
      });

    // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

    // * Edit the text in random.txt to test out the feature for movie-this and concert-this.

    // ### BONUS

    // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

    // * Make sure you append each command you run to the `log.txt` file. 

    // * Do not overwrite your file each time you run a command.


};


