let nav = document.querySelector('nav');
let menu = document.querySelector('#menu');
let spanWords = document.querySelectorAll('.span-second-text');


// Bouton : Menu Ouvrir/Fermer Navbar
menu.addEventListener('click', () => {
  nav.classList.toggle('btn-menu');

  if (nav.classList.contains('btn-menu')) {
    setTimeout(() => {
      nav.style.display = "none";
    }, 2000);
  } else {
    nav.style.display = "";
  }
});

// Tableau String pour les balises <span>
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

  // Je crée un interval, qui toute les 0.7miliseconds : Ajoute un string jusqu'à la longueur du tableau, dans la balise <span>
  let interval = setInterval(() => {
    element.textContent += textWriter[i];

    // Si 'i' arrive à la longueur du tableau / Alors chaque <span> valent arrTypeWriter[i];
    if (i === textWriter.length) {
      element.textContent = arrTypeWriter[index];
      clearInterval(interval);  // Et je stop l'interval

      setTimeout(() => { // Je crée un timeout qui va déclencher, une instruction dans 4.5s
        i = 0;  // Je remets 'i' à zéro ( Car il est arrivé au bout(voir plus haut))
        element.textContent = ""; // Je vide les <span> pour refaire un autre interval,

        setInterval(() => {
          element.textContent += textWriter[i];
          if (i === textWriter.length) {
            element.textContent = textWriter;
          } else {
            i++;
          };
        }, 300);

      }, 4500);

    } else {
      i++;
    };

  }, 700);
});



let about = document.querySelector('#about');
let project = document.querySelector('#project');
let contact = document.querySelector('#contact');

let linkAbout = document.querySelector('#link-about');
let linkProject = document.querySelector('#link-project');
let linkContact = document.querySelector('#link-contact');

// console.log(about, project, contact);

// linkAbout.addEventListener('click', () => {

// });


