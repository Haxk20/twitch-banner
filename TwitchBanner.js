//Before running this script you need to install twitch-js from npm
//This script was tested only a linux system thus i do not provide instructions for Windows. Sorry :(
//But installing node.js and installing twitch-js from npm on windows doesnt look too hard.


const TwitchJs = require('twitch-js');

// Provide your token, username and channel. You can generate a token here:
// https://twitchapps.com/tmi/
const token = 'oauthtoken'; //Create an oauth token and paste it there. (DO NOT SHARE THAT KEY WITH ANYONE. If it leaks the only way to stop it being used is to delete your account from twitch.)
const username = 'YourAccountName'; //Your username

const channel = 'ChannelName'; //You channel name

// Instantiate clients.
const {
    api,
    chat
} = new TwitchJs.default({
    token,
    username
});

var jsonObj = require("./TwitchBotsToBan.json");

// Connect ...
chat.connect().then(() => {
    // ... and then join the channel.
    chat.join(channel);
	jsonObj.people.forEach(ban);

});

function ban(item, index, arr) {
	setTimeout(() => {
		chat.say(channel, "/ban " + arr[index].name);
	}, index * 320);
}
