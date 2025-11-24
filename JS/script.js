const zapato = document.getElementById("zapato");

zapato.addEventListener("click", () => {
  if (zapato.style.animationPlayState === "paused") {
    zapato.style.animationPlayState = "running";
  } else {
    zapato.style.animationPlayState = "paused";
  }
});
