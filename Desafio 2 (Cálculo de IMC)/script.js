//IMC = Peso/Altura**2

var peso = prompt("Digite o seu peso: ");
var altura = prompt("Digite a sua altura: ");
var imc = peso/altura**2;

if (imc <= 17) {
  document.write(`O seu IMC é de ${imc.toFixed(2)} e você está muito abaixo do peso.`);
} else if (imc > 17 && imc <= 18.49) {
  document.write(`O seu IMC é de ${imc.toFixed(2)} e você está Abaixo do Peso.`);
} else if (imc > 18.49 && imc <= 24.99) {
  document.write(`O seu IMC é de ${imc.toFixed(2)} e seu peso é normal.`);
} else {
  document.write(`O seu IMC é de ${imc.toFixed(2)} e você está acima do peso.`);
}