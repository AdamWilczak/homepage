let bcgChange = document.querySelector(".nav__flicker");
let move = document.querySelector(".nav__flicker");
let body = document.querySelector(".body");
// let nameChange = document.querySelector(".js-nav__OnOff--Text");

bcgChange.addEventListener("click", () => {
  body.classList.toggle("darkTheme");
  move.classList.toggle("darkTheme");

  // nameChange.innerText = body.classList.contains("darkTheme") ? "on" : "off";
});
