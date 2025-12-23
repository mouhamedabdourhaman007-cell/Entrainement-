const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "%": (a, b) => a % b,
  "/": (a, b) => b === 0 ? "Division par zéro" : a / b
};
const getValue = id => Number(document.getElementById(id).value);
const getOp = () => document.getElementById("op").value;
const show = msg => document.getElementById("res").textContent = msg;
const calculer = () => {
  const a = getValue("a");
  const b = getValue("b");
  const op = getOp();
  const calc = operations[op];
  show(
    !calc || isNaN(a) || isNaN(b)
      ? "Entrée invalide"
      : "Résultat : " + calc(a, b)
  );
};