

$(document).ready(function() {
	$( "#amazingbtn" ).click(function(){
var style = {
  transform: 'scale(2)',
  'transform-origin': 'top left'
};
var nodeWidth = document.getElementById('kawaii-window-save').offsetWidth * 2;
var nodeHeight = document.getElementById('kawaii-window-save').offsetHeight * 2;

  var node = document.getElementById('kawaii-window-save');
	domtoimage.toPng(node, { style: style, 
    width: nodeWidth, // this will be the intended width of your SVG
    height: nodeHeight // this will be the intended height of your SVG
 })
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.getElementById('preview-here').appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
});

	$( "#kawaii-a" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div > div').removeClass();
		$(".test > div > div").addClass('kawaii-window kawaii-a');
		$("#window-name").html("Soft");
	});
	$( "#kawaii-b" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div > div').removeClass();
		$(".test > div > div").addClass('kawaii-window kawaii-b');
		$("#window-name").html("Cloudy");
	});
	$( "#kawaii-c" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div > div').removeClass();
		$(".test > div > div").addClass('kawaii-window kawaii-c');
		$("#window-name").html("Cyberpunk");
	});
	$( "#kawaii-d" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div > div').removeClass();
		$(".test > div > div").addClass('kawaii-window kawaii-d');
		$("#window-name").html("Pink Grunge");
	});
	$( "#kawaii-e" ).click(function() {
		$(this).addClass('active');
		$(this).siblings('span').removeClass();
		$('.test > div > div').removeClass();
		$(".test > div > div").addClass('kawaii-window kawaii-e');
		$("#window-name").html("VIP");
	});

	$('#lights').click(function () {
		$('.test').toggleClass("lights-on lights-off"); //you can list several class names 
		$('#lights').toggleClass("active a");
      	e.preventDefault();
	});



	    var elem1 = $("<input/>",{
	        type: "text",
	        name: "teamName[]",
	        value: 'Preview'
	    });
	   
	    var elem2 = $("<input/>",{
	        type: "text",
	        name: "teamName[]",
	        value: 'Next'
	    });

	    var removeLink1 = $("<span/>", {class: "closeinput"}).html("X").click(function(){
	        var index = $(this).index('.closeinput');
	        $('.test .kawaii-button.button-added').eq(index).remove();
	        $(elem1).remove();
	        $(this).remove();
	        $('#ttt').html($( ".closeinput" ).length);
	    });
	    var removeLink2 = $("<span/>", {class: "closeinput"}).html("X").click(function(){
	        var index = $(this).index('.closeinput');
	        $('.test .kawaii-button.button-added').eq(index).remove();
	        $(elem2).remove();
	        $(this).remove();
	        $('#ttt').html($( ".closeinput" ).length);
	    });

	    $('.test .kawaii-button-box').append('<button class="kawaii-button button-added"> < Preview </button><button class="kawaii-button button-added"> Next > </button>');


	  $("#inputs").append(elem1).append(removeLink1);
	  $("#inputs").append(elem2).append(removeLink2);
		$('#ttt').html($( ".closeinput" ).length);



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
	    'BUG: preview also edits the next next button. Please edit button before adding more.',
	    'BUG: preview also edits the next next button. Please edit button before adding more.',
	    'BUG: preview also edits the next next button. Please edit button before adding more.',
	    'Goats actually have accents lol.',
	    'What should I add next?',
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









