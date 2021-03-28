// variables

var button = document.getElementById("button");
var addName = document.querySelector("addName");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var placeholder = document.getElementById("placeholder");






// Select button clicked
button.addEventListener("click", function() {
  // Remove placeholder and replace with answer
  placeholder.innerText = "";
  answer.innerText = "dummyAnswer";
});