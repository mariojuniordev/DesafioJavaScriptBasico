var n = prompt("Digite um número: ");
n = parseInt(n);

document.write("A tabuada do número digitado é: <br><br>");

for (var i = 1; i <= 10; i++){
  document.write(`${n} x ${i} = ${n*i} <br>`);2
}