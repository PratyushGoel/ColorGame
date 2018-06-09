var colors = []; 
var boxes = document.querySelectorAll(".boxes");
var mode = document.querySelectorAll(".mode");
var heading = document.querySelector("h1");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var colorDisplay = document.querySelector("#colorDisplay");
var realColor;
var i;
var n=6;

setBoxes();

for(i=0; i<2; i++){
	mode[i].addEventListener('click', function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? n = 3: n = 6;
		setBoxes();
	})
}


//Clicking on boxes
for(i=0; i<n; i++){
	boxes[i].addEventListener('click', function(){
		//if it is real color
		if(this.style.background === realColor){
			heading.style.background = realColor;
			message.textContent = "Correct";
			reset.textContent = "Play Again?";
			for(i=0; i<n; i++){
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
	colors = [];
	for(i=0; i<n; i++){
		colors[i] = setColor();
	}
	realColor = colors[Math.floor(Math.random()*n)];
	colorDisplay.textContent = realColor;

	//Providing color to boxes
	for(i=0; i<6; i++){
		if(colors[i]){
			boxes[i].style.display = "block";
			boxes[i].style.background = colors[i] ;
		} 
		else{
			boxes[i].style.display = "none";
		}
	}
}


function setColor(){
	
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g +", " + b + ")" ;
}
