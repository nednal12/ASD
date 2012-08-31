/**
 * @author Brent Marohnic
 */
$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
	
});	

// ----------------------------------- owners Page -----------------------------------
$('#owners').on('pageinit', function(){
		
			var	selectDiv = $("#ownersList");
			
			//Cycle thru the JSON data and create the listview
			for (var n in json) {
				
				$("<img></>").attr({
					src: 'images/' + json[n]["make"][1] + '.jpg',
					alt: json[n]["make"][1],
					height: 40,
					width: 40,
					value: json[n]["owner"][1]
				}).appendTo("#ownersList").wrapAll("<li>" + json[n]['owner'][1] + "</li>");
		
			}
			$('#ownersList').listview('refresh');
	
});	

// ----------------------------------- makes Page -----------------------------------
$('#makes').on('pageinit', function(){
		
			var	selectDiv = $("#makesList");
			
			//Cycle thru the JSON data and create the listview
			for (var n in json) {
				
				$("<img></>").attr({
					src: 'images/' + json[n]["make"][1] + '.jpg',
					alt: json[n]["make"][1],
					height: 40,
					width: 40,
					value: json[n]["make"][1]
				}).appendTo("#makesList").wrapAll("<li>" + json[n]['make'][1] + "</li>");
		
			}
			$('#makesList').listview('refresh');
	
});	

// ----------------------------------- models Page -----------------------------------
$('#models').on('pageinit', function(){
		
			var	selectDiv = $("#modelsList");
			
			//Cycle thru the JSON data and create the listview
			for (var n in json) {
				
				$("<img></>").attr({
					src: 'images/' + json[n]["make"][1] + '.jpg',
					alt: json[n]["make"][1],
					height: 40,
					width: 40,
					value: json[n]["model"][1]
				}).appendTo("#modelsList").wrapAll("<li>" + json[n]['model'][1] + "</li>");
		
			}
			$('#modelsList').listview('refresh');
	
});	

// ----------------------------------- addItem Page -----------------------------------
$('#addItem').on('pageinit', function(){
		
	var myForm = $('#bigForm');
	
	myForm.validate({
		
		invalidHandler: function(form, validator) {},
		
		submitHandler: function() {
		var data = myForm.serializeArray();
		logFormData(data);
		storeData(data);
		}
		
	})
	
	//any other code needed for addItem page goes here
	
	$("#clearLocal").on('click', clearLocal);
	
});

// ----------------------------------- session Page -----------------------------------
$('#sessionPage').on('pageinit', function(){
		
		if (localStorage.length < 1) {
			alert("There is no data to display. Default data was added.");
			autoPopulate();
		}
			
		//Cycle thru the JSON data and create the listview
		for (var i=0, j=localStorage.length, k=i+1; i<j; i++, k++) {
			var key = localStorage.key(i),
				value = localStorage.getItem(key),
				obj = JSON.parse(value);
				
			$("<li>Item " + k + "</li>").attr({
				id: "id" + localStorage.key(i)
			}).appendTo("#sessionList");
			
			for (var n in obj) {
				
				$("<div>" + obj[n][0]+" "+obj[n][1] + "</div>").appendTo("#id" + localStorage.key(i));
				
			}
			
		}
		$('#sessionList').listview('refresh');
		
});	

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var logFormData = function(data){
	// Write all form data to the console in order to view the objects
	
	console.log(data);
};


var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	var id = localStorage.length + 1;
	
		localStorage.setItem(id, JSON.stringify(data));
		alert("Vehicle Saved!");
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
	
	localStorage.clear();
	alert("Local Storage Has Been Deleted!");
};

function autoPopulate(){
	// Populate display data with data retrieved from the JSON object whenever there is no data in local storage.
	for(var n in json) {
		var id = localStorage.length;
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
}

