var myIndex = 0;
//carousel();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modals = document.getElementsByClassName("w3-modal");
var modalsLength = modals.length;
window.onclick = function(event) {
  for (var i = 0; i < modalsLength; i++){
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}

var ffirst = document.getElementById("ffirst");
ffirst.addEventListener('click', function(){
    slidemodal(0, 1);
});
var bfirst = document.getElementById("bfirst");
bfirst.addEventListener('click', function(){
    slidemodal(0, 3);
});
var fsecond = document.getElementById("fsecond");
fsecond.addEventListener('click', function(){
    slidemodal(1, 2);
});
var bsecond = document.getElementById("bsecond");
bsecond.addEventListener('click', function(){
    slidemodal(1, 0);
});
var fthird = document.getElementById("fthird");
fthird.addEventListener('click', function(){
    slidemodal(2, 3);
});
var bthird = document.getElementById("bthird");
bthird.addEventListener('click', function(){
    slidemodal(2, 1);
});
var ffourth = document.getElementById("ffourth");
ffourth.addEventListener('click', function(){
    slidemodal(3, 0);
});
var bfourth = document.getElementById("bfourth");
bfourth.addEventListener('click', function(){
    slidemodal(3, 2);
});

function slidemodal(current, newmodal) {
  for (var i = 0; i < modalsLength; i++){
    if (modals[i].id == modals[current].id){
      modals[newmodal].style.display = "block";
      modals[i].style.display = "none";
    }
  }
}
