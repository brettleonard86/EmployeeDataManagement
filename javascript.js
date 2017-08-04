var employeeName;
var role
var startDate
var monthlyRate

$("#run-submit").click(function(event) {
  event.preventDefault();
  employeeName = $("#employee-name").val().trim();
  role = $("#role").val().trim();
  startDate = $("start-date").val().trim();
  monthlyRate = $("#monthly-rate").val().trim();
  $("#employee-table  tbody").append("<tr>");

})