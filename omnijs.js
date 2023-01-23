var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 4000);

// var counter;
// setInterval(function () {
//   document.getElementById("hover").checked;
// });

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");

// btnNavEl.addEventListener("click", function())
btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
