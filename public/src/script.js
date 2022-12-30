let nav = document.querySelector('nav');
let menu = document.querySelector('#menu');
let spanWords = document.querySelectorAll('.span-second-text');

// Bouton : Menu Ouvrir/Fermer Navbar
menu.addEventListener('click', () => {
  nav.classList.toggle('btn-menu');

  if (nav.classList.contains('btn-menu')) {
    setTimeout(() => {
      nav.style.display = "none";
    }, 1800);
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

let iconWeb = [
  "./public/img/dev-web.png",
  "./public/img/fullstack.png",
  "./public/img/skills.png",
  "./public/img/experience.png"
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
            element.innerHTML = textWriter + `<img src="${iconWeb[index]}" class="logo-languages">`;
            clearInterval(setInterval(interval));
          } else {
            i++;
          };
        }, 400);
      }, 3000);
    } else {
      i++;
    };
  }, 400);
});


// A OPTIMISER PLUS TARD // // // // // // // // // // // // // // // // // /
let about = document.querySelector('#about');                               //
let project = document.querySelector('#project');                           //
let contact = document.querySelector('#contact');                           //

let linkAbout = document.querySelector('#nav-about');                       //
let linkProject = document.querySelector('#nav-project');                   //
let linkContact = document.querySelector('#nav-contact');                   //
linkAbout.classList.add('active');                                        //

linkAbout.addEventListener('click', () => {                                 //
  about.style.display = "flex";                                             //
  project.style.display = "none";                                           //
  contact.style.display = "none";        

  setTimeout(() => {
    about.classList.add('link-about-anim');          
    project.classList.remove('link-project-anim');                                            //
    contact.classList.remove('link-contact-anim');                                       //
  }, 10);

  linkAbout.classList.add('active');                                        //
  linkProject.classList.remove('active');                                   //
  linkContact.classList.remove('active');               
});

linkProject.addEventListener('click', () => {                               //
  about.style.display = "none";                                             //
  project.style.display = "flex";                                           //
  contact.style.display = "none";         
                                                                            //
  setTimeout(() => {
    project.classList.add('link-project-anim');      
    about.classList.remove('link-about-anim');
    contact.classList.remove('link-contact-anim');                                      //
  }, 10);

  linkAbout.classList.remove('active');                                     //
  linkProject.classList.add('active');                                      //
  linkContact.classList.remove('active');                                   //
});

linkContact.addEventListener('click', () => {                               //
  about.style.display = "none";                                             //
  project.style.display = "none";                                           //
  contact.style.display = "flex";                       
  
  setTimeout(() => {
    contact.classList.add('link-contact-anim');      
    about.classList.remove('link-about-anim');
    project.classList.remove('link-project-anim');                                        //
  }, 10);

  linkAbout.classList.remove('active');                                     //
  linkProject.classList.remove('active');                                   //
  linkContact.classList.add('active');                                      //
});
// // // // // // // // // // // // // // // // // // // // // // // // // // 

let arrLinkNumber = document.querySelectorAll([
  "#link-number1",
  "#link-number2",
  "#link-number3",
  "#link-number4",
  "#link-number5",
  "#link-number6"
]);

let arrProjectNumber = document.querySelectorAll([
  "#content-project1",
  "#content-project2",
  "#content-project3",
  "#content-project4",
  "#content-project5",
  "#content-project6",
]);

let spanTest = document.createElement('span');

let projectNumber = (arr1, arr2) => {
  spanTest.classList.add('spanTest');

  for (let i = 0; i < arr1.length; i++) {  // [i] sera l'index de la longueur du tableau1
    arr1[0].append(spanTest);
    arr1[0].style.color = "white";

    arr1[i].addEventListener('click', () => { // À Chaque click, sur les liens "projets", je veux que
      for (let j = 0; j < arr2.length; j++) {  // l'index de arr2 (j), soient toutes comparées
        if (j == i) { // Et si index[j]  est égal à index[i], alors. Fais les instructions suivantes..
          arr2[j].style.display = "flex";
          arr1[j].append(spanTest);
          arr1[j].style.color = "white";
        } else {  // Sinon, [j] est différent de [i], alors je cache les autres éléments // rmets les valeurs de base
          arr2[j].style.display = "none";
          arr1[j].style.color = "";
        }
      }
    });
  };
};
projectNumber(arrLinkNumber, arrProjectNumber);



let arrowBtnNav = (arr1, arr2) => {
  let i = 0;
  arr1[i].style.display = "flex";
  
  // Bouton Suivant 
  next.addEventListener('click', () => {
    arr1[i].style.display = "none";
    arr2[i].style.color = "";
    i++;

    if (i == arr1.length) {
      i = 0;
    };

    arr1[i].style.display = "flex";
    arr2[i].append(spanTest);
    arr2[i].style.color = "white";
  });

  // Bouton Précédent 
  previous.addEventListener('click', () => {
    arr1[i].style.display = "none";
    arr2[i].style.color = "";
    i--;

    if (i < 0) {
      i = arr1.length - 1;
    };

    arr1[i].style.display = "flex";
    arr2[i].append(spanTest);
    arr2[i].style.color = "white";
  });
};

arrowBtnNav(arrProjectNumber, arrLinkNumber);






