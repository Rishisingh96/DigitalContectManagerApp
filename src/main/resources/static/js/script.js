console.log("Script loaded");

// change theme work
let currentTheme = getTheme();
//initial -->

document.addEventListener("DOMContentLoaded", () => {
  changeTheme();
});

//TODO:
function changeTheme() {
  //set to web page

  changePageTheme(currentTheme, "");
  //set the listener to change theme button
  const changeThemeButton = document.querySelector("#theme_change_button");

  changeThemeButton.addEventListener("click", (event) => {
    let oldTheme = currentTheme;
    console.log("change theme button clicked");
    if (currentTheme === "dark") {
      //theme ko light
      currentTheme = "light";
    } else {
      //theme ko dark
      currentTheme = "dark";
    }
    console.log(currentTheme);
    changePageTheme(currentTheme, oldTheme);
  });
}

//set theme to localstorage
function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

//get theme from localstorage
function getTheme() {
  let theme = localStorage.getItem("theme");
  return theme ? theme : "light";
}

//change current page theme
function changePageTheme(theme, oldTheme) {
  //localstorage mein update karenge
  setTheme(currentTheme);
  //remove the current theme

  if (oldTheme) {
    document.querySelector("html").classList.remove(oldTheme);
  }
  //set the current theme
  document.querySelector("html").classList.add(theme);

  // change the text of button
  document
    .querySelector("#theme_change_button")
    .querySelector("span").textContent = theme == "light" ? "Dark" : "Light";
}

//change page change theme

// Your JavaScript code snippet handles theme switching between dark and light modes, with the current theme being saved in localStorage and applied to the page. Let’s break down the code and make sure it works effectively:

// Breakdown of the Code
// Initialization and Theme Retrieval

// javascript
// Copy code
// console.log("Script loaded");

// let currentTheme = getTheme(); // Retrieve the current theme from localStorage

// document.addEventListener("DOMContentLoaded", () => {
//   changeTheme(); // Apply the theme when the page is loaded
// });
// console.log("Script loaded"); helps confirm the script has loaded.
// let currentTheme = getTheme(); gets the theme from localStorage or defaults to "light".
// document.addEventListener("DOMContentLoaded", ...) ensures that the changeTheme function is called after the DOM is fully loaded.
// Change Theme Function

// javascript
// Copy code
// function changeTheme() {
//   changePageTheme(currentTheme, ""); // Apply the current theme
  
//   const changeThemeButton = document.querySelector("#theme_change_button");

//   changeThemeButton.addEventListener("click", (event) => {
//     let oldTheme = currentTheme;
//     console.log("change theme button clicked");
//     currentTheme = currentTheme === "dark" ? "light" : "dark"; // Toggle theme
//     console.log(currentTheme);
//     changePageTheme(currentTheme, oldTheme); // Apply the new theme
//   });
// }
// changePageTheme(currentTheme, ""); initially applies the retrieved theme.
// const changeThemeButton = document.querySelector("#theme_change_button"); selects the button used to switch themes.
// changeThemeButton.addEventListener("click", ...) sets up an event listener to toggle the theme when the button is clicked.
// Set Theme in LocalStorage

// javascript
// Copy code
// function setTheme(theme) {
//   localStorage.setItem("theme", theme);
// }
// setTheme(theme) stores the selected theme in localStorage to persist the user’s choice across page reloads.
// Get Theme from LocalStorage

// javascript
// Copy code
// function getTheme() {
//   let theme = localStorage.getItem("theme");
//   return theme ? theme : "light"; // Return the stored theme or default to "light"
// }
// getTheme() retrieves the stored theme from localStorage, defaulting to "light" if none is found.
// Change Page Theme

// javascript
// Copy code
// function changePageTheme(theme, oldTheme) {
//   setTheme(currentTheme); // Update localStorage with the new theme
  
//   if (oldTheme) {
//     document.querySelector("html").classList.remove(oldTheme); // Remove old theme class
//   }
  
//   document.querySelector("html").classList.add(theme); // Add new theme class

//   // Update the button text to reflect the new theme
//   document.querySelector("#theme_change_button")
//     .querySelector("span").textContent = theme === "light" ? "Dark" : "Light";
// }
// setTheme(currentTheme); updates localStorage with the new theme.
// document.querySelector("html").classList.remove(oldTheme); removes the old theme class from the html element.
// document.querySelector("html").classList.add(theme); adds the new theme class to the html element.
// document.querySelector("#theme_change_button").querySelector("span").textContent = ...; updates the button text to reflect the current theme.
// Improved and Cleaner Code
// Here’s a more refined version of your code with comments for clarity:

// javascript
// Copy code
// // Initialize script and get current theme from localStorage
// console.log("Script loaded");
// let currentTheme = getTheme();

// // Ensure the DOM is fully loaded before applying the theme
// document.addEventListener("DOMContentLoaded", () => {
//   changeTheme(); // Apply the stored theme
// });

// function changeTheme() {
//   // Apply the current theme to the page
//   changePageTheme(currentTheme, "");

//   // Add event listener to the theme toggle button
//   const changeThemeButton = document.querySelector("#theme_change_button");
//   changeThemeButton.addEventListener("click", () => {
//     let oldTheme = currentTheme;
//     console.log("Change theme button clicked");

//     // Toggle the theme between 'light' and 'dark'
//     currentTheme = currentTheme === "dark" ? "light" : "dark";
//     console.log(currentTheme);

//     // Update the page with the new theme
//     changePageTheme(currentTheme, oldTheme);
//   });
// }

// // Store the selected theme in localStorage
// function setTheme(theme) {
//   localStorage.setItem("theme", theme);
// }

// // Retrieve the theme from localStorage or default to 'light'
// function getTheme() {
//   return localStorage.getItem("theme") || "light";
// }

// // Apply the theme to the page and update button text
// function changePageTheme(theme, oldTheme) {
//   setTheme(theme); // Save the new theme to localStorage

//   // Remove the old theme class from the 'html' element
//   if (oldTheme) {
//     document.querySelector("html").classList.remove(oldTheme);
//   }

//   // Add the new theme class to the 'html' element
//   document.querySelector("html").classList.add(theme);

//   // Update the button text based on the new theme
//   const buttonText = theme === "light" ? "Dark" : "Light";
//   document.querySelector("#theme_change_button").querySelector("span").textContent = buttonText;
// }
// Explanation
// Initialization: Logs script load and gets the theme from localStorage.

// Event Listener for DOMContentLoaded: Ensures the theme is applied after the DOM is ready.

// changeTheme Function: Sets up the theme application and toggle logic.

// setTheme and getTheme Functions: Manage theme storage and retrieval.

// changePageTheme Function: Updates the theme on the page and button text.

// This code is designed to be efficient and easy to understand, ensuring that theme switching works seamlessly and persists across page reloads.



