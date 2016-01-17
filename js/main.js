$(document).ready(function() {
  $("#get-worksheets").click(function() {
    $("#no-worksheets").hide();
    $("#yes-worksheets").show();
    worksheetHeader();
    worksheetEquations();
  });
});

function worksheetHeader() {
  $("#yes-worksheets").append("One-step equations worksheet<br/>");
  $("#yes-worksheets").append("<b>Solve each equation.</b><br/><br/>");
  $("#yes-worksheets").append("Name___________________________________<br/>");
  $("#yes-worksheets").append("Date________________ Period____<br/><br/>");
};

function worksheetEquations() {
  for (i = 0; i < 10; i++) {
    $("#yes-worksheets").append(i + ") " + "2 + x = 15<br/>");
  }
};
