var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var tmi = require("tmi.js");

app.use(express.static("public"));

server.listen(8080);

var options = {
	identity: {
		username: "USERNAME",
		password: "OUATH KEY"
	},
	channels: ["matthewmob"]
};

var client = new tmi.client(options);
client.connect();

client.on("connected", function() {
	console.log("Connected to Twitch chat");

	client.on("chat", function(channel, userstate, message, self) {
		if (self) {
			return;
		}

		var move;

		switch (message) { // 0 = Up, 1 = Right, 2 = Down, 3 = Left
			case "!up":
				move = 0;
				break;
			case "!right":
				move = 1;
				break;
			case "!down":
				move = 2;
				break;
			case "!left":
				move = 3;
				break;
		}

		io.emit("move", {
			move: move,
			user: userstate["display-name"],
			colour: userstate["color"]
		});

		console.log(userstate["display-name"] + ": " + message);
	});
});