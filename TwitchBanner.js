//Before running this script you need to install twitch-js from npm
//This script was tested only a linux system thus i do not provide instructions for Windows. Sorry :(
//But installing node.js and installing twitch-js from npm on windows doesnt look too hard.


const TwitchJs = require('twitch-js');

// Provide your token, username and channel. You can generate a token here:
// https://twitchapps.com/tmi/
const token = 'YourToken'; //Create an oauth token and paste it there. (DO NOT SHARE THAT KEY WITH ANYONE. If it leaks the only way to stop it being used is to delete your account from twitch.)
const username = 'YourUsername'; //Your username

const channel = 'YourChannel'; //You channel name

// Instantiate clients.
const {
    api,
    chat
} = new TwitchJs.default({
    token,
    username
});

var time = 0;

var numberOfBots = 14628; //Change this number based on the amount of bots. You can change it to 99999 and the bot will crash once it hits last name in the list.

var jsonObj = require("FullPathToTheJsonFile");

// Connect ...
chat.connect().then(() => {
    // ... and then join the channel.
    chat.join(channel);
    setInterval(function() {
	if (time < 14628) {
	chat.say(channel, "/ban " + jsonObj.people[time].name);
	time++;
	}
}, 320); //320ms. DO NOT CHANGE. If you go any faster twitch will kick you for spamming.
    
});
