let nombreCoup; //Déclaration d'une variable
let emplacement; //Déclaration d'une variable
let gagnant; //Déclaration d'une variable
let table = document.getElementById("center"); //Initialisation de la table de jeu, avec l'id center
let cells = table.getElementsByTagName("td"); //Initialisation des cellules du jeu, avec l'id td  pour l'emplacement cliqué

function checkWin() {
    if (verifEgalite(emplacement["Zonea1"], emplacement["Zonea2"], emplacement["Zonea3"]) || verifEgalite(emplacement["Zoneb1"], emplacement["Zoneb2"], emplacement["Zoneb3"]) || verifEgalite(emplacement["Zonec1"], emplacement["Zonec2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb1"], emplacement["Zonec1"]) || verifEgalite(emplacement["Zonea2"], emplacement["Zoneb2"], emplacement["Zonec2"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb3"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb2"], emplacement["Zonec1"])) {
        if (gagnant === 'croix') {
            document.getElementById("titre").textContent = "Les croix ont gagné";
        } else {
            document.getElementById("titre").textContent = "Les ronds ont gagné";
        }
        document.getElementById("rejouer").style.display = "initial";
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.pointerEvents = 'none';
        }
    }
} // Initialisation de toutes les versions gagnantes, un if / else suivant si les croix ou ronds le réalisent enfin le rejouer et remise à zéro de la grille

function verifEgalite(zone1, zone2, zone3) {
    if (zone1 === zone2 && zone1 === zone3 && zone1 !== 'vide') {
        gagnant = zone1;
        return true;
    } else {
        return false;
    }
} // Gestion du cas ou les ronds et les croix finissent à égalité pour donner le match nul

window.addEventListener('load', (event) => {
    initialisation();
}); // chargement et initialisation du jeu

function initialisation() {
    document.getElementById("rejouer").style.display = "none";
    document.getElementById("titre").textContent = "Super Morpion";
     nombreCoup = 0;
     gagnant = undefined;
     emplacement = {
        Zonea1: "vide",
        Zonea2: "vide",
        Zonea3: "vide",
        Zoneb1: "vide",
        Zoneb2: "vide",
        Zoneb3: "vide",
        Zonec1: "vide",
        Zonec2: "vide",
        Zonec3: "vide"
    };
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.style.backgroundPosition = "left";
        cell.style.pointerEvents = 'auto';
    }

} // Mise en forme de l'initialisation du jeu

function jouer(zone) {
    if (nombreCoup % 2 === 1) {
        document.getElementById(zone).style.backgroundPosition = "center";
        emplacement[zone] = "croix";
    } else {
        document.getElementById(zone).style.backgroundPosition = "right";
        emplacement[zone] = "rond";
    }
    document.getElementById(zone).style.pointerEvents = 'none';
    nombreCoup++;
    checkWin();
    console.log(gagnant);
    if (nombreCoup == 9 && typeof gagnant == "undefined") {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    }
} // Fonction de jeu, démarrage par un rond sur la case cliquée, place ensuite une croix vérifie si gegne ou pas et continue jusqu'à ce que 3 se suivent du même signe, une condition aussi à partir de 9 cliques pour mettre en match nul et réinitialiser le jeu 
