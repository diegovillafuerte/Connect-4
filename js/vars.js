// Create variables for use in our game.

// Config object.
// @todo: Store row & column count in config and have the game adjust
//        automatically. Keep the board below in a comment for reference. See
//        http://stackoverflow.com/a/2716973/1154642 for how to build the table
//        automatically with loops. Maybe expose the option to users... but
//        probably not, to keep the UI simple.
// @todo: Eliminate global variables and methods by making them all part of a
//        private anonymous function. For Reference: Anonymous Functions And The
//        Module Pattern (http://www.smashingmagazine.com/2010/04/20/seven-javascript-things-i-wish-i-knew-much-earlier-in-my-career/).
// @todo: Extra credit. Make this more accessible (keyboard navigation + screen-
//        reader friendly).
var config = {
        blackPlayerName: "Jugador 1",
        redPlayerName: "Jugador 2",
        startingPlayer: "black", // Choose 'black' or 'red'.
        takenMsg: "Esta posición está ocupada, tira de nuevo.",
        drawMsg: "¡Empate!.",
        playerPrefix: "Es turno de: ",
        winPrefix: "El ganador es: ",
        countToWin: 4,
    };

// Define the empty board as a two-dimensional array, full of zeros. In our
// game, 0 represents empty, 'red' represents a red disc, and 'black' represents
// a black disc.
var board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0]];

// Set the starting player.
var currentPlayer = config.startingPlayer;
