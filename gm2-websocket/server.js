var GM2WebSocket = require("./src");

var server = new GM2WebSocket({
	port:8080, //Port to open to.
	maxClients: 350, //How many connections should it allow?
	
	fileSaving: true, //Save a file for all the rooms, only use this if your saving information for a certian room.
	fileTargets: ["save"], //Save only for these host names.
	
	logs: { //What do you want to log?
		port: true, //Show when the server starts with the port number.
		
		connections: true, //Log every time a client connects or disconnects.
		userAgent: true, //Display the User Agent on connection, tells what type of device the client is.
		assignID: true, //Display the assigned identifier on connection and disconnection.
		
		variables: false, //Display any variable changes, shows the name and value change. (Use this only for sending small amounts, large amounts will fill up your terminal.)
		
		malformedCommands: true //Display any malformed messages that the server doesn't reconize.
	}
});

server.open(); //Start running the server.