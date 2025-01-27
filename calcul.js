// Ce script va permettre d'écrire dans les champs nombreA et nombreB
 // et lire la réponse de l'utilisateur, lorsqu'il cliquera le bouton.
 // v1.0 calcul des champs
 // v1.1 ajout du framework CSS MetreoUI
 // v1.2 ajout du bouton pour relancer le code
 function tirageNombre(min, max) {
    // cette fonction tire un nombre au hasard entre min et max
    let nombre = Math.floor(Math.random() * (max-min+1)) + min
    return nombre
    }



function ecrireNombre(ID, valeur) {
    document.querySelector(ID).value = valeur
    // document.getElementById(ID).value = valeur // autre possibilité
    }
    function lireNombre(ID) {
    return Number(document.querySelector(ID).value)
    }
    // Partie du code qui s'exécute dès l'appel du script dans la page web
    for (let t=0; t < 50; t++) {
    console.log(tirageNombre(5,50))
    }
    

    // tester l'écriture des nombres. Utilisez "nombreA" si vous préférez la syntaxte 
// Fonction d'initialisation
function init() {
  // Tirer de nouveaux nombres aléatoires
  ecrireNombre("#nombreA", tirageNombre(1, 50))
  ecrireNombre("#nombreB", tirageNombre(1, 50))

  // Réinitialiser la réponse et la couleur du champ de réponse
  document.querySelector("#reponse").value = ""
  document.querySelector("#reponse").style.backgroundColor = "white"

  // Désactiver le bouton "Répondre" avant de répondre
  document.querySelector("#repondre").disabled = false

  // Réinitialiser les compteurs
  nbreCoupJoue = 0
  nbreBonneReponse = 0
}

// Fonction pour répondre à la question
function repondre() {
  // Incrémenter le nombre de coups joués
  nbreCoupJoue++

  // Calculer la réponse correcte
  let resultatJuste = lireNombre("#nombreA") + lireNombre("#nombreB")
  let resultatUser = lireNombre("#reponse")

  // Vérifier si la réponse de l'utilisateur est correcte
  if (resultatUser == resultatJuste) {
      document.querySelector("#reponse").style.backgroundColor = "#77FF00"; // Bonne réponse (vert)
      nbreBonneReponse++ // Incrémenter le nombre de bonnes réponses
  } else {
      document.querySelector("#reponse").style.backgroundColor = "#FFAA00"; // Mauvaise réponse (orange)
  }

  // Mettre à jour la réussite avec les bons et les mauvais résultats
  reussite(nbreBonneReponse, nbreCoupJoue)

  // Désactiver le bouton "Répondre" après chaque tentative
  document.querySelector("#repondre").disabled = true
}

// Fonction pour afficher les résultats
function reussite(nbreBonneReponse, nbreCoupJoue) {
  console.log(`Réponses correctes: ${nbreBonneReponse} sur ${nbreCoupJoue} tentatives.`)
}

// Variable globale pour les compteurs
let nbreBonneReponse = 0
let nbreCoupJoue = 0

// Initialiser le calcul
init()

      


function reussite(bonne, coup) {
         // modifier la barre de réussite (MetroUI)
         let progression = Metro.getPlugin("#progression", "progress")
         progression.buff(100)
         progression.val(bonne/coup*100)
         document.querySelector("#preussite").innerHTML = "Réussite : "+bonne+" bonne(s) réponse(s) sur "+coup
      }

      
      