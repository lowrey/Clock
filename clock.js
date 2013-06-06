function getPrettyDate(date) {
	var hrs = date.getHours();
	var min = date.getMinutes().toString();
	var sec = date.getSeconds().toString();
	
	if (hrs > 12) {
		hrs = hrs - 12;
	}
	if (min.length == 1) {
		min = "0" + min;
	}
	if (sec.length == 1) {
		sec = "0" + sec;
	}
	
	return hrs + ":" + min + ":" + sec;
}

function determineMeridian(date) {
	var hrs = date.getHours();
	if (hrs > 12) {
		return "PM"
	}
	else return "AM"
}

var dow = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function updateTime() {
	var now = new Date();
	var date = now.getDate().toString();
	var month = (now.getMonth()+1).toString();
	
	if (date.length == 1) {
		date = "0" + date;
	}
	if (month.length == 1) {
		month = "0" + month;
	}
	
	document.getElementById("time").innerHTML = getPrettyDate(now);
	document.getElementById("meridian").innerHTML = determineMeridian(now);
	document.getElementById("day").innerHTML = dow[now.getDay()] + ", " + date + "/" + month + "/" + now.getFullYear();
}

function load() {
	setInterval(updateTime, 1000);
	updateTime();
}

$(function () {
    var timer;
    var fadeInBuffer = false;
    $(document).mousemove(function () {
        if (!fadeInBuffer) {
            if (timer) {
                clearTimeout(timer);
                timer = 0;
            }
            $('.fade-object').fadeIn();
            $('html').css({
                cursor: ''
            });
        } else {
            fadeInBuffer = false;
        }


        timer = setTimeout(function () {
            $('.fade-object').fadeOut()
            $('html').css({
                cursor: 'none'
            });
            fadeInBuffer = true;
        }, 5000)
    });
});