  const btn = document.querySelector(".btn button");
  const h1 = document.querySelector(".techName h1");

  // État initial : texte blanc, pas d’animation
  h1.style.color = "white";
  h1.style.background = "#444";
  h1.style.webkitTextFillColor = "white";

  btn.addEventListener("click", () => {
    if (btn.textContent === "Star it...") {
      // Activer l’animation (dégradé + animation)
      h1.style.color = "transparent";
      h1.style.background = "linear-gradient(50deg, white, yellow, red, #EE4500, yellow, green)";
      h1.style.backgroundSize = "200%";
      h1.style.backgroundPosition = "0% 50%";
      h1.style.webkitBackgroundClip = "text";
      h1.style.webkitTextFillColor = "transparent";
      h1.style.animation = "moov 2s infinite linear";
    
      btn.textContent = "Stop it...";
    } else {
      // Désactiver l’animation, revenir au blanc
      h1.style.color = "white";
      h1.style.background = "#444";
      h1.style.webkitTextFillColor = "white";
      h1.style.animation = "none";
    //   h1.style.transition = "2s";
      btn.textContent = "Star it...";
    }
  });