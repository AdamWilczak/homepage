{
  const hello = () => {
    console.log("Witaj zacny dev! Niech Bogowie klawiatury ci sprzyjają");
  };
  hello();

  const toggleBackground = () => {
    body.classList.toggle("darkTheme");
    move.classList.toggle("darkTheme");

    

    const bcgChange = document.querySelector(".js-nav__flicker");
    const move = document.querySelector(".js-nav__flicker");
    const body = document.querySelector(".js-body");
  

    bcgChange.addEventListener("click", toggleBackground);
  }
}
