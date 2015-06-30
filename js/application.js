// JavaScript Document
$(document).ready(function(){
	setInterval(function(){ cambiarFondo(); }, 4000);
});

function cambiarFondo() {
	$('body').css('background-color', color_gen());
};

function color_gen(){
	red = Math.floor((Math.random() * 255));
	blue = Math.floor((Math.random() * 255));
	green = Math.floor((Math.random() * 255));
	color = 'rgb('+red+','+green+','+blue+')';
	
	return color;
}