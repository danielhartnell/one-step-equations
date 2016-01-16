function showDiv() {
  // Set variables
  var hide = document.getElementById("hide-div");
  var show = document.getElementById("show-div");

  // Change div ID so content is no longer hidden
  if (hide !== null) {
    hide.setAttribute("id", "show-div");
    showEquations()
  }
  else {
    show.setAttribute("id", "hide-div");
  }
}

function hideDiv() {
  // Hide div
  var show = document.getElementById("show-div");

  if (show !== null) {
    show.setAttribute("id", "hide-div");
  }
}

function showEquations() {
  // Find primary action
  var mathActionSelect = document.getElementById("math-action");
  var userAction = mathActionSelect.options[mathActionSelect.selectedIndex].value;

  // Determine number of equations
  var numberOfResults = document.getElementById("number-of-equations").value;
  var show = document.getElementById("show-div");

  show.innerHTML = ""

  if (userAction === "One Step Equations") {
    if (isNaN(parseInt(numberOfResults))) {
      numberOfResults = 10;
    }
    show.innerHTML += "Generating " + parseInt(numberOfResults) + " one step equations.";
    show.innerHTML += "<br/><br/>";
    
    for (i = 0; i < parseInt(numberOfResults); i++) {
      var rand1 = Math.floor((Math.random() * 100) + 0);
      var rand2 = Math.floor((Math.random() * 100) + 0);
      var operands = ['+', '-', '*', '/'];
      var random_operand = operands[Math.floor(Math.random() * operands.length)];
      show.innerHTML += rand1 + " " + random_operand + " x = " + rand2 + "<br/>";
    }
  }
  else {
    // Flashcards
    show.innerHTML += "Here are some flashcards.";
  }
}
