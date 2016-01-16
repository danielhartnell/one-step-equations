function showDiv() {
  if (document.getElementById("hide-div") !== null) {
    document.getElementById("hide-div").setAttribute("id", "show-div");
  }
  else {
    document.getElementById("show-div").setAttribute("id", "hide-div");
  }
  
  for (i = 0; i < 5; i++) {
    var rand = Math.floor(Math.random() * (100 - 0)) + 0;
    var rand2 = Math.floor(Math.random() * (100 - rand)) + rand;
    document.getElementById("show-div").innerHTML += rand + " + x = " + rand2 + "<br/>";
  }
}
