let buton = document.getElementById("btn");
let zone = document.getElementById("resultat");
buton.addEventListener("click", function () {
    let caracteres = "abc123";
    let motDePasse = "";
    for (let i = 0; i < 6; i++) {
        let indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse = motDePasse + caracteres[indexAleatoire];
    }
    zone.textContent = motDePasse;
});
const fruits = ["pomme", "banane", "cerise"];
console.log(fruits[0]);
const personne = {
    nom : "Mouhamed",
    age : 18,
    ville : "Libreville",
}
console.log(personne.nom);
function add(a, b) {
    return a - b;
}
const somme = add(5, 3);
console.log(somme);
const ajouter = (a, b)=> a+b;
console.log(ajouter(4, 7));
const canVote = (age)=> {
    if (age >= 18) {
        return "Peut voter";
    } else {
        return "Ne peut pas voter";
    }
}
console.log(canVote(20));
console.log(canVote(16));
for (let i = 0; i < 5; i++) {
    console.log (i);
}