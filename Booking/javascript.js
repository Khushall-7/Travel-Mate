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

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var bookingno = document.getElementById("bookingno-text");
var datenow = document.getElementById("datebook-text");
var countryy = document.getElementById("country-text");
var statee = document.getElementById("state-text");
var citiess = document.getElementById("cities-text");
var paxx = document.getElementById("pax-text");
var datee = document.getElementById("date-text");
var tourr = document.getElementById("tour-text");
var namacust = document.getElementById("name-text");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;


function getlength(number) {
    return number.toString().length;
}

span.onclick = function() {
  modal.style.display = "none";
}

$("#button2").click(function(f) {
  window.location.href
});

$("#button1").click(function(e) {

  var month = parseInt($("#expmonth").val());
  var year = parseInt($("#expyear").val());
  var cvv = parseInt($("#cvv").val());
  var ccnum = parseInt($("#ccnum").val());
  console.log("button clicked1");

  console.log("cvv length: "+ getlength(cvv));
  console.log("year: "+year);

    if($("#Country").val()==""||
    $("#State").val()==""||
    $("#Cities").val()==""||
    $("#Pax").val()==""||
    $("#Date").val()==""||
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

  modal.style.display = "block";

  console.log("masuk else {");
  console.log("country: " + $("#Country").val());
  console.log("State: " + $("#State").val());
  console.log("City: " + $("#Cities").val());
  console.log("Pax: " + $("#pax").val());
  console.log("Date: " + $("#birthday").val());
  console.log("TourGuide: " + $("input[name='radio']:checked").val());
  console.log("cname: " + $("#cname").val());
  console.log("ccnum: " + $("#ccnum").val());
  console.log("expmonth: " + $("#expmonth").val());
  console.log("expyear: " + $("#expyear").val());
  console.log("cvv: " + $("#cvv").val());



  bookingno.textContent = "B012K";
  datenow.textContent = today;

  countryy.textContent = $("#Country").val();
  statee.textContent = $("#State").val();
  citiess.textContent = $("#Cities").val();
  paxx.textContent = $("#pax").val();
  datee.textContent = $("#birthday").val();
  tourr.textContent = $("input[name='radio']:checked").val();
  namacust.textContent = $("#cname").val();

  }

});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var subjectObject = {
  "Malaysia": {
    "Johor": [
      "Johor Bahru",
      "Tebrau",
      "Pasir Gudang",
      "Bukit Indah",
      "Skudai",
      "Kluang",
      "Batu Pahat",
      "Muar",
      "Ulu Tiram",
      "Senai",
      "Segamat",
      "Kulai",
      "Kota Tinggi",
      "Pontian Kechil",
      "Tangkak",
      "Bukit Bakri",
      "Yong Peng",
      "Pekan Nenas",
      "Labis",
      "Mersing",
      "Simpang Renggam",
      "Parit Raja",
      "Kelapa Sawit",
      "Buloh Kasap",
      "Chaah"
    ],
    "Kedah": [
      "Sungai Petani",
      "Alor Setar",
      "Kulim",
      "Jitra / Kubang Pasu",
      "Baling",
      "Pendang",
      "Langkawi",
      "Yan",
      "Sik",
      "Kuala Nerang",
      "Pokok Sena",
      "Bandar Baharu"
    ],
    "Kelantan": [
      "Kota Bharu",
      "Pangkal Kalong",
      "Tanah Merah",
      "Peringat",
      "Wakaf Baru",
      "Kadok",
      "Pasir Mas",
      "Gua Musang",
      "Kuala Krai",
      "Tumpat"
    ],
    "Melaka": [
      "Bandaraya Melaka",
      "Bukit Baru",
      "Ayer Keroh",
      "Klebang",
      "Masjid Tanah",
      "Sungai Udang",
      "Batu Berendam",
      "Alor Gajah",
      "Bukit Rambai",
      "Ayer Molek",
      "Bemban",
      "Kuala Sungai Baru",
      "Pulau Sebang"
    ],
    "Negeri Sembilan": [
      "Seremban",
      "Port Dickson",
      "Nilai",
      "Bahau",
      "Tampin",
      "Kuala Pilah"
    ],
    "Pahang": [
      "Kuantan",
      "Temerloh",
      "Bentong",
      "Mentakab",
      "Raub",
      "Jerantut",
      "Pekan",
      "Kuala Lipis",
      "Bandar Jengka",
      "Bukit Tinggi"
    ],
    "Perak": [
      "Ipoh",
      "Taiping",
      "Sitiawan",
      "Simpang Empat",
      "Teluk Intan",
      "Batu Gajah",
      "Lumut",
      "Kampung Koh",
      "Kuala Kangsar",
      "Sungai Siput Utara",
      "Tapah",
      "Bidor",
      "Parit Buntar",
      "Ayer Tawar",
      "Bagan Serai",
      "Tanjung Malim",
      "Lawan Kuda Baharu",
      "Pantai Remis",
      "Kampar"
    ],
    "Perlis": [
      "Kangar",
      "Kuala Perlis"
    ],
    "Pulau Pinang": [
      "Bukit Mertajam",
      "Georgetown",
      "Sungai Ara",
      "Gelugor",
      "Ayer Itam",
      "Butterworth",
      "Val d’Or",
      "Perai",
      "Nibong Tebal",
      "Permatang Kucing",
      "Tanjung Tokong",
      "Kepala Batas",
      "Tanjung Bungah",
      "Juru"
    ],
    "Sabah": [
      "Kota Kinabalu",
      "Sandakan",
      "Tawau",
      "Lahad Datu",
      "Keningau",
      "Putatan",
      "Donggongon",
      "Semporna",
      "Kudat",
      "Kunak",
      "Papar",
      "Ranau",
      "Beaufort",
      "Kinarut",
      "Kota Belud"
    ],
    "Sarawak": [
      "Kuching",
      "Miri",
      "Sibu",
      "Bintulu",
      "Limbang",
      "Sarikei",
      "Sri Aman",
      "Kapit",
      "Batu Delapan Bazaar",
      "Kota Samarahan"
    ],
    "Selangor": [
      "Subang Jaya",
      "Klang",
      "Ampang Jaya",
      "Shah Alam",
      "Petaling Jaya",
      "Cheras",
      "Kajang",
      "Selayang Baru",
      "Rawang",
      "Taman Greenwood",
      "Semenyih",
      "Banting",
      "Balakong",
      "Gombak Setia",
      "Kuala Selangor",
      "Serendah",
      "Bukit Beruntung",
      "Pengkalan Kundang",
      "Jenjarom",
      "Sungai Besar",
      "Batu Arang",
      "Tanjung Sepat",
      "Kuang",
      "Kuala Kubu Baharu",
      "Batang Berjuntai",
      "Bandar Baru Salak Tinggi",
      "Sekinchan",
      "Sabak",
      "Tanjung Karang",
      "Beranang",
      "Sungai Pelek"
    ],
    "Terengganu": [
      "Kuala Terengganu",
      "Chukai",
      "Dungun",
      "Kerteh",
      "Kuala Berang",
      "Marang",
      "Paka",
      "Jerteh"
    ],
    "Wilayah Persekutuan": [
      "Kuala Lumpur",
      "Labuan",
      "Putrajaya"
    ]
  }
}


window.onload = function() {
  var malaysia = new google.maps.LatLng(4.1093195, 109.45547499999998);
  var WP = new google.maps.LatLng(3.13192,101.684059);
  var TG = new google.maps.LatLng(5.3302,103.1408);
  var SL = new google.maps.LatLng(3.509247,101.524803);
  var SR = new google.maps.LatLng(1.553110,110.345032);
  var SA = new google.maps.LatLng(5.420404,116.796783);
  var PP = new google.maps.LatLng(5.285153,100.456238);
  var PL = new google.maps.LatLng(6.443589,100.216599);
  var PR = new google.maps.LatLng(4.693950,101.117577);
  var PH = new google.maps.LatLng(3.974341,102.438057);
  var NS = new google.maps.LatLng(2.731813,102.252502);
  var ML = new google.maps.LatLng(2.200844,102.240143);
  var KL = new google.maps.LatLng(6.125397,102.238068);
  var KE = new google.maps.LatLng(6.155672,100.569649);
  var JO = new google.maps.LatLng(1.527549,103.745476);

  var countrySel = document.getElementById("Country");
  var StateSel = document.getElementById("State");
  var CitySel = document.getElementById("Cities");
  var cityy = document.querySelector('#city-chose');
  var statee = document.querySelector('#state-chose');

  map = new google.maps.Map(document.getElementById("map"), {
    center: malaysia,
    zoom: 4
  });


  CitySel.addEventListener('change', (event) => {
    cityy.textContent = $("#Cities").val();
    statee.textContent = $("#State").val();
});

  StateSel.addEventListener('change', (event) => {

    switch ($("#State").val()) {
      case "Wilayah Persekutuan": {
        map = new google.maps.Map(document.getElementById("map"), {
          center: WP,
          zoom: 8
        });
        marker = new google.maps.Marker({
          map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: WP,
        });
      }
      break;

    case "Terengganu": {
      map = new google.maps.Map(document.getElementById("map"), {
        center: TG,
        zoom: 8
      });
      marker = new google.maps.Marker({
        map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: TG,
      });
    }
    break;

    case "Selangor": {
      map = new google.maps.Map(document.getElementById("map"), {
        center: SL,
        zoom: 8
      });
      marker = new google.maps.Marker({
        map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: SL,
      });
    }
    break;

    case "Johor": {
      map = new google.maps.Map(document.getElementById("map"), {
        center: JO,
        zoom: 8
      });
      marker = new google.maps.Marker({
        map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: JO,
      });
    }
    break;


  case "Kedah": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: KE,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: KE,
    });
  }
  break;



  case "Kelantan": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: KL,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: KL,
    });
  }
  break;


  case "Melaka": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: ML,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: ML,
    });
  }
  break;


  case "Negeri Sembilan": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: NS,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: NS,
    });
  }
  break;


  case "Pahang": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: PH,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: PH,
    });
  }
  break;



  case "Perak": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: PR,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: PR,
    });
  }
  break;



  case "Perlis": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: PL,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: PL,
    });
  }
  break;


  case "Pulau Pinang": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: PP,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: PP,
    });
  }
  break;


  case "Sabah": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: SA,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: SA,
    });
  }
  break;


  case "Sarawak": {
    map = new google.maps.Map(document.getElementById("map"), {
      center: SR,
      zoom: 8
    });
    marker = new google.maps.Marker({
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: SR,
    });
  }
  break;





    }




  });


  for (var x in subjectObject) {
    countrySel.options[countrySel.options.length] = new Option(x, x);
  }
  countrySel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    CitySel.length = 1;
    StateSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      StateSel.options[StateSel.options.length] = new Option(y, y);
    }
  }

  StateSel.onchange = function() {
    //empty Chapters dropdown
    CitySel.length = 1;
    //display correct values
    var z = subjectObject[countrySel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      CitySel.options[CitySel.options.length] = new Option(z[i], z[i]);
    }
  }

  
}
