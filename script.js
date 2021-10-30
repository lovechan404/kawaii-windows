

$(document).ready(function() {





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
	    'Bug on multiple button preview. Please edit button before adding more.',
	    'Bug on multiple button preview. Please edit button before adding more.',
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


	$( "#amazingbtn" ).click(function(){
		// Get the modal
var modal = document.getElementById("myModal");

  modal.style.display = "block";

	// var nodeWidth = document.getElementById('kawaii-window-save').clientWidth * 2;
	// var nodeHeight = document.getElementById('kawaii-window-save').clientHeight * 2;

	  var node = document.getElementById('kawaii-window-save');
		domtoimage.toPng(node, { 
			style: {
		    // 'transform': 'scale(2)',
		    // 'transform-origin': 'top left'
		  },
			// width: nodeWidth,
		  // height: nodeHeight
	 })
	    .then(function (dataUrl) {
	        var img = new Image();
	        img.src = dataUrl;

    			document.getElementById('preview-here').innerHTML ='';
	        setTimeout(function(){$('#loader1').fadeOut('fast');},1500);
	        // setTimeout(function(){$('#loader2').fadeIn('fast');},2000);
	        setTimeout(function(){document.getElementById('preview-here').appendChild(img);},1500);
	    })
	    .catch(function (error) {
	        console.error('oops, something went wrong!', error);
	    });
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
    document.getElementById("loader1").style.display = "block";
    document.getElementById('preview-here').innerHTML ='';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("loader1").style.display = "none";
    document.getElementById("loader2").style.display = "none";
  }
}


