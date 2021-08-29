function ehPrimo(n){
  var n = prompt('Digite um número: ');
  var qtdDivisores = 0;

  for (var i = 1; i <= n; i++){
    if(n % i == 0){
      qtdDivisores++;
    } 
  }
  
  if (qtdDivisores == 2) {
    document.write('O número Digitado é primo!!!');
  } else {
    document.write('O número Digitado não é primo!!!');
  }
}



ehPrimo();