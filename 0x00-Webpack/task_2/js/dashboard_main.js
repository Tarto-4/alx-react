import $ from "jquery";
import _ from "lodash";
import "../css/main.css";
import logo from "../assets/holberton-logo.jpg";

$(document).ready(() => {
  // Add logo
  $("body").prepend('<div id="logo"></div>');
  $("#logo").css("background-image", `url(${logo})`);

  // Add content
  $("body").append("<p>ALX Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button id='clickButton'>Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("<p>Copyright - ALX</p>");

  let count = 0;

  function updateCounter() {
    count++;
    $("#count").text(`${count} clicks on the button`);
  }

  $("#clickButton").on("click", _.debounce(updateCounter, 300));
});
