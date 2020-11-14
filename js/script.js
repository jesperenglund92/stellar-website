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

var flinas = document.getElementById("ffirst");
flinas.addEventListener('click', function(){
    slidemodal(0, 1);
});
var blinas = document.getElementById("bfirst");
blinas.addEventListener('click', function(){
    slidemodal(0, 2);
});
var fbet = document.getElementById("fsecond");
fbet.addEventListener('click', function(){
    slidemodal(1, 2);
});
var bbet = document.getElementById("bsecond");
bbet.addEventListener('click', function(){
    slidemodal(1, 0);
});
var fbes = document.getElementById("fthird");
fbes.addEventListener('click', function(){
    slidemodal(2, 0);
});
var bbes = document.getElementById("bthird");
bbes.addEventListener('click', function(){
    slidemodal(2, 1);
});

function slidemodal(current, newmodal) {
  for (var i = 0; i < modalsLength; i++){
    if (modals[i].id == modals[current].id){
      modals[newmodal].style.display = "block";
      modals[i].style.display = "none";
    }
  }
}
