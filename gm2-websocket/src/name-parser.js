function parseVarName(varname) {
	//I know, this is kind of a bad system,
	//remember this was my first scratch server extension I made!
	
	var split = varname.split("_"); //Split it by underscores.
	
	var nameArray = split.slice(1,split.length); //Basicly removes the first underscore separator.
	
	var name = nameArray.join("_"); //Rejoin the split varname.
	
	var hostname = split[0]; //Host name should usally be the first one.
	
	return {
		host:hostname,
		name:name,
		full:varname
	};
}

module.exports = parseVarName;