String.prototype.color = function(color) {
	if(! color) color = 'green';
	
	var colors = {
		black: 30,
		red: 31,
		green: 32,
		yellow: 33,
		blue: 34,
		white: 37
	}
	
	return "\033[" + colors[color.toLowerCase()] + "m" + this.toString() + "\033[0m";
}

/* Tweet version
String.prototype.color=function(c){l={black:30,red:31,green:32,yellow:33,blue:34,white:37};return"\033["+l[c]+"m"+this+"\033[0m"}
*/