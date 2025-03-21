// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let button = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

button.addEventListener("click", () => {
  links.classList.toggle("show-links");
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
});
