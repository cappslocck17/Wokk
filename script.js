
function clock(){
	var date = new Date();


var b = date.getHours();

if(b<10){
	b = "0"+b;
}
var c = date.getMinutes();
if(c<10){
	c = "0"+c;
}
var d = date.getSeconds();
if(d<10){
	
	d = "0"+ d;
}

var a4 = b +': '+ c +': '+d;

var divTime = document.getElementById('chasu');
divTime.style.color = "red";

        divTime.innerHTML = a4;
}

setInterval(clock, 1000);

function showTime(){
	var date = new Date();
	var h = date.getHours();
	if(h < 10){
	h = "0" + h;};
	var m = date.getMinutes();
	if(m < 10){
	m = "0" + m;};
	var s = date.getSeconds();
	s = (s<10)?'0'+s:s;
	
	
	var time = h +':' + m +":"+ s;
	document.getElementById('MyClockDisplay').innerText = time;
	document.getElementById('MyClockDisplay').textContent = time;
	
}

setInterval(showTime, 1000);


$( function() {
    $( "#MyClockDisplay" ).draggable();
  } );
  





setInterval(function(){
  var date = new Date();
  updateTime(date);
  updateClock(date);
}, 1000);

function updateClock(date){
  var secHand = document.getElementById("sec-hand").style;
  var minHand = document.getElementById("min-hand").style;
  var hrHand = document.getElementById("hr-hand").style;
  
  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

function updateTime(date){
  var timeDiv = document.getElementById("time");
  var time = "Time for Reference --- " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
  timeDiv.innerHTML = time;
}



//slider

var slider = {
	slides:['1.jpg','2.jpg','3.jpg'],
	frame:0, // текущий кадр для отбражения - индекс картинки из массива
	set: function(image) { // установка нужного фона слайдеру
		document.getElementById("scr").style.backgroundImage = "url("+/images+")";
	},
	init: function() { // запуск слайдера с картинкой с нулевым индексом
		this.set(this.slides[this.frame]);
	},
	left: function() { // крутим на один кадр влево
		this.frame--;
		if(this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);
	},
	right: function() { // крутим на один кадр вправо
		this.frame++;
		if(this.frame == this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);		
	}
};
