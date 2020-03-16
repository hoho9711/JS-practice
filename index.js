console.log("I'm Working, Im JS. ");

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handledClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handledClick);
}
init();
