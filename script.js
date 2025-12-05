let n1 = 10;
console.log(n1);
let n2 = 5;
console.log(n2);
const op = "+"; "-"; "*"; "/"; "%";
let resultat;
if (op === "+"){
    resultat = n1 + n2;
}
else if (op === "-"){
    resultat = n1 - n2;
}
else if (op === "*"){
    resultat = n1 * n2;
}
else if (op ==="/"){
    if (n2 === 0){
        resultat = "Erreur : division par zero impossible";
    }else {
        resultat = n1 / n2;
    }
}
else if (op === "%"){
    resultat = n1 % n2;
}
else {
    resultat = "operateur non valide";
}
if(resultat !== undefined){
    console.log("resultat:" + resultat);
}
