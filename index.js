let speedTypingTestEle = document.getElementById("speedTypingTest");
let timerEle = document.getElementById("timer");
let quoteDisplayEle = document.getElementById("quoteDisplay");
let resultEle = document.getElementById("result");
let quoteInputEle = document.getElementById("quoteInput");
let submitBtnEle = document.getElementById("submitBtn");
let resetBtnEle = document.getElementById("resetBtn");
let spinnerEle = document.getElementById("spinner");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET",
};
let count = 0;
let uniqueId;

function displayQuoteFunction(content) {
    quoteDisplayEle.textContent = "";
    spinnerEle.classList.remove("d-none");
    quoteDisplayEle.textContent = content;
    spinnerEle.classList.add("d-none");

}

function startTimerFun() {
    uniqueId = setInterval(function() {
        count = count + 1;
        timerEle.textContent = count + " seconds";

    }, 1000);
}

function getRandomQuote() {
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            displayQuoteFunction(jsonData.content);
            startTimerFun();
        });
}





resetBtnEle.addEventListener("click", function() {
    resultEle.textContent = "";
    quoteInputEle.value = "";
    clearInterval(uniqueId);
    count = 0;

    getRandomQuote();

});





function checkTheInputFun() {
    console.log(resultEle);
    if (quoteDisplayEle.textContent === quoteInputEle.value) {
        clearInterval(uniqueId);
        resultEle.textContent = "you have stopped at " + timerEle.textContent;

    } else {
        resultEle.textContent = "You have typed wrong";

    }
}

submitBtnEle.addEventListener("click", checkTheInputFun);


getRandomQuote();