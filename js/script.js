// js

  

// variable
var number1 = 1024;
var number2 = 1000;
var number3 = number1 + number2;

function calculation(){
	document.getElementById('value').innerHTML=number3;
}
// show/hide
function textShow(){
	document.getElementById('text').style.display='block'
}
function textHide(){
	document.getElementById('text').style.display='none'
}
// color change
function colorChange() {
	document.getElementById('c_c').style.color="red";
}
// bulb On/off
function bulbOn(){
	document.getElementById('bulb').src ='images/on.gif';
}
function bulbOff(){
		document.getElementById('bulb').src ='images/off.gif';
}

// Show Date
function showDate(){
	document.getElementById('s_d').innerHTML = Date();

}
// text change
function textChange(){

	document.getElementById('demo').innerHTML ="hello";
}

function myFunction() {
  document.getElementById("demo").innerHTML = "You pasted text!";
}



function myFunction() {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}


function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}


function myFunction() {
  document.getElementById("demo").innerHTML = "The video has ended";
}

function myFunction(this) {
  x.style.background = "green";
}

function myFunction(x) {
  x.style.background = "yellow";
}


// Code for Safari 3.1 to 6.0
document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction);

// Standard syntax
document.getElementById("myDIV").addEventListener("transitionend", myFunction);

function myFunction() {
  this.innerHTML = "transitionend event occured - The transition has completed";
  this.style.backgroundColor = "pink";
}


