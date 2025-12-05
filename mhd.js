let buton = document.getElementById("btn");
let zone = document.getElementById("resultat");
bouton.addEventListener("click", function () {
    let caracteres = "abc123";
    let motDePasse = "";
    for (let i = 0; i < 6; i++) {
        let indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse = motDePasse + caracteres[indexAleatoire];
    }
    zone.textContent = motDePasse;
});