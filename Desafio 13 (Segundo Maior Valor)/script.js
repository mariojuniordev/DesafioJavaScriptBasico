var myArray = [12, 9, 9, 8, 8, 11, 0, 9, 1];

function secondBiggest(myArray)
{
 let biggestValue = Math.max(...myArray);
 let scnd = biggestValue;
 
 for (let i = 0; i < myArray.length; i++){
     let difference = biggestValue - myArray[i];
      if(difference < scnd && difference !== 0){
     scnd = difference;
 }
 }
 return (biggestValue - scnd);
}

console.log(secondBiggest(myArray));