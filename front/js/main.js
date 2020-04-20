
(function ($) {
	"use strict";
	$('.column100').on('mouseover',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).addClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
	});

	$('.column100').on('mouseout',function(){
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable')+"";
		var column = $(this).data('column') + ""; 

		$(table2).find("."+column).removeClass('hov-column-'+ verTable);
		$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
	});

	fetchData();

})(jQuery);

function fetchData() {
	fetch("http://localhost:6666/lopyrequests")
		.then(data=>{return data.json()})
		.then(res=>{populateTable(res)})
}

function populateTable(data) {
	console.log(data);
	let table = document.querySelector("tbody");
	for (let element of data) {
		console.log("element");
		console.log(element);
		let row = table.insertRow();
		row.className = "row100 body";

		["time", "type", "request"].forEach(function (key, index) {
			let cell = row.insertCell();
			cell.className = "cell100 column" + index.toString();
			console.log(cell.className);
			let text = document.createTextNode(element[key]);
			cell.appendChild(text);
		});
	}
}
