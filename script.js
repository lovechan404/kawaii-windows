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
		$('#lights').toggleClass("active a");
      	e.preventDefault();
	});



	$("#addNewButton").click(function(){
	    var elem = $("<input/>",{
	        type: "text",
	        name: "teamName[]",
	        value: "Ok!"
	    });
	    
	    var removeLink = $("<span/>", {class: "closeinput"}).html("X").click(function(){
	        $(elem).remove();
	        $(this).remove();
	        var index = $( ".closeinput" ).length - 1;
	        $('.test .kawaii-button').eq(index).remove();
	    });
	    $('.test .kawaii-button-box').append('<button class="kawaii-button"> Ok! </button>');
	    $("#inputs").append(elem).append(removeLink);


		});
		$("#inputs").on("keyup", "input", function(){
			var btnVal = $(this).val();
			var index = $(this).index('input');
			// alert(index);
			$('.test .kawaii-button').eq(index).html(btnVal);
		});
		$("#inputs").on("keyup", "input", function(){
			var btnVal = $(this).val();
			var index = $(this).index('#inputs input');
			// alert(index);
			$('.test .kawaii-button').eq(index).html(btnVal);
		});
		$("#window-input").on("keyup", function(){ $('#window-title').html($(this).val()); });
		$("#heading-input").on("keyup", function(){ $('#heading').html($(this).val()); });
		$("#msg-input").on("keyup", function(){ $('.message-content').html($(this).val()); });
});



