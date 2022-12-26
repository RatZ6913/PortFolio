let nav = document.querySelector('nav');
let menu = document.querySelector('#menu');
let spanWords = document.querySelectorAll('.span-second-text');


// Bouton : Menu Ouvrir/Fermer Navbar
menu.addEventListener('click', () => {
  nav.classList.toggle('btn-menu');
});

let arrTypeWriter = [
  "Développement Web",
  "FullStack",
  "Compétences",
  "Expérience"
];

// Text Writer : Pour les mots importants dans la partie Accueil
spanWords.forEach((element, index) => {
  let textWriter = arrTypeWriter[index];
  let i = 0;

  let interval = setInterval(() => {
    element.textContent += textWriter[i];

    if (i === textWriter.length) {
      element.textContent = arrTypeWriter[index];
      clearInterval(interval);

      setTimeout(() => {
        i = 0;
        element.textContent = "";

        setInterval(() => {
          element.textContent += textWriter[i];
          if (i === textWriter.length) {
            element.textContent = textWriter;
          } else {
            i++;
          }
        }, 400)

      }, 5000);

    } else {
      i++;
    }
  }, 200);
});



