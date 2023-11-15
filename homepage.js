function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("sideBtn").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("sideBtn").style.marginLeft= "0";
}

function myFunction() {
  location.href = "./Event/eventpage.html";
}

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

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function genReview() {
  var randNum = Math.floor(Math.random() * 4) + 1;
  document.getElementById('review').innerHTML = quotes[randNum];
}

//review array
var quotes = ["Blank",
"\"The hotel was simple amazing and I couldn't thank Travel Buddy more for helping out. I've been a customer for awhile and I have to say it's probably my favourite web!\"<br>-  Rahim from Terengganu",
"\"Looks exactly what is posted here in Travel Buddy. Great service!\"<br> - John Malik from Kedah",
"\"I could not have asked for a better stay than Lexis Hibiscus. Thanks to Travel Buddy.\"<br>- Mark Lee from Sarawak",
"\"Had an excellent recommendations!\"<br>- Mutusami from KL",];
