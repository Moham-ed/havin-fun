const hateBtn = document.querySelector("#hate");
const LoveBtn = document.querySelector("#love");

hateBtn.addEventListener("mouseover", () => {
  hateBtn.style.top = `${randNum(window.innerHeight)}px`;
  hateBtn.style.left = `${randNum(window.innerWidth)}px `;
});
hateBtn.addEventListener("click", () => {
  alert("you Got Me . MotherF***er 😡😡");
});

LoveBtn.addEventListener("click", () => {
  alert("I love You To");
});

function randNum(num) {
  const randNum = Math.floor(Math.random() * num);
  if (randNum > num) {
    return num - 100;
  } else return randNum;
}