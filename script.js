// 60-second countdown timer
let timeLeft = 60;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerElement.textContent = "Ready!";
    document.querySelector(".join-btn").classList.remove("fade");
    document.querySelector(".join-btn").textContent = "Get Tips Now";
  }
}, 1000);
