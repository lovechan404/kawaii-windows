$(document).ready(function() {
	$( "#kawaii-a" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div').removeClass();
		$(".test > div").addClass('kawaii-window kawaii-a');
		$("#window-name").html("Simple");
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
		$("#window-name").html("Retro");
	});
});