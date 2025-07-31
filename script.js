const box = document.getElementById("box");
const message = document.getElementById("message");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

let startTime, timeoutId;

function showBox() {
  box.style.display = "block";
  startTime = Date.now();
}

function startTest() {
  result.textContent = "";
  message.textContent = "Wait for the green box, then click!";
  box.style.display = "none";

  const delay = Math.random() * 3000 + 2000; // 2-5 seconds
  timeoutId = setTimeout(showBox, delay);
}

box.addEventListener("click", () => {
  const reactionTime = Date.now() - startTime;
  box.style.display = "none";
  result.textContent = `Your reaction time is ${reactionTime} ms`;
  message.textContent = "Click 'Start' to try again!";
});

startBtn.addEventListener("click", () => {
  clearTimeout(timeoutId);
  startTest();
});
