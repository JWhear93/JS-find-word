/*jshint multistr:true */

window.console = {
  log: function(str){
	var node = document.createElement("div");
	node.appendChild(document.createTextNode(str));
	document.getElementById("myLog").appendChild(node);
  }
}

var text = prompt("Insert text to search");

var myName = prompt("Insert word to find");

/* Old var
var hits = []; */

function indexes(str, find) {
  var regex = new RegExp(find, "g")
  ,   result
  ,   indices = [];
  while ((result = regex.exec(str))) {
    indices.push(result.index);
  }
  return indices;
}

if (myName != "") {
	console.log("Find: " + myName);
	console.log("Text: " + text);
	console.log("Match found at character(s) - " + indexes(text, myName));
}
else {
	console.log("You did not input a word to search for. Refresh to try again");
}


/* My "only return name" code practice.

var n = text.search(myName);

console.log(n);

if (n>0) {
	hits.push(myName);
}


// Original letter by letter check code.

for (i=0; i<text.length; i++) {
	if (text[i]===myName[0]) {
		for (var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}



if (hits.length === 0) {
	console.log("Your name wasn't found!");
}
else {
	console.log(hits + " - Found match at character " + n);
} */