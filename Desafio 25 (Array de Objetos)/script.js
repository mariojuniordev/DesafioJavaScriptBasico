function quantity(objects) {
  let sum = 0;
  for(let i = 0; i <= objetos.length - 1; i++)
  {
      if(objects[i].x === objects[i].y){
          sum++;
     
      }
  }
  return sum;
}