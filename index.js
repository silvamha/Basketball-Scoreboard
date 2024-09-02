/*
Basketball Scoreboard
Initialize variables:

homeScore = 0
visitorScore = 0
possession = "home" // Start with home team having possession
Get references to HTML elements:

homeScoreDisplay
visitorScoreDisplay
onePointBtn, twoPointBtn, threePointBtn
possessionIndicator (the element that will show which team has possession)
Add event listeners to buttons:

When any scoring button is clicked:
If possession is "home":
Add the corresponding points to homeScore.
Update homeScoreDisplay.
Else if possession is "visitors":
Add the corresponding points to visitorScore.
Update visitorScoreDisplay.
Toggle possession to the other team.
Update possessionIndicator to reflect the change.
Update scoreboard display function:

A function to update the homeScoreDisplay and visitorScoreDisplay.
A function to update the possessionIndicator to visually highlight the team with possession.
Initial setup:

Call the update scoreboard display function to show the initial scores and possession.
*/


const container = document.querySelector(".container");
const homeScoreDisplay = document.querySelector("#home-score");
const visitorScoreDisplay = document.querySelector("#visitor-score");
const onePointBtn = document.querySelector("#one-point-btn");
const twoPointBtn = document.querySelector("#two-point-btn");
const threePointBtn = document.querySelector("#three-point-btn");
const possessionIndicator = document.querySelector("#possession-indicator");

// container.addEventListener('click', () =>{
//     if (container.style.backgroundColor === "transparent"){
//         container.style.backgroundColor = "red"
//     }else if
//         (container.style.backgroundColor === "red"){
//             container.style.backgroundColor = "transparent"
//         }       
    
//    console.log("I've been clicked!")  
// })

// Codiumate suggestion below

// Ensure the container has a class to toggle
container.classList.add('toggle-background');

container.addEventListener('click', () => {
    if (container.classList.contains('red-background')) {
        container.classList.remove('red-background');
        container.classList.add('transparent-background');
    } else {
        container.classList.remove('transparent-background');
        container.classList.add('red-background');
    }

    console.log("I've been clicked!");
});