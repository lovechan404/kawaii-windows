$(document).ready(function() {
	$( "#kawaii-a" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div').removeClass();
		$(".test > div").addClass('kawaii-window kawaii-a');
		$("#window-name").html("Soft");
	});
	$( "#kawaii-b" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div').removeClass();
		$(".test > div").addClass('kawaii-window kawaii-b');
		$("#window-name").html("Cloudy");
	});
	$( "#kawaii-c" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div').removeClass();
		$(".test > div").addClass('kawaii-window kawaii-c');
		$("#window-name").html("Cyberpunk");
	});
	$( "#kawaii-d" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div').removeClass();
		$(".test > div").addClass('kawaii-window kawaii-d');
		$("#window-name").html("Pink Grunge");
	});
	$( "#kawaii-e" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div').removeClass();
		$(".test > div").addClass('kawaii-window kawaii-e');
		$("#window-name").html("VIP");
	});

	$('#lights').click(function () {
		
		$('.test').toggleClass("lights-on lights-off"); //you can list several class names 
      	e.preventDefault();
	});
});