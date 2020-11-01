const allowedCLIcommands = ["ls -l", "ls", "dir"];  // ARRAY OF VALUES
var cmd_str = "ls -la";                             // A VALUE TO CHECK (TO SEE IF IS OR IS NOT IN ARRAY)
var validateCommand = function(){                   // FUNCTION TO CALL FOR COMPARISON
	return allowedCLIcommands.includes(cmd_str, 0)    // LOOK IN ALLOWEDCLICOMMANDS ARRAY FOR X, STARTING AT INDEX 0
};


console.log(validateCommand());                     // WRITE OUT THE ANSWER IN CONSOLE
