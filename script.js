function calculer(){
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const op = document.getElementById("op").value;
    let r;
    if(op === "+") r = a + b;
    else if(op === "-") r = a - b;
    else if(op === "*") r = a * b;
    else if(op === "/"){
        if(b === 0){
            document.getElementById("res").textContent = "Division par 0 impossible";
            return;
        }
        r = a / b;
    } 
    else {
        document.getElementById("res").textContent = "Opérateur invalide";
        return;
    }
    document.getElementById("res").textContent = "Résultat : " + r;
}