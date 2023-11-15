var mybutton = document.getElementById("TopMenu");

    window.onscroll = function() {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;


// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});


// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();

// This section is for tabs changing
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


/*  -------- APPEND BY MERAN ------- */

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("island").addEventListener("click", myFunction);


function myFunction() {

  console.log("island clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("fishing").addEventListener("click", myFunction);


function myFunction() {

  console.log("fishing clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("hunting").addEventListener("click", myFunction);


function myFunction() {

  console.log("hunting clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("nature").addEventListener("click", myFunction);


function myFunction() {

  console.log("nature clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("tourism").addEventListener("click", myFunction);


function myFunction() {

  console.log("tourism clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("safari").addEventListener("click", myFunction);


function myFunction() {

  console.log("safari clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("hike").addEventListener("click", myFunction);


function myFunction() {

  console.log("hike clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("malacca").addEventListener("click", myFunction);


function myFunction() {

  console.log("malacca clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

document.getElementById("zoo").addEventListener("click", myFunction);


function myFunction() {

  console.log("zoo clicked");

  var month = parseInt(document.getElementById("expmonth").value);
  var year = parseInt(document.getElementById("expyear").value);
  var cvv = parseInt(document.getElementById("cvv").value);
  var ccnum = parseInt(document.getElementById("ccnum").value);
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);


  modal.style.display = "block";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
