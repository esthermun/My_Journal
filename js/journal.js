function Journal()
{
	this.entries = [];

	// adds an Entry with the given info
	this.addEntry = function addIt(title, content, author, tags, timestamp) {
		// create the Entry object
		var entry = new Entry(title, content, author, tags, timestamp);
		// add it to the array
		this.entries.push(entry);
		return entry;
	}

	// Displays an Entry object
	this.displayEntry = function showEntry(entry) {
		console.log("------------------------------");
		console.log("\t" + entry.title + "\n");
		console.log("\t" + "By: " + entry.author);
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		console.log(entry.content);	

		// log the tags
		for (var i = 0; i < entry.tags.length; i++) {
			console.log("#" + entry.tags[i] + " ");		
		}
		console.log("------------------------------");
	}

	// Displays an array of Entry objects
	this.displayEntries = function showEntries(entryArray) {
		for (var i = 0; i < entryArray.length; i++) {	
			this.displayEntry(entryArray[i]); // display the entry
			console.log(); // adds a new line
		}
	}

	//displays the entries to the html page
	this.toHTML = function(){
		var htmlString = "";
		for (var i = 0; i < this.entries.length; i++){
			htmlString += this.entries[i].toHTML();
		}
		return htmlString;
	}

	// Displays all entries in the Journal
	this.displayAllEntries = function showAllEntries() {
		this.displayEntries(this.entries);
	}

	// Finds all Entry objects with the given tag, and returns them in an array
	this.findAllEntriesWithTag = function searchForTag(tag)	{

		var foundEntries = [];

		// look at each entry
		for (var i = 0; i < this.entries.length; i++) {
			var currentEntry = this.entries[i];

			// add it to the array if it has the tag	
			if (currentEntry.hasTag(tag)) {
				foundEntries.push(currentEntry);
			}
		}
		// return all the entries with the tag
		return foundEntries;
	}
	// find all entries with keyword and print out - NEED TO STRINGIFY
	// this.searchKeyword = function findKeyword(keyword){
	// 	var searchResults = [];
	// 	for (var j = 0; j < this.entries.length; j++){
	// 		var currentEntry = this.entries[j];
	// 		if(currentEntry.indexOf(keyword) != -1){
	// 			searchResults.push(this.entries[j]);
	// 		}
	// 	}
	// 	return searchResults;
	// }

}

function Entry(title, content, author, tags, timestamp) {
	this.title = title;
	this.content = content;
	this.author = author;
	this.tags = tags;
	this.timestamp = timestamp;

	//contents to add to html page 
	this.toHTML = function(){
		var htmlString = "";
		htmlString += "<article class = 'well journalPage'>";
		htmlString += "<h3>" + this.title + "</h3>";
		htmlString += "<h4>By: " + this.author + "</h3>";
		htmlString += "<p>" + this.content + "</p>";
		htmlString += "<p> #" + this.tags + "</p>";
		htmlString += "<p>" + this.timestamp() + "</p>";
		htmlString += "</article>";
		htmlString += "<hr>"
		return htmlString;
	}

	// returns whether or not the Entry has a given tag
	this.hasTag = function (tag) {
		for (var i = 0; i < this.tags.length; i++) {
			if (this.tags[i] === tag) {
				return true;
			}
		}
		return false;
	}


	//timestamp
	this.timestamp = function(){
		var date = new Date();
		var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
		var month = monthName[date.getMonth()];
		var day = date.getDate();
		var year = date.getFullYear();
		var hour = date.getHours();
		var min = date.getMinutes();
		var time = month + " " + day + ", " + year + "  " + hour + ":" + min;
    	return time;
	}
}


// TESTING CODE
var myJournal = new Journal();
myJournal.addEntry("First Entry", "Everything is great!", "Ben", ["Friday", "Boring"]);
myJournal.addEntry("Second Entry", "What happened? Everything is terrible", "Ben", ["Monday", "Boring"]);
myJournal.addEntry("Think About It", "Real Eyes Realize Real Lies", "Jaden", ["Deep", "Eyes", "Swag"]);
myJournal.addEntry("Huh?", "Who gave my journal to Jaden?", "Ben", ["Confused"]);
