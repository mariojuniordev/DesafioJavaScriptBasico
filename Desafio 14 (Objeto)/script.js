function myObj(a, b){
  var myVar = {
    largura: a,
    comprimento: b,
    perimetro: 2*(a+b),
    area: a*b
  }

  return myVar;

}

console.log(myObj(4, 5));