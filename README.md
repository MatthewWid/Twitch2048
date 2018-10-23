# Twitch2048

Takes chat commands from a channel's chatroom and controls a 2048 board with them.  
Restream the board to your viewers and play a game!

This project utilises the [official Twitch.tv API](https://dev.twitch.tv/) to register chat commands and live update a 2048 board running in the browser using [socket.io](https://socket.io/).

# Setup

Setup is simple: install the dependencies and authorise with the Twitch API.

1. `git clone` this repository and navigate into it with console.
2. Run `npm install` to install the dependencies.
3. [Get a Twitch authentication token](https://glass.twitch.tv/console/apps/create).
4. Replace the placeholder text in the `options` variable in `/src/app.js` with your authentication credentials.
5. Run `npm start` to start up your web server locally.
6. Navigate to `localhost:8080` on your web browser.

# Dependencies

* express (^4.14.0)
* socket.io (^1.7.2)
* tmi.js (^1.1.2)
