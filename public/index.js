var button = $(".toggle-theme button")
var circleIcon = $(".toggle-theme .fas")

circleIcon.click(() => {
  if (button.attr("value") === "light-mode") {
    // Change value and color of button
    button.attr("value", "dark-mode");
    button.css("background-color", "none");
    button.css("background-image", "linear-gradient(to right, #378fe6, #3eda82)")

    // Change position and color of circle icon
    circleIcon.css("float", "left");
    circleIcon.css("margin-left", "5%");
    circleIcon.css("color", "#252a41");

    //Change body background color
    $("body").css("background-color", "#1e202a")

    // Change header section background color
    $("header").css("background-color", "#1f212e")

    // Change card color
    $(".card").css("background-color", "#252a41");

    // Change header text color
    $("h1").css("color", "white");
    $("h2").css("color", "white");

    //Change p color
    $("p").css("color", "#8b97c6");
  } else if (button.attr("value") === "dark-mode") {
    button.attr("value", "light-mode");
    button.css("background-color", "#aeb3cb");
    button.css("background-image", "")

    circleIcon.css("float", "right");
    circleIcon.css("margin-right", "5%");
    circleIcon.css("color", "white");

    $("body").css("background-color", "white");
    $("header").css("background-color", "#f5f7ff");
    $(".card").css("background-color", "#f0f2fa");
    $("h1").css("color", "#1e202a");
    $("h2").css("color", "#1e202a");
    $("p").css("color", "#63687e");
  }
});
