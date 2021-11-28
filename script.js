
$(document).ready(function() {




	$( ".clear-input" ).click(function() {
		$(this).siblings('input').val('');
		$(this).siblings('textarea').val('');
		$(this).siblings('input').keyup();
		$(this).siblings('textarea').keyup();
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
	$( "#control-min-toggle" ).click(function() {
			$(this).toggleClass("active not-active");
			$( "#control-min").toggle();
	});
	$( "#control-x-toggle" ).click(function() {
			$(this).toggleClass("active not-active");
			$( "#control-x").toggle();
	});
	$( "#donate-toggle" ).click(function() {
			$(this).toggleClass("active not-active");
			$( "#donate").slideToggle( "slow" );
			$( "#report").hide();
	});
	$( "#report-toggle" ).click(function() {
			$(this).toggleClass("active not-active");
			$( "#report").slideToggle( "slow" );
			$( "#donate").hide();
	});
	// $( "#text-copy" ).click(function() {
			
	// 		/* Get the text field */
	// 	  var copyText = document.getElementById("msg-input");

	// 	  /* Select the text field */
	// 	  copyText.select();
	// 	  copyText.setSelectionRange(0, 99999); /* For mobile devices */

	// 	  /* Copy the text inside the text field */
	// 	  navigator.clipboard.writeText(copyText.value);
	// });

	$('#lights').click(function () {
		$('.test').toggleClass("lights-on lights-off"); //you can list several class names 
		$('#lights').toggleClass("active a");
	});



			var elem1 = $("<input/>",{
	        type: "text",
	        name: "teamName[]",
	        value: "Yes"
	    });
	   var elem2 = $("<input/>",{
	        type: "text",
	        name: "teamName[]",
	        value: "No"
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
		// $("#kawaii-window-save").css("transform", "scale(2)");
var modal = document.getElementById("myModal");

  modal.style.display = "block";

	var node = document.getElementById('kawaii-window-save');
	var scale = 3;
	var style = {
    transform: 'scale('+scale+')',
    transformOrigin: 'top left',
    width: node.offsetWidth  + "px",
     height: node.offsetHeight  + "px"
	}
	var param = {
     height: node.offsetHeight * scale,
     width: node.offsetWidth * scale ,
      quality: 1,
     style
	}

		domtoimage.toPng(node, param)
	 
	    .then(function (dataUrl) {
	        var img = new Image();
	        img.src = dataUrl;

    			document.getElementById('generated-image').innerHTML ='';
	        setTimeout(function(){$('#loader1').fadeOut('fast');},1000);
	        setTimeout(function(){document.getElementById('generated-image').appendChild(img);},1000);

	        var link = document.createElement('a');
        	link.download = 'kawaii-window.png';
        	link.href = dataUrl;
        	link.innerText = "Download PNG";
        	setTimeout(function(){document.getElementById('generated-image').appendChild(link);},1000);
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
    document.getElementById('generated-image').innerHTML ='';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("loader1").style.display = "block";
  }
}

var source = "https://lovechan404.github.io/kawaii-windows/bgmusic.mp3";
var audio = new Audio(); 
audio.src = source;
audio.autoplay = true; 
audio.loop = true;

$("#playBtn").click(function() {
  audio.play();
  $("#pauseBtn").show();
  $('#playBtn').hide();
});

$("#pauseBtn").click(function() {
  audio.pause();
  $("#playBtn").show();
  $('#pauseBtn').hide();
});

$("#stopBtn").click(function() {
  audio.pause();
  audio.currentTime = 0;
  $("#playBtn").show();
  $('#pauseBtn').hide();
});

$("#music-settings").click(function() {
  $("#music-controls").slideToggle();
  $("#share-controls").slideUp();
});
$("#share-settings").click(function() {
  $("#share-controls").slideToggle();
  $("#music-controls").slideUp();

});



	$( "#amazingbtn2" ).click(function(){
		// Get the modal
		// $("#kawaii-window-save").css("transform", "scale(2)");
var modal = document.getElementById("myModal");

  modal.style.display = "block";

	var node = document.getElementById('kawaii-window-save');
	var scale = 3;
	var style = {
    transform: 'scale('+scale+')',
    transformOrigin: 'top left',
    width: node.offsetWidth  + "px",
     height: node.offsetHeight  + "px"
	}
	var param = {
     height: node.offsetHeight * scale,
     width: node.offsetWidth * scale ,
      quality: 1,
     style
	}
	function filter (node) {
    return (node.tagName !== 'i');
}

domtoimage.toSvg(node, {filter: filter})
    .then(function (dataUrl) {
        var img = new Image();
	        img.src = dataUrl;

    			document.getElementById('generated-image').innerHTML ='';
	        setTimeout(function(){$('#loader1').fadeOut('fast');},1000);
	        setTimeout(function(){document.getElementById('generated-image').appendChild(img);},1000);

	        var link = document.createElement('a');
        	link.download = 'kawaii-window.svg';
        	link.href = dataUrl;
        	link.innerText = "Download SVG";
        	setTimeout(function(){document.getElementById('generated-image').appendChild(link);},1000);
	    })
	    .catch(function (error) {
	        console.error('oops, something went wrong!', error);
	    });
});