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
		var btn = ["I'm cute.",
		"Nope!",
		"WHAAAT",
		"OKKAAAY", 
		"Nuh-uh", 
		"HAI!", 
		"Sowwy", 
		"nOOoOoOooO", 
		"I'm cool.", 
		"Hecc nooo", 
		"No no no no", 
		"YES YES YES", 
		"YAAASS",
		"sate sate sate",
		"Omae wa mou shindeiru"];
		var randBtn = btn[Math.floor(Math.random() * btn.length)];
	    var elem = $("<input/>",{
	        type: "text",
	        name: "teamName[]",
	        value: randBtn
	    });
	   


	    var removeLink = $("<span/>", {class: "closeinput"}).html("X").click(function(){
	        var index = $(this).index('.closeinput');
	        $('.test .kawaii-button.button-added').eq(index).remove();
	        $(elem).remove();
	        $(this).remove();
	        $('#ttt').html($( ".closeinput" ).length);
	    });
	    $('.test .kawaii-button-box').append('<button class="kawaii-button button-added">' + randBtn +  '</button>');


	    $("#inputs").append(elem).append(removeLink);
		$('#ttt').html($( ".closeinput" ).length);

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


		var words = [
	    'More colors will be added soon!',
	    'BUG: preview also edits the next next button. So kindly edit button before adding more.',
	    'BUG: preview also edits the next next button. So kindly edit button before adding more.',
	    'BUG: preview also edits the next next button. So kindly edit button before adding more.',
	    'Please contact me if something is not working. Thanks!',
	    'What should I add next?',
	    'I have a black cat named Luna',
	    ];

    var getRandomWord = function () {
      return words[Math.floor(Math.random() * words.length)];
    };
	$(function() { // after page load
	  setInterval(function(){
	    $('.hints').fadeOut(500, function(){
	      $(this).html(getRandomWord()).fadeIn(500);
	    });
	  // 5 seconds
	  }, 8000);
	});

});






