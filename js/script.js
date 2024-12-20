/*
Theme button
Source: https://lukelowrey.com/css-variable-theme-switcher
*/

/* Retrieve the value stored in "theme" or the device's theme and assign the value to the variable "themeStorage" */
var themeStorage =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

/*
If there is a value in the variable "themeStorage",
    Assign the value to the "data-theme" attribute of the html tag
*/
if (themeStorage) {
  document.documentElement.setAttribute("data-theme", themeStorage);
  console.log("Theme: " + themeStorage);

  if (themeStorage === "light") {
    document.getElementById("themeButton").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      "<title>weather-sunny</title>" +
      '<path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"' +
      'fill="var(--md-sys-color-on-primary-container)" /></svg>';
  } else {
    document.getElementById("themeButton").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      "<title>weather-night</title>" +
      '<path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"' +
      'fill="var(--md-sys-color-on-primary-container)" /></svg>';
  }
}

/*
If "themeButton" is clicked,
    Assign the value of the "data-theme" attribute of the html tag to the variable "currentTheme"
    Assign the value "light" to the variable "targetTheme"

    If the value of the variable "currentTheme" is equal to "light",
        Assign the value "dark" to the variable "targetTheme"

    Assign the value of the variable "targetTheme" to the "data-theme" attribute of the html tag
    Store the value of the variable "targetTheme" in "theme"
*/
document.getElementById("themeButton").onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
    document.getElementById("themeButton").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      "<title>weather-night</title>" +
      '<path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"' +
      'fill="var(--md-sys-color-on-primary-container)" /></svg>';
  } else {
    document.getElementById("themeButton").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      "<title>weather-sunny</title>" +
      '<path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"' +
      'fill="var(--md-sys-color-on-primary-container)" /></svg>';
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
  console.log("Theme: " + targetTheme);
};

/* Color button */

/* Retrieve the value stored in "currentColors" and assign it to the variable "storedColors" */
var storedColors = localStorage.getItem("currentColors");

/*
If there is a value in the variable "storedColors" that matches one of the colors and the variable "colorBlind" has a value,
    Replace the CSS in the "span-colors" div with the selected color and based on the value of the variable "colorBlind"
    Set "stateStorage" to the next color
    Set "currentState" to the current color
Else
    Replace the CSS in the "span-colors" div with the color "cyan" and based on the value of the variable "colorBlind"
    Set "stateStorage" to the next color
    Set "currentState" to the current color
*/
function colors() {
  var colorBlind = localStorage.getItem("currentState");

  if (storedColors == "orange" && colorBlind == "true") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/colorBlind/orange_light_hc.css">' +
      '<link rel="stylesheet" href="../css/colors/colorBlind/orange_dark_hc.css">';
    localStorage.setItem("storedColors", "cyan");
    localStorage.setItem("currentColors", "orange");
  } else if (storedColors == "orange" && colorBlind == "false") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/orange_light.css">' +
      '<link rel="stylesheet" href="../css/colors/orange_dark.css">';
    localStorage.setItem("storedColors", "cyan");
    localStorage.setItem("currentColors", "orange");
  } else if (storedColors == "cyan" && colorBlind == "true") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/colorBlind/cyan_light_hc.css">' +
      '<link rel="stylesheet" href="../css/colors/colorBlind/cyan_dark_hc.css">';
    localStorage.setItem("storedColors", "green");
    localStorage.setItem("currentColors", "cyan");
  } else if (storedColors == "cyan" && colorBlind == "false") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/cyan_light.css">' +
      '<link rel="stylesheet" href="../css/colors/cyan_dark.css">';
    localStorage.setItem("storedColors", "green");
    localStorage.setItem("currentColors", "cyan");
  } else if (storedColors == "green" && colorBlind == "true") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/colorBlind/green_light_hc.css">' +
      '<link rel="stylesheet" href="../css/colors/colorBlind/green_dark_hc.css">';
    localStorage.setItem("storedColors", "indigo");
    localStorage.setItem("currentColors", "green");
  } else if (storedColors == "green" && colorBlind == "false") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/green_light.css">' +
      '<link rel="stylesheet" href="../css/colors/green_dark.css">';
    localStorage.setItem("storedColors", "indigo");
    localStorage.setItem("currentColors", "green");
  } else if (storedColors == "indigo" && colorBlind == "true") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/colorBlind/indigo_light_hc.css">' +
      '<link rel="stylesheet" href="../css/colors/colorBlind/indigo_dark_hc.css">';
    localStorage.setItem("storedColors", "orange");
    localStorage.setItem("currentColors", "indigo");
  } else if (storedColors == "indigo" && colorBlind == "false") {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/indigo_light.css">' +
      '<link rel="stylesheet" href="../css/colors/indigo_dark.css">';
    localStorage.setItem("storedColors", "orange");
    localStorage.setItem("currentColors", "indigo");
  } else {
    document.getElementById("span-colors").innerHTML =
      '<link rel="stylesheet" href="../css/colors/cyan_light.css">' +
      '<link rel="stylesheet" href="../css/colors/cyan_dark.css">';
    localStorage.setItem("storedColors", "green");
    localStorage.setItem("currentColors", "cyan");
  }

  storedColors = localStorage.getItem("storedColors");

  console.log("Colors: " + localStorage.getItem("currentColors"));
}

/* Daltonian button */

/* Retrieve the value stored in "currentState" or default to "false" and assign it to the variable "stateStorage" */ var stateStorage =
  localStorage.getItem("currentState") || "false";

if (stateStorage) {
  colorBlind();
}

/*
If "stateStorage" has the value "true",
    Replace the SVG in the "colorBlindButton" div with the "eye" icon
    Set "stateStorage" to "true"
    Set "ecurrentState" to "false"
If "stateStorage" has the value "false",
    Replace the SVG in the "colorBlindButton" div with the "eye-off" icon
    Set "stateStorage" to "false"
    Set "currentState" to "true"
*/
function colorBlind() {
  if (stateStorage == "true") {
    document.getElementById("colorBlindButton").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      "<title>eye-off</title>" +
      '<path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"' +
      'fill="var(--md-sys-color-on-primary-container)" /></svg>';
    localStorage.setItem("stateStorage", "false");
    localStorage.setItem("currentState", "true");
  } else if (stateStorage == "false") {
    document.getElementById("colorBlindButton").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      "<title>eye</title>" +
      '<path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"' +
      'fill="var(--md-sys-color-on-primary-container)" /></svg>';
    localStorage.setItem("stateStorage", "true");
    localStorage.setItem("currentState", "false");
  }

  stateStorage = localStorage.getItem("stateStorage");

  console.log("Color Blind: " + localStorage.getItem("currentState"));

  storedColors = localStorage.getItem("currentColors");
  colors();
}

/* Language button */

/*
If the path name is equal to "/en/projects.html" or "/fr/projets.html"
    Display "../fr/projets.html"
Else
    Display "../fr/accueil.html"
*/
function fr() {
  if (
    window.location.pathname == "/en/projects.html" ||
    window.location.pathname == "/fr/projets.html"
  ) {
    window.location.href = "../fr/projets.html";
  } else {
    window.location.href = "../fr/accueil.html";
  }
}

/*
If the path name is equal to "/fr/projets.html" or "/en/projects.html"
    Display "../en/projects.html"
Else
    Display "../en/home.html"
*/
function en() {
  if (
    window.location.pathname == "/fr/projets.html" ||
    window.location.pathname == "/en/projects.html"
  ) {
    window.location.href = "../en/projects.html";
  } else {
    window.location.href = "../en/home.html";
  }
}
