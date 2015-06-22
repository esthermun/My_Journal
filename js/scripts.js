
function numOfEntries (journal){
	$('#entryCount').html(journal.entries.length);
}

function writeEntriesToPage (journal) {
	$('#journalContent').append(journal.toHTML());
	
}
// submitting new entry
$('#entryForm').submit(function(event){
	//console.log("clicked!");
	event.preventDefault();

	function addNewEntryToPage(){
		//translate into object
		var formData = $('#entryForm').serializeFormToObject();
		//created new entry
		var entry = myJournal.addEntry(formData.title, formData.content, formData.author, [formData.tags]);
		console.log(entry);
		$('#journalContent').append(entry.toHTML());
	}
	addNewEntryToPage();
});

//searching function
$('#searchForm').submit(function(event){
	console.log("search clicked");
	event.preventDefault();
	var tag = $('#searchForm').find('input[name ="search"]').val();
	console.log(tag);
	function writeSearchResults(){
		var mySearch = myJournal.findAllEntriesWithTag(tag);
		console.log(mySearch);
		for(var i = 0; i < mySearch.length; i++){
			var foundTagTitles = "Found Results in - " + mySearch[i].title;
			console.log("Tags found in: \n" + foundTagTitles);
			$('#searchResults').append(foundTagTitles);

		}
		
		
	}
	writeSearchResults();  

});



numOfEntries(myJournal);
writeEntriesToPage(myJournal);