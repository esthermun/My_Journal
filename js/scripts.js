
function numOfEntries (journal){
	$('#entryCount').html(journal.entries.length);
}

function writeEntriesToPage (journal) {
	$('#journalContent').append(journal.toHTML());
	
}

$('#entryForm').submit(function(event){
	console.log("clicked!");
	event.preventDefault();

	function addNewEntryToPage(){
		//translate into object
		var formData = $('#entryForm').serializeFormToObject();
		//created new entry
		var entry = myJournal.addEntry(formData.title, formData.content, formData.author, [formData.tags]);
		
		$('#journalContent').append(entry.toHTML());
	}
	addNewEntryToPage();

});


numOfEntries(myJournal);

writeEntriesToPage(myJournal);