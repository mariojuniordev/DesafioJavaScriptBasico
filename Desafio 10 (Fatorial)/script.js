function fatorial(n){
  var n = prompt('Digite um número inteiro: ');
  for(var i = (n-1); i > 0; i--){
    n = n*i;
  }

  document.write(n);

}

fatorial()