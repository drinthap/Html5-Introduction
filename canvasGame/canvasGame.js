var canvas = null;
var context = null;
var img = null;

onImageLoad = function(){
	console.log("IMAGE!!!");
	context.drawImage(img, 192, 192);
};

function setup(){
	canvas = document.getElementById("my_canvas");
	context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	
	img = new Image(); //declare a new image
	img.onload = onImageLoad; //set the onload function for the image
	img.src = "images/girlSprite.png"; //declare the image's source
};

setup();