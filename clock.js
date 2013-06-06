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
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function updateTime() {
	var now = new Date();
	var date = now.getDate().toString();
	var month = (now.getMonth()+1).toString();
	var shortYear = now.getYear().toString();
	shortYear = shortYear.substr(shortYear.length-2, shortYear.length);
	
	if (date.length == 1) {
		date = "0" + date;
	}
	if (month.length == 1) {
		month = "0" + month;
	}
	
	document.getElementById("time").innerHTML = getPrettyDate(now);
	document.getElementById("meridian").innerHTML = determineMeridian(now);
	document.getElementById("day").innerHTML = dow[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
	document.getElementById("short").innerHTML = date + "/" + month + "/" + shortYear;
}

function load() {
	setInterval(updateTime, 1000);
	updateTime();
}

var MOUSE_HIDDEN = false;

function hideMouse() {

	//MOUSE_HIDDEN = true;
	if (MOUSE_HIDDEN && document.body != null) {
		document.body.className = "nocursor";
	}

}

var lastX = "Hi";
var lastY = "Hi";
window.onmousemove = function(ev) {
	//doBadStuffSoThatICanCatchAnException();
	if (ev.x == lastX && ev.y == lastY) {
		lastX = ev.x;
		lastY = ev.y;
		return;
	}
	if (MOUSE_HIDDEN) {
		MOUSE_HIDDEN = false;
		document.body.className = "";
		setTimeout(function() {
			MOUSE_HIDDEN = true;
			hideMouse()
		}, 5000);
	}
	lastX = ev.x;
	lastY = ev.y;
}
MOUSE_HIDDEN = true;
hideMouse();