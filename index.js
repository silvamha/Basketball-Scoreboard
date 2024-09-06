// Get the score displays
const homeScoreDisplay = document.querySelector('#home-score');
const guestScoreDisplay = document.querySelector('#guest-score');

// Get the buttons
const home1Button = document.querySelector('#home-1');
const home2Button = document.querySelector('#home-2');
const home3Button = document.querySelector('#home-3');
const guest1Button = document.querySelector('#guest-1');
const guest2Button = document.querySelector('#guest-2');
const guest3Button = document.querySelector('#guest-3');

let homeScore = 0;
let guestScore = 0;

// ... (Your logic to update scores and handle button clicks will go here)

const handleClick = (e) => {
    if (e.target ===home1Button){
        console.log(home1Button)
        console.log('I was clicked')
    }else 
        console.log('This code is crap')
    
}

// Attach event listeners to the buttons
home1Button.addEventListener('click', handleClick);
home2Button.addEventListener('click', handleClick);
home3Button.addEventListener('click', handleClick);
guest1Button.addEventListener('click', handleClick);
guest2Button.addEventListener('click', handleClick);
guest3Button.addEventListener('click', handleClick);