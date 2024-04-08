var ws = require("ws");

class GM2WebSocket {
	constructor (props) {
		this.props = props;
		
		this.wss = null;
		
		this._setupLogProps();
		
		this.port = props.port;
	}
	
	//Setup to tell what should be logged into the console.
	
	_setupLogProps (log) {
		this.log = {
			connections: false,
			userAgent: false,
			assignID: false,
			
			variables: false,
			
			malformedCommands: false
		};
		
		if (log.port) {
			this.log.port = true;
		}
		
		
		if (log.connections) {
			this.log.connections = true;
		}
		
		if (log.userAgent) {
			this.log.userAgent = true;
		}
		if (log.assignID) {
			this.log.assignID = true;
		}
		
		
		if (log.variables) {
			this.log.variables = true;
		}
		
		
		if (log.malformedCommands) {
			this.log.malformedCommands = true;
		}
	}
	
	
	
}