var colors = []; 
var boxes = document.querySelectorAll(".boxes");
var heading = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var colorDisplay = document.querySelector("#colorDisplay");
var realColor;
var i;

setBoxes();



//Clicking on boxes
for(i=0; i<6; i++){
	boxes[i].addEventListener('click', function(){
		//if it is real color
		if(this.style.background === realColor){
			heading.style.background = realColor;
			message.textContent = "Correct";
			reset.textContent = "Play Again?";
			for(i=0; i<6; i++){
				boxes[i].style.background = realColor;
			}
		}
		else{
			this.style.background = "#232323"; 
			message.textContent = "Try Again";
		}
		
	})
}

reset.addEventListener('click', function(){
	reset.textContent = "New Colors";
	message.textContent = "";
	heading.style.background = "steelblue";
	colors = [];
	setBoxes();
})


function setBoxes(){
	for(i=0; i<6; i++){
		colors.push(setColor());
	}
	realColor = colors[Math.floor(Math.random()*6)];
	colorDisplay.textContent = realColor;

	//Providing color to boxes
	for(i=0; i<6; i++){
		boxes[i].style.background = colors[i] ;
	}
}


function setColor(){
	
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g +", " + b + ")" ;
}
