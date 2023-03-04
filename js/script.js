{
  const hello = () => {
    console.log("Witaj zacny dev! Niech Bogowie klawiatury ci sprzyjają");
  };
  hello();

  const toggleBackground = () => {
    body.classList.toggle("darkTheme");
    move.classList.toggle("darkTheme");

    // nameChange.innerText = body.classList.contains("darkTheme") ? "on" : "off";
  };

  const bcgChange = document.querySelector(".js-nav__flicker");
  const move = document.querySelector(".js-nav__flicker");
  const body = document.querySelector(".js-body");
  // let nameChange = document.querySelector(".js-nav__OnOff--Text");

  bcgChange.addEventListener("click", toggleBackground);
}
