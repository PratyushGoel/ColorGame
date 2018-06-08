var colors = ["red", "yellow", "blue", "green", "orange", "pink"] ;
var boxes = document.querySelectorAll(".boxes");
var realColor = colors[Math.floor(Math.random()*7)];
var i;





//Providing color to boxes
for(i=0; i<6; i++){
	boxes[i].style.background = colors[i] ;
}

//Clicking on boxes
for(i=0; i<6; i++){
	boxes[i].addEventListener('click', function(){
		//if it is real color
		if(this.style.background === realColor){
			console.log("You picked right Color");
		}
		
	})
}



