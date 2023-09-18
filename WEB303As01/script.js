/*
	WEB 303 Assignment 1 - jQuery
	{Jackson Land}
*/

$(document).ready(function(){

	$("#yearly-salary, #percent").on('change',function(){

        var amount;
		var salary = Number($('#yearly-salary').val());
		var percent = Number($('#percent').val());
		var amount = salary * percent /100;
		var amount = amount.toFixed(2);
		$("span#amount").text("$"+amount);

		//keyup auto updates the amount text
		//on change updates text after it has been clicked off of
    });
});