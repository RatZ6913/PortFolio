let nav = document.querySelector("nav");
let menu = document.querySelector("#menu");
let spanWords = document.querySelectorAll(".span-second-text");

// TEXT ANIMATION BACKGROUND 
let body = document.querySelector('body');
let arrText = [
  "0",
  "1"
];

createText = () => {
  random = Math.floor(Math.random() * 2);
  arrText.textContent = arrText[random];

  let text = document.createElement('div');
  text.classList.add('textAnim');
  text.textContent = arrText[random];

  text.style.left = Math.random() * 100 + "%";
  text.style.animationDuration = Math.random() * 1 + 2 + "s";
  body.append(text);
}

for (let index = 0; index < 50; index++) {
  createText();
}

// Bouton : Menu Ouvrir/Fermer Navbar
menu.addEventListener("click", () => {
  nav.classList.toggle("btn-menu");

  if (nav.classList.contains("btn-menu")) {
    setTimeout(() => {
      nav.style.display = "none";
    }, 1800);
  } else {
    nav.style.display = "";
  }
});

// Tableau Texte pour les balises <span>
let arrTypeWriter = [
  "La Programmation Web",
  "Le Front & le Back",
  "Connaissances",
  "De ma persévérance",
];

let arrTypeWriter2 = [
  "Le Développement Web",
  "Être FullStack",
  "Compétences",
  "De mon Expérience",
];

// Text Writer : Pour les mots importants dans la partie Accueil
spanWords.forEach((element, index) => {
  let textWriter = arrTypeWriter[index];
  let textWriter2 = arrTypeWriter2[index];
  let i = 0;

  // Je crée un interval, qui toute les 0.7miliseconds : Ajoute un string jusqu'à la longueur du tableau, dans la balise <span>
  let interval = setInterval(() => {
    element.textContent += textWriter[i];

    // Si 'i' arrive à la longueur du tableau / Alors chaque <span> valent arrTypeWriter[i];
    if (i === textWriter.length) {
      element.textContent = arrTypeWriter[index];
      clearInterval(interval); // Et je stop l'interval

      setTimeout(() => {
        // Je crée un timeout qui va déclencher, une instruction dans 4.5s
        i = 0; // Je remets 'i' à zéro ( Car il est arrivé au bout(voir plus haut))
        element.textContent = ""; // Je vide les <span> pour refaire un autre interval,

        setInterval(() => {
          element.textContent += textWriter2[i];
          if (i === textWriter2.length) {
            element.innerHTML = arrTypeWriter2[index];
            clearInterval(setInterval(interval));
          } else {
            i++;
          }
        }, 300);
      }, 4500);
    } else {
      i++;
    }
  }, 300);
});


// A OPTIMISER PLUS TARD // // // // // // // // // // // // // // // // // /
let about = document.querySelector("#about"); //
let project = document.querySelector("#project"); //
let hobby = document.querySelector("#hobby"); //

let linkAbout = document.querySelector("#nav-about"); //
let linkProject = document.querySelector("#nav-project"); //
let linkhobby = document.querySelector("#nav-hobby"); //
linkAbout.classList.add("active"); //

linkAbout.addEventListener("click", () => {
  //
  about.style.display = "flex"; //
  project.style.display = "none"; //
  hobby.style.display = "none";

  setTimeout(() => {
    about.classList.add("link-about-anim");
    project.classList.remove("link-project-anim"); //
    hobby.classList.remove("link-hobby-anim"); //
  }, 10);

  linkAbout.classList.add("active"); //
  linkProject.classList.remove("active"); //
  linkhobby.classList.remove("active");
});

linkProject.addEventListener("click", () => {
  //
  about.style.display = "none"; //
  project.style.display = "flex"; //
  hobby.style.display = "none";
  //
  setTimeout(() => {
    project.classList.add("link-project-anim");
    about.classList.remove("link-about-anim");
    hobby.classList.remove("link-hobby-anim"); //
  }, 10);

  linkAbout.classList.remove("active"); //
  linkProject.classList.add("active"); //
  linkhobby.classList.remove("active"); //
});

linkhobby.addEventListener("click", () => {
  //
  about.style.display = "none"; //
  project.style.display = "none"; //
  hobby.style.display = "flex";

  setTimeout(() => {
    hobby.classList.add("link-hobby-anim");
    about.classList.remove("link-about-anim");
    project.classList.remove("link-project-anim"); //
  }, 10);

  linkAbout.classList.remove("active"); //
  linkProject.classList.remove("active"); //
  linkhobby.classList.add("active"); //
});

let arrLinkNumber = document.querySelectorAll([
  "#link-number1",
  "#link-number2",
  "#link-number3",
  "#link-number4",
  "#link-number5",
  "#link-number6",
]);

let arrProjectNumber = document.querySelectorAll([
  "#content-project1",
  "#content-project2",
  "#content-project3",
  "#content-project4",
  "#content-project5",
  "#content-project6",
]);

let spanTest = document.createElement("span");

let projectNumber = (arr1, arr2) => {
  spanTest.classList.add("spanTest");

  for (let i = 0; i < arr1.length; i++) {
    // [i] sera l'index de la longueur du tableau1
    arr1[0].append(spanTest);
    arr1[0].style.color = "white";

    arr1[i].addEventListener("click", () => {
      // À Chaque click, sur les liens "projets", je veux que
      for (let j = 0; j < arr2.length; j++) {
        // l'index de arr2 (j), soient toutes comparées
        if (j == i) {
          // Et si index[j]  est égal à index[i], alors. Fais les instructions suivantes..
          arr2[j].style.display = "flex";
          arr1[j].append(spanTest);
          arr1[j].style.color = "white";

          setTimeout(() => {
            arr2[j].classList.add("project-nb-anim");
            arr1[j].classList.add("link-nb-anim");
          }, 10);
        } else {
          // Sinon, [j] est différent de [i], alors je cache les autres éléments // rmets les valeurs de base
          arr2[j].style.display = "none";
          arr1[j].style.color = "";
          arr2[j].classList.remove(
            "project-nb-anim",
            "btn-project-previous",
            "btn-project-next"
          );
          arr1[j].classList.remove(
            "link-nb-anim",
            "btn-link-previous",
            "btn-link-next"
          );
        }
      }
    });
  }
};

projectNumber(arrLinkNumber, arrProjectNumber);

let arrowBtnNav = (arr1, arr2) => {
  let i = 0;

  arr1[i].style.display = "flex";

  // Bouton Suivant
  next.addEventListener("click", (e) => {
    arr1[i].style.display = "none";
    arr2[i].style.color = "";
    i++;

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].style.color == "white") {
        i = [j];
      }
    }

    setTimeout(() => {
      arr1[i].classList.add("btn-project-next");
      arr2[i].classList.add("btn-link-next");
    }, 10);

    if (i == arr1.length) {
      i = 0;
    }

    arr1[i].style.display = "flex";
    arr2[i].append(spanTest);
    arr2[i].style.color = "white";
    arr1[i].classList.remove(
      "btn-project-previous",
      "btn-project-next",
      "project-nb-anim"
    );
    arr2[i].classList.remove(
      "btn-link-previous",
      "btn-link-next",
      "link-nb-anim"
    );
  });

  // Bouton Précédent
  previous.addEventListener("click", () => {
    arr1[i].style.display = "none";
    arr2[i].style.color = "";
    i--;

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].style.color == "white") {
        i = [j];
      }
    }

    setTimeout(() => {
      arr1[i].classList.add("btn-project-previous");
      arr2[i].classList.add("btn-link-previous");
    }, 10);

    if (i < 0) {
      i = arr1.length - 1;
    }

    arr1[i].style.display = "flex";
    arr2[i].append(spanTest);
    arr2[i].style.color = "white";
    arr1[i].classList.remove(
      "btn-project-previous",
      "btn-project-next",
      "project-nb-anim"
    );
    arr2[i].classList.remove(
      "btn-link-previous",
      "btn-link-next",
      "link-nb-anim"
    );
  });
};

arrowBtnNav(arrProjectNumber, arrLinkNumber);

let contentHobby = document.querySelectorAll([
  "#game",
  "#coding",
  "#read",
  "#computer",
  "#podcast"
]);

let arrHobbyBg = [
  "url('./public/img/gaming.jpg')",
  "url('./public/img/coding.png')",
  "url('./public/img/reading.png')",
  "url('./public/img/hardware.jpg')",
  "url('./public/img/podcast.jpg')"
];

let arrTextHobby = [
  "Quels jeux ?",
  "Quelles technologies ?",
  "Quels livres ?",
  "Quels composants ?",
  "Quelles plateformes ?"
];

let arrTextInBoxHobby = [
  "Je suis attiré par les jeux de compétition et j'aime mettre mes compétences à l'épreuve. En plus de jouer pour le plaisir, j'aime aussi passer du temps à farmer dans les jeux pour améliorer mon équipement et mes personnages. Je suis à la recherche de nouveaux défis pour m'améliorer en tant que joueur.",
  "Pour améliorer mes compétences en programmation web, je m'entraîne régulièrement sur des exercices en ligne, des projets personnels ou des tutoriels vidéo. J'ai soif d'apprentissage et je suis déterminé à devenir un développeur expérimenté et compétent.",
  "Actuellement, j'ai entrepris de lire 'Clean Code' de Robert C. Martin, un ouvrage qui m'aide à écrire du code propre et structuré. J'apprécie la façon dont l'auteur aborde les concepts de manière concrète et pratique.",
  "J'aime être au courant des derniers développements en matière de composants informatiques, comme les cartes graphiques, les processeurs et autres...",
  "Pour me tenir au courant, je me tourne vers des podcasts sur YouTube et Spotify pour obtenir des informations sur le développement web."
];

let arrAvatarLoad = [
  "url('./public/img/avatar2.png')",
  "url('./public/img/avatar3.png')",
];

contentHobby.forEach((element, index) => {
  let boxHobby = document.querySelector('#box-hobby');
  let boxInCatHobby = document.createElement('section');
  boxInCatHobby.classList.add('boxInCatHobby');
  boxInCatHobby.dataset.number = index;

  let audio = new Audio('../public/sound/sound.mp3');

  let titleInCatHobby = document.createElement('h4');
  titleInCatHobby.classList.add('titleInCatHobby');
  titleInCatHobby.textContent = arrTextHobby[index];

  let textInBoxCatHobby = document.createElement('p');
  textInBoxCatHobby.classList.add('textInBoxCatHobby');

  let indexBox = arrTextInBoxHobby[index];
  let avatarTalking = document.createElement('span');
  avatarTalking.classList.add('avatarTalking');

  let loadCircle = document.createElement('span');
  loadCircle.classList.add('loadCircle');

  element.addEventListener('mouseenter', (e) => {
    element.style.filter = "none";
    element.style.height = "15vh";
    element.style.opacity = "100%";
    boxHobby.style.backgroundImage = arrHobbyBg[index];
    boxHobby.style.transition = "0.5s";

    element.append(boxInCatHobby);
    boxInCatHobby.prepend(titleInCatHobby);
    titleInCatHobby.before(loadCircle);
    titleInCatHobby.after(textInBoxCatHobby);
    textInBoxCatHobby.before(avatarTalking);

    if (boxInCatHobby.dataset.number == 2) {
      boxInCatHobby.style.flexDirection = "column-reverse";
    } else if (boxInCatHobby.dataset.number == 3) {
      console.log(boxInCatHobby.dataset.number);
      boxInCatHobby.style.flexDirection = "column-reverse";
    } else if (boxInCatHobby.dataset.number == 4) {
      boxInCatHobby.style.flexDirection = "column-reverse";
    }
  });

  element.addEventListener('mouseleave', (e) => {
    element.style.filter = "";
    element.style.height = "";
    element.style.opacity = "";
    element.removeChild(boxInCatHobby);
  });

  let n = 0;
  titleInCatHobby.addEventListener('click', () => {
    audio.play();

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        let random = Math.floor(Math.random() * 3);
        if (n === indexBox.length) {
          textInBoxCatHobby.textContent = indexBox;
          avatarTalking.style.backgroundImage = arrAvatarLoad[0];
          loadCircle.style.animation = "none";
          loadCircle.style.borderColor = "white";
          loadCircle.style.backgroundColor = "#FFA500";
          titleInCatHobby.style.cursor = "auto";
          audio.pause();

        } else {
          avatarTalking.style.backgroundImage = arrAvatarLoad[random];
          loadCircle.style.display = "block";
          textInBoxCatHobby.textContent += indexBox[n];
          n++;
        };
      }, 50);
    }, 1000);
  });
});

