var chartPlayer = document.getElementById("chart");
var hangMan = document.getElementById("hangman");
var gotQuiz = document.getElementById("got-quiz");
var vacationGuide = document.getElementById("vacation-guide");

var closeIcon = document.querySelector(".close");



function openModal() {
    document.querySelector(".modal-bg").style.display = "flex";
}

function closeModal() {
    document.querySelector(".modal-bg").style.display = "none";
}

chartPlayer.addEventListener("click", openModal);
closeIcon.addEventListener("click", closeModal);