var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var countryy = document.getElementById("country-text");

function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

$("#button2").click(function(f) {
  window.location.href
});

$("#island").click(function(e) {

  var month = parseInt($("#expmonth").val());
  var year = parseInt($("#expyear").val());
  var cvv = parseInt($("#cvv").val());
  var ccnum = parseInt($("#ccnum").val());
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);

  /*  if(
    typeof $("input[name='radio']:checked").val() === 'undefined'||
    $("#cname").val()==""||
    $("#ccnum").val()==""||
    $("#expmonth").val()==""||
    $("#expyear").val()==""||
    $("#cvv").val()==""||
    getlength(ccnum)!=16 ||
    month<=0 ||
    month>12 ||
    year<=0 ||
    getlength(year) >= 5 ||
    getlength(year) != 4 ||
    cvv<= 0 ||
    getlength(cvv) >= 4 ||
    getlength(cvv) != 3
    ){
      console.log("masuk if {");

      e.preventDefault();
      confirm("Please fill up all details correctly!");
    }

    else{
*/
  modal.style.display = "block";

  console.log("masuk else {");
  console.log("TourGuide: " + $("input[name='radio']:checked").val());
  console.log("cname: " + $("#cname").val());
  console.log("ccnum: " + $("#ccnum").val());
  console.log("expmonth: " + $("#expmonth").val());
  console.log("expyear: " + $("#expyear").val());
  console.log("cvv: " + $("#cvv").val());


  //}

});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
