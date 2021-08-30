//Crie uma função que vai receber um Array de números e retorne qual o menor dos números da lista
function smallestNumber(myArray, smallest){

  var myArray = [3,23,5,566,7,4,6,4,3,2];

  var smallest = myArray[0];

  for (var i = 0; i < myArray.length; i++){
    if (myArray[i] <= smallest){
      smallest = myArray[i];
    }
  }

  return smallest;

}

console.log(smallestNumber());