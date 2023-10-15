

  // Création d'un objet pour représenter Jason le tueur en série
let jason = {
    nom: "Jason",
    pointsDeVie: 100,
    probabiliteDeMourir: 0.3,
    probabiliteDeMettreDesDegats: 0.5,
    probabiliteDeMourirEnMettantDesDegats: 0.2,
  };
  
  // Tableaux de prénoms et de caractéristiques pour les survivants
  let prenoms = ["Alice", "Bob", "Charlie", "David", "Eva"];
  let caracteristiques = ["nerd", "sportif", "blonde", "intelligent", "musicien"];
  
  // Fonction pour générer un nom aléatoire parmi les prénoms et les caractéristiques
  function genererNomSurvivant() {
    let nomAleatoire = prenoms[Math.floor(Math.random() * prenoms.length)];
    let caractereAleatoire = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    return `${nomAleatoire} le ${caractereAleatoire}`;
  }
  
  // Création d'un tableau pour stocker les survivants
  let survivants = Array.from({ length: 5 }, () => ({
    nom: genererNomSurvivant(),
    pointsDeVie: 100,
  }));
  
  // Fonction pour simuler une attaque de Jason
  function attaqueJason() {
    let cible = survivants[Math.floor(Math.random() * survivants.length)];
    let probMort = Math.random();
    let probDegats = Math.random();
    let probMortDegats = Math.random();
  
    if (probMort < jason.probabiliteDeMourir) {
      console.log(`Jason a tué ${cible.nom}`);
      cible.pointsDeVie = 0;
    } else if (probDegats < jason.probabiliteDeMettreDesDegats) {
      console.log(`${cible.nom} a esquivé et a infligé 10 points de dégâts à Jason`);
      jason.pointsDeVie -= 10;
    } else if (probMortDegats < jason.probabiliteDeMourirEnMettantDesDegats) {
      console.log(`${cible.nom} a infligé 15 points de dégâts à Jason mais est mort.`);
      cible.pointsDeVie = 0;
      jason.pointsDeVie -= 15;
    }
  }
  
  // Fonction pour vérifier si Jason est mort ou si tous les survivants sont morts
  function jeuEnCours() {
    if (jason.pointsDeVie <= 0) {
      console.log("Jason est mort. Les survivants ont gagné!");
    } else if (survivants.every((survivant) => survivant.pointsDeVie <= 0)) {
      console.log("Les survivants ont été tous tués. RIP à tous les survivants.");
    } else {
      attaqueJason();
      jeuEnCours();
    }
  }
  
  // Début du jeu
  jeuEnCours();
  
  // Affichage des morts
  let morts = survivants.filter((survivant) => survivant.pointsDeVie <= 0);
  if (morts.length > 0) {
    console.log("Les morts sont : ");
    morts.forEach((mort) => console.log(mort.nom));
  }