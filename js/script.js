// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

function checkNumber() {
  // Get the value from the input field and convert it to a number
  var age = parseInt(document.getElementById("user-number").value);
  var message = "";

  if (age >= 17) {
    message = "You can see an R movie alone.";
  } else if (age >= 13) {
    message = "You can see a PG-13 movie alone.";
  } else if (age >= 5) {
    message = "You can see a G or a PG movie alone.";
  } else if (!isNaN(age)) {
    message = "Uh, you're too young for most things.";
  } else {
    message = "Please enter a valid age.";
  }

  document.getElementById("result").innerText = message;
}
