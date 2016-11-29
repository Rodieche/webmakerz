$(document).ready(function(){
	$(".slider").slider();
	$(".button-collapse").sideNav({
		menuWidth: 300,
		edge: 'left',
		closeOnClick: true,
	});
	$('.dropdown-button').dropdown({
		belowOrigin: false,
	});	
	$('.tooltipped').tooltip({
		delay: 50,
	});
	$('input#input_text, textarea#textarea1').characterCounter();
	Materialize.updateTextFields();
	$('#description').val('New Text');
	$('#description').trigger('autoresize');
//	$('.fixed-action-btn').openFAB();
//	$('.fixed-action-btn').closeFAB();
	$('.dropdown-button').dropdown({
		inDuration: 300,
		outDuration: 225,
		constrain_width: false, // Does not change width of dropdown to that of the activator
		hover: true, // Activate on hover
		gutter: 0, // Spacing from edge
		belowOrigin: false, // Displays dropdown below the button
		alignment: 'left' // Displays dropdown with edge aligned to the left of button
	});
	$('.carousel').carousel();
});

$( window ).load(function() { 
	$('.parallax').parallax(); 
});