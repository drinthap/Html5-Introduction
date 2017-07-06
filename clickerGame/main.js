var cubes = 0;
var clickPower = 1;
var pixels = 0;
const PIXELPOWER = 0.5;
function cubeClick(number){
	cubes += number*clickPower;
	document.getElementById("cubes").innerHTML = Math.floor(cubes);
};
function autoCubeClick(number){
	cubes += number;
	document.getElementById("cubes").innerHTML = Math.floor(cubes);
};
function buyClickUpgrade(){
	var upgradeCost = Math.floor(10 * Math.pow(1.5,clickPower-1));
	if(cubes >= upgradeCost){
		clickPower++;
		cubes -= upgradeCost;
		document.getElementById("cubes").innerHTML = Math.floor(cubes); //adjusts the current cube amount
		document.getElementById("currentClickPower").innerHTML = clickPower; //adjusts the current clickPower
		var nextCost = Math.floor(10 * Math.pow(1.5,clickPower-1)); //works out the cost of the next Click Upgrade
		document.getElementById("clickUpgradeCost").innerHTML = nextCost;  //updates the cursor cost for the user
	}
};

function buyPixelUpgrade(){
	var upgradeCost = Math.floor(10 * Math.pow(1.3,pixels));
	if(cubes >= upgradeCost){
		pixels++;
		cubes -= upgradeCost;
		document.getElementById("cubes").innerHTML = Math.floor(cubes); //adjusts the current cube amount
		document.getElementById("currentPixels").innerHTML = pixels; //adjusts the current pixel amount
		var nextCost = Math.floor(10 * Math.pow(1.3,pixels)); //works out the cost of the next Pixel Upgrade
		document.getElementById("pixelUpgradeCost").innerHTML = nextCost;  //updates the cursor cost for the user
		document.getElementById("currentPixelPower").innerHTML = PIXELPOWER*pixels; //informs the user of their cubes/sec
	}
};

//this function() will run every 1000 ms
window.setInterval(function(){
	autoCubeClick(PIXELPOWER*pixels); //uses pixels to gain cubes/sec
	console.log(cubes);
}, 1000);