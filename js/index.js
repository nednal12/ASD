/**
 * @author Brent Marohnic
 */


$("#jsonData").on('pageinit', function(){
	//site code
	$('#displayData').empty();
	$.ajax({ 
		url: 'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
			console.log(response);
			console.log(response.myRecs);
			console.log(response.myRecs[0]);
			console.log(response.myRecs[0]['owner'][0]);
			console.log(response.myRecs[0]['owner'][1]);
			
			for ( var i = 0, len = response.myRecs.length; i < len; i++ ) {
				var prefx = response.myRecs[i];
					
                    $( ' ' + 
					'<div class="vehicles">' +
					'<p>' + prefx.owner[0] + " " + prefx.owner[1] +
						'<br>' + prefx.make[0] + " " + prefx.make[1] + 
						'<br>' + prefx.model[0] + " " + prefx.model[1] + 
						'<br>' + prefx.mileage[0] + " " + prefx.mileage[1] +
						'<br>' + prefx.transmission[0] + " " + prefx.transmission[1] +
						'<br>' + prefx.condition[0] + " " + prefx.condition[1] +
						'<br>' + prefx.oilCB[0] + " " + prefx.oilCB[1] +
						'<br>' + prefx.tireRotationCB[0] + " " + prefx.tireRotationCB[1] +
						'<br>' + prefx.oilChange[0] + " " + prefx.oilChange[1] +
						'<br>' + prefx.airChange[0] + " " + prefx.airChange[1] +
						'<br>' + prefx.notes[0] + " " + prefx.notes[1] +
					'</p>' +
					'</div>'
					).appendTo('#displayData');
                }
		}
	});
	
});


$("#xmlData").on('pageinit', function(){
	//site code
	$('#displayXMLData').empty();
	$.ajax({ 
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			var xmlObj = $(xml);
			xmlObj.find("item").each(function(){
				var owner = $(this).find("owner").text(),
					make = $(this).find("make").text(),
					model = $(this).find("model").text(),
					mileage = $(this).find("mileage").text(),
					transmission = $(this).find("transmission").text(),
					condition = $(this).find("condition").text(),
					oilCB = $(this).find("oilCB").text(),
					tireRotationCB = $(this).find("tireRotationCB").text(),
					oilChange = $(this).find("oilChange").text(),
					airChange =$(this).find("airChange").text(),
					notes =  $(this).find("notes").text();
				
				$( ' ' + 
					'<div class="vehicles">' +
					'<p>Owner: ' + owner +
						'<br>Make: ' + make + 
						'<br>Model: ' + model + 
						'<br>Mileage: ' + mileage +
						'<br>Transmission: ' + transmission +
						'<br>Condition: ' + condition +
						'<br>Oil and Filter: ' + oilCB +
						'<br>Tire Rotation: ' + tireRotationCB +
						'<br>Last Oil Change: ' + oilChange +
						'<br>Last Air Filter Change: ' + airChange +
						'<br>Notes: ' + notes +
					'</p>' +
					'</div>'
					).appendTo('#displayXMLData');
			});
				
		}
	
	});
	
});


$("#wddxData").on('pageinit', function(){
	//site code
	$('#displayWDDXData').empty();
	$.ajax({ 
		url: 'xhr/data.wddx',
		type: 'GET',
		dataType: 'xml',
		success: function(wddx){
			var wddxObj = $(wddx);
			wddxObj.find("struct").each(function(){
				var owner = $(this).find("var[name='Owner: ']>string").text(),
					make = $(this).find("var[name='Make: ']>string").text(),
					model = $(this).find("var[name='Model: ']>string").text(),
					mileage = $(this).find("var[name='Mileage: ']>string").text(),
					transmission = $(this).find("var[name='Transmission: ']>string").text(),
					condition = $(this).find("var[name='Condition: ']>string").text(),
					oilCB = $(this).find("var[name='Oil and Filter: ']>string").text(),
					tireRotationCB = $(this).find("var[name='Tire Rotation: ']>string").text(),
					oilChange = $(this).find("var[name='Last Oil Change: ']>string").text(),
					airChange =$(this).find("var[name='Last Air Filter Change: ']>string").text(),
					notes =  $(this).find("var[name='Notes: ']>string").text();
				
				$( ' ' + 
					'<div class="vehicles">' +
					'<p>Owner: ' + owner +
						'<br>Make: ' + make + 
						'<br>Model: ' + model + 
						'<br>Mileage: ' + mileage +
						'<br>Transmission: ' + transmission +
						'<br>Condition: ' + condition +
						'<br>Oil and Filter: ' + oilCB +
						'<br>Tire Rotation: ' + tireRotationCB +
						'<br>Last Oil Change: ' + oilChange +
						'<br>Last Air Filter Change: ' + airChange +
						'<br>Notes: ' + notes +
					'</p>' +
					'</div>'
					).appendTo('#displayWDDXData');
			});
				
		}
	
	});
	
});



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
	$("#sessionBtn").on('click', showPage);
	
});

// ----------------------------------- session Page -----------------------------------
$('#sessionPage').on('pageinit', function(){
/*		
		if (localStorage.length === 0) {
			alert("There is no data to display. Default data was added.");
			autoPopulate();
		}
*/		
		$("#sessionList").empty();
		//Cycle thru the JSON data and create the listview
		
		for (var i=0, j=localStorage.length, k=i+1; i<j; i++, k++) {
			var key = localStorage.key(i),
				value = localStorage.getItem(key),
				obj = JSON.parse(value);
				
			$("<li>Item " + k + "</li>").attr({
				id: "mainLi" + key
			}).appendTo("#sessionList");
			
			$("<ul></ul>").attr({
				id: 'subUl' + key
			}).appendTo('#mainLi' + key);

			for (var n in obj) {
				
				$("<li>" + obj[n]["name"] +" "+ obj[n]["value"] + "</li>").appendTo("#subUl" + key);
				
			}
			$('<li>' +
				'<input type="button" data-inline="true" id="edit' + key + '" name="' + key + '"value="Edit Entry" />' +
				'<input type="button" data-inline="true" id="delete' + key + '" name="' + key + '" value="Delete Entry" />' +
			'</li>' ).appendTo('#subUl' + key);
	//		$('<li><a type="button" data-inline="true" href="#editEntry" id="edit' + key + '"value="Edit Entry">Edit Entry</a></li>' ).appendTo('#subUl' + key);
			
		}
	
	$("input[id^=delete]").on('click', deleteEntry);
	$("input[id^=edit]").on('click', editEntry);
	
});	

//The functions below can go inside or outside the pageinit function for the page in which it is needed.
var deleteEntry = function() {
	var ask = confirm("Are you sure you want to delete this vehicle?");
	if (ask){
		localStorage.removeItem(this.name);
		$("#sessionPage").trigger('pageinit');
		$.mobile.changePage($("#sessionPage"));
	}
	else {
		alert("The vehicle was not deleted.");
	}
};

var editEntry = function() {
	var ask = confirm("Are you sure you want to edit this vehicle?");
	if (ask){
		
		var value = lStorage.getItem(this.name);
		var obj = JSON.parse(value);
		
		$("#editPage").trigger('pageinit');
		$.mobile.changePage($("#editPage"));
	}
	else {
		alert("The vehicle was not edited.");
	}
};


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
	return false;
};

var showPage = function(){
	$("#sessionPage").trigger('pageinit');
	$.mobile.changePage($("#sessionPage"));
}
