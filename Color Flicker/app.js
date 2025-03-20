const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let click = document.getElementById("btn");

click.addEventListener("click", () => {
  const colorCounter = Math.floor(Math.random() * colors.length);
  document.querySelector(".color").textContent = colors[colorCounter];
  document.querySelector(
    "body"
  ).style.backgroundColor = `${colors[colorCounter]}`;
});
