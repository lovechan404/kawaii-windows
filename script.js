

$(document).ready(function() {

    $(".title").click(function() {
        $("#myModal2").show();
    });
    $(".clear-input").click(function() {
        $(this).siblings('input').val('');
        $(this).siblings('textarea').val('');
        $(this).siblings('input').keyup();
        $(this).siblings('textarea').keyup();
    });
    $("#style-setting span").click(function() {
        $(this).addClass('active');
        $(this).siblings('span').removeClass();
        $('.test > div > div').removeClass();
        var styleSetting = $(this).attr('id');
        $(".test > div > div").addClass('kawaii-window ' + styleSetting);
        if (styleSetting == "kawaii-e") {
            $("#control-min-toggle").hide();
        }
        else {
            $("#control-min-toggle").show();
        }
    });
    $(".color-settings span").hover(function() {
        $(this).addClass('active');
        $(this).siblings('span').removeClass();
    });
    $(".color-settings span").click(function() {
        $('body').removeClass();
        var colorSetting = $(this).attr('id');
        $("body").addClass(colorSetting);
    });

    $("#control-min-toggle").click(function() {
        $(this).toggleClass("active not-active");
        $("#control-min").toggle();
    });
    $("#control-x-toggle").click(function() {
        $(this).toggleClass("active not-active");
        $("#control-x").toggle();
    });
    $("#donate-toggle").click(function() {
        $(this).toggleClass("active not-active");
        $("#donate").slideToggle("slow");
        $("#report").hide();
    });
    $("#report-toggle").click(function() {
        $(this).toggleClass("active not-active");
        $("#report").slideToggle("slow");
        $("#donate").hide();
    });
    $("#click-toggle-menu").click(function() {
        $("#click-toggle-menu i").toggleClass("fa-chevron-right fa-chevron-left");
        $("#menu-container").toggle("slow");
    });

    $('#lights').click(function() {
        $('.test').toggleClass("lights-on lights-off"); //you can list several class names 
        $('#lights').toggleClass("active a");
    });


    var elem1 = $("<input/>", {
        type: "text",
        name: "teamName[]",
        value: "Yes"
    });
    var elem2 = $("<input/>", {
        type: "text",
        name: "teamName[]",
        value: "No"
    });

    var removeLink1 = $("<span/>", { class: "closeinput" }).html("X").click(function() {
        var index = $(this).index('.closeinput');
        $('.test .kawaii-button.button-added').eq(index).remove();
        $(elem1).remove();
        $(this).remove();
        $('#ttt').html($(".closeinput").length);
    });
    var removeLink2 = $("<span/>", { class: "closeinput" }).html("X").click(function() {
        var index = $(this).index('.closeinput');
        $('.test .kawaii-button.button-added').eq(index).remove();
        $(elem2).remove();
        $(this).remove();
        $('#ttt').html($(".closeinput").length);
    });

    $("#inputs").append(elem1).append(removeLink1);
    $("#inputs").append(elem2).append(removeLink2);
    $('#ttt').html($(".closeinput").length);


    $("#addNewButton").click(function() {
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
            "Omae wa mou shindeiru"
        ];
        var randBtn = btn[Math.floor(Math.random() * btn.length)];
        var elem = $("<input/>", {
            type: "text",
            name: "teamName[]",
            value: randBtn
        });
        var removeLink = $("<span/>", { class: "closeinput" }).html("X").click(function() {
            var index = $(this).index('.closeinput');
            $('.test .kawaii-button.button-added').eq(index).remove();
            $(elem).remove();
            $(this).remove();
            $('#ttt').html($(".closeinput").length);
        });
        $('.test .kawaii-button-box').append('<button class="kawaii-button button-added">' + randBtn + '</button>');


        $("#inputs").append(elem).append(removeLink);
        $('#ttt').html($(".closeinput").length);

    });
    $("#inputs").on("keyup", "input", function() {
        var btnVal = $(this).val();
        var index = $(this).index('input');
        // alert(index);
        $('.test .kawaii-button').eq(index).text(btnVal);
    });
    $("#inputs").on("keyup", "input", function() {
        var btnVal = $(this).val();
        var index = $(this).index('#inputs input');
        // alert(index);
        $('.test .kawaii-button').eq(index).text(btnVal);
    });
    $("#window-input").on("keyup", function() { $('#window-title').text($(this).val()); });
    $("#heading-input").on("keyup", function() { $('#heading').text($(this).val()); });
    $("#msg-input").on("keyup", function() { $('.message-content').text($(this).val()); });



});



    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("loader1").style.display = "block";
        document.getElementById('generated-image').innerHTML = '';
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("loader1").style.display = "block";
        }
    }

var source = "StillAwakeLofiStudyMusic.mp3";
var audio = new Audio();
audio.src = source;
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

$("#music-option").hover(function() {
    $("#music-controls").slideToggle();
    $("#share-controls").slideUp();
});
$("#share-option").hover(function() {
    $("#share-controls").slideToggle();
    $("#music-controls").slideUp();

});


$("#amazingbtn").click(function() {

    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    var node = document.getElementById('kawaii-window-save');
    var scale = 3;
    var style = {
        transform: 'scale(' + scale + ')',
        transformOrigin: 'top left',
        width: node.offsetWidth + "px",
        height: node.offsetHeight + "px"
    }
    var param = {
        height: node.offsetHeight * scale,
        width: node.offsetWidth * scale,
        quality: 1,
        style
    }

    domtoimage.toPng(node, param)

        .then(function(dataUrl) {
            var img = new Image();
            img.src = dataUrl;

            document.getElementById('generated-image').innerHTML = '';
            setTimeout(function() { $('#loader1').fadeOut('fast'); }, 1000);
            setTimeout(function() { document.getElementById('generated-image').appendChild(img); }, 1000);

            var link = document.createElement('a');
            link.download = 'kawaii-window.png';
            link.href = dataUrl;
            link.innerText = "Download PNG";
            setTimeout(function() { document.getElementById('generated-image').appendChild(link); }, 1000);
        })
        .catch(function(error) {
            console.error('oops, something went wrong!', error);
        });

});

$("#amazingbtn2").click(function() {

    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    var node = document.getElementById('kawaii-window-save');
    var scale = 3;
    var style = {
        transform: 'scale(' + scale + ')',
        transformOrigin: 'top left',
        width: node.offsetWidth + "px",
        height: node.offsetHeight + "px"
    }
    var param = {
        height: node.offsetHeight * scale,
        width: node.offsetWidth * scale,
        quality: 1,
        style
    }

    function filter(node) {
        return (node.tagName !== 'i');
    }

    domtoimage.toSvg(node, { filter: filter })
        .then(function(dataUrl) {
            var img = new Image();
            img.src = dataUrl;

            document.getElementById('generated-image').innerHTML = '';
            setTimeout(function() { $('#loader1').fadeOut('fast'); }, 1000);
            setTimeout(function() { document.getElementById('generated-image').appendChild(img); }, 1000);

            var link = document.createElement('a');
            link.download = 'kawaii-window.svg';
            link.href = dataUrl;
            link.innerText = "Download SVG";
            setTimeout(function() { document.getElementById('generated-image').appendChild(link); }, 1000);
        })
        .catch(function(error) {
            console.error('oops, something went wrong!', error);
        });
});