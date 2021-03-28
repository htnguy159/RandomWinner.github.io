// Declare variables
var button = document.getElementById("button");
var addName = document.getElementById("addName");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var before = document.getElementById("before");
var pplList = document.getElementById("pplList");
let names = [];
let pics = ["banner.png", "background.jpg", "a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg"];


const banners = document.getElementById("banners");
banners.addEventListener("click", changeColor);

function changeColor(key){

	// if (banners.src = "./banner.png"){
	// 	banners.src="./background.jpg";
	// }
	// else{
	// 	banners.src = "./banner.png";
	// }
	//banners.src="../newImgSrc.jpg";
	var rando = pics[Math.floor(Math.random()*pics.length)];
	banners.src = rando; 
}


const addNames = (ev)=>{
	ev.preventDefault();
	if (input.value.length<1){
		alert("Empty submission! Please include name.");
	}
	else{
		let name = input.value;
		// Add to array names
		names.push(name);
		// Clear for other names
		document.querySelector('form').reset();

		console.log('Added', {names});

		// Local Storage
		localStorage.setItem("namesList", names); 
		console.log(JSON.parse(localStorage.getItem("namesList")));
	}
}

// Submit Name button clicked
addName.addEventListener("click", addNames);




// Select Winner button clicked
button.addEventListener("click", function() {
  
  if (names == ""){
  	pplList.innerText = "No one was listed"
  }
  // Remove placeholder and replace with answer
  else{
  	pplList.innerText = names;
  	before.innerText = "";
  	var rando = names[Math.floor(Math.random()*names.length)];
  	answer.innerText = rando;
  }

  
});