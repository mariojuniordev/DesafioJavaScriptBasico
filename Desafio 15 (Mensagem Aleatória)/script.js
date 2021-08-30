function randomMessage(){

  let x  = Math.random();

  if (x <= 0.33) {
    return 'Random Message!!!'
  } else if ( x > 0.33 && x <= 0.66){
    return 'Random Message louder!!!!'
  } else {
    return 'Random Message Crazy louder!!!!'
  }

}

console.log(randomMessage());
console.log(randomMessage());
console.log(randomMessage());
console.log(randomMessage());
console.log(randomMessage());
console.log(randomMessage());




