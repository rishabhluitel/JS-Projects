const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let click = document.getElementById("btn");
let colorCounter = 0;
click.addEventListener("click", () => {
  let result = "";
  for (let index = 0; index < 6; index++) {
    colorCounter = Math.floor(Math.random() * hex.length);
    result += hex[colorCounter];
  }
  console.log(result);
  document.querySelector(".color").textContent = `#${result}`;
  document.querySelector("body").style.backgroundColor = `#${result}`;
});
