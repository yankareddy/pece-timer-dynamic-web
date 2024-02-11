let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

twentySecondsBtnEl.onclick = function() {
    let counter = 20;
    timerTextEl.textContent = counter + "seconds left";
    let uniqueValue = setInterval(function() {
        if (counter > 0) {

            counter = counter - 1
            timerTextEl.textContent = counter + "seconds left";
        } else {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(uniqueValue);
        }
    }, 1000)
}

thirtySecondsBtnEl.onclick = function() {
    let counter = 30;
    timerTextEl.textContent = counter + "seconds left";
    let uniqueValue = setInterval(function() {
        if (counter > 0) {

            counter = counter - 1
            timerTextEl.textContent = counter + "seconds left";
        } else {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(uniqueValue);
        }
    }, 1000)
}

fortySecondsBtnEl.onclick = function() {
    let counter = 40;
    timerTextEl.textContent = counter + "seconds left";
    let uniqueValue = setInterval(function() {
        if (counter > 0) {

            counter = counter - 1
            timerTextEl.textContent = counter + "seconds left";
        } else {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(uniqueValue);
        }
    }, 1000)
}

oneMinuteBtnEl.onclick = function() {
    let counter = 1;
    timerTextEl.textContent = counter + "seconds left";
    let uniqueValue = setInterval(function() {
        if (counter > 0) {

            counter = counter - 1
            timerTextEl.textContent = counter + "seconds left";
        } else {
            timerTextEl.textContent = "Your moment is complete"
            clearInterval(uniqueValue);
        }
    }, 1000)
}