
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBezOJTKCb5H_4RBgvK_7LqJEX8oOOe5i4",
    authDomain: "whatever-you-want-c8f08.firebaseapp.com",
    databaseURL: "https://whatever-you-want-c8f08.firebaseio.com",
    projectId: "whatever-you-want-c8f08",
    storageBucket: "whatever-you-want-c8f08.appspot.com",
    messagingSenderId: "924332439978"
  };
  firebase.initializeApp(config);
var database = firebase.database();

var employeeName;
var role
var startDate
var monthlyRate

$("#run-submit").click(function() {
  event.preventDefault();
  employeeName = $("#employee-name").val().trim();
  role = $("#role").val().trim();
  startDate = $("#start-date").val().trim();
  monthlyRate = $("#monthly-rate").val().trim();
  database.ref().push({
    name: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
  })
  var user = {
    name: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate,
  }
  console.log(user)
})
    database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      $("#employee-table > tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().starDate + "</td><td>" + 0 + "</td><td>" + childSnapshot.val().monthlyRate + "</td><td>" + 0 + "</td></tr>");

    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
