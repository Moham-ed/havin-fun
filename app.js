const hateBtn = document.querySelector("#hate");
const LoveBtn = document.querySelector("#love");

hateBtn.addEventListener("mouseover", () => {
  hateBtn.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
  hateBtn.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
});
hateBtn.addEventListener("click", () => {
  alert("you Got Me . MotherF***er 😡😡");
});

LoveBtn.addEventListener("click", () => {
  alert("I love You To");
});
