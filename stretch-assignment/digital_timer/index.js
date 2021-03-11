// Declaring variables
const reset = 0; //to reset timer 
let intMs,
    stopped = true,
    msTensNumber = 0,
    msHundredsNumber = 0,
    secTensNumber = 0,
    secOnesNumber = 0;
// select elements from DOM
let secondTens = document.querySelector('secondTens');
let secondOnes = document.querySelector('secondOnes');
let msHundreds = document.querySelector('msHundreds');
let msTens = document.querySelector('msTens');

secondTens = secondOnes = msHundreds = msTens = 0; // initialize digits

// create start button, add style, and append to page
let startButton = document.createElement('button');
startButton.innerHTML = 'Start Timer';
startButton.style.color = 'blue';
startButton.style.background = 'black';
startButton.style.color = 'white';
startButton.style.border = "2px solid #4CAF50";
document.body.children[0].appendChild(startButton);

// add event listener to startButton, timer starts when clicked
startButton.addEventListener("click", () => {
    startButton.style.transform = "scale(1.2)";
    startButton.style.transition = "all 0.3s";
    stopButton.style.transform = "scale(1.0)";
    stopButton.style.transition = "all 0.3s";
    console.log("Clicked start");
    startTimer();
});

// create( stop timer button, add style, and append to page
let stopButton = document.createElement('button');
stopButton.innerHTML = "Stop Timer";
stopButton.style.background = "green";
stopButton.style.color = "red";
stopButton.style.border = "2px solid #4CAF50";
document.body.children[0].appendChild(stopButton);

//add eventListener to stop timer when stopButton is clicked
stopButton.addEventListener("click", () => {
    stopButton.style.transform = "scale(1.2)";
    stopButton.style.transition = "all 0.3s";
    startButton.style.transform = "scale(1.0)";
    startButton.style.transition = "all 0.3s";
    stopTimer();
});
// clears the timer back to zero
function resetTimer() {
    window.clearInterval(reset);
}

function startTimer() { // Start timer
    console.log("Start Timer initiated");
    stopped = false;
    instMs = setInterval(incrementTime, 100);
}

function stopTimer() {
    if (stopped == false) {
        stopped = true;

    }
}

function incrementTime() {
    if (stopped == false) {
        console.log('incrementing time');

        msTensNumber++;
        if (msTensNumber == 10) {
            msHundredsNumber++;
            msTensNumber = 0;
        }
        if (msHundredsNumber >= 10) {
            secOnesNumber++;
            msHundredsNumber = 0;
        }
        if (secOnesNumber >= 10) {
            secTensNumber++;
            secTensNumber = 0;
        }
        if (secTensNumber == 1) {
            let digits = document.querySelectorAll('digit');
            digits.forEach((digit) => {
                digit.innerHTML.sytle.color = 'red';
            });
        }
        document.getElementById('secondTens').innerText = secTensNumber;
        document.getElementById('secondOnes').innerText = secOnesNumber;
        document.getElementById('msHundreds').innerText = msHundredsNumber;
        document.getElementById("msTens").innerText = msTensNumber;


    }
}