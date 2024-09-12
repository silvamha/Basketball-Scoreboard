// Get the score displays
const homeScoreDisplay = document.querySelector("#home-score");
const guestScoreDisplay = document.querySelector("#guest-score");

// Get the buttons
const home1Button = document.querySelector("#home-1");
const home2Button = document.querySelector("#home-2");
const home3Button = document.querySelector("#home-3");
const guest1Button = document.querySelector("#guest-1");
const guest2Button = document.querySelector("#guest-2");
const guest3Button = document.querySelector("#guest-3");

let homeScore = 0;
let guestScore = 0;

// ... Logic here!

const handleClick = (e) => {
  if (e.target === home1Button) {
    homeScore += 1;
    homeScoreDisplay.textContent=homeScore
    console.log(home1Button);
    console.log(homeScore);
    console.log("I was clicked");
  } else if (e.target === home2Button) {
        homeScore+=2
      homeScoreDisplay.textContent = homeScore;
    } else if (e.target === home3Button) {
        homeScore+=3
      homeScoreDisplay.textContent = homeScore;
    }else if (e.target === guest1Button) {
      guestScore+=1
      guestScoreDisplay.textContent = guestScore;
    }else if (e.target === guest2Button) {
      guestScore+=2
      guestScoreDisplay.textContent = guestScore;
    }else if (e.target === guest3Button) {
      guestScore+=3
      guestScoreDisplay.textContent = guestScore;
    }
};

// Attach event listeners to the buttons
home1Button.addEventListener("click", handleClick);
home2Button.addEventListener("click", handleClick);
home3Button.addEventListener("click", handleClick);
guest1Button.addEventListener("click", handleClick);
guest2Button.addEventListener("click", handleClick);
guest3Button.addEventListener("click", handleClick);

// Other logic goes here