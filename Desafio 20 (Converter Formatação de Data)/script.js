var x = '2009-10-11';

function convertDate(x){
  
   x = x.split('-');

   var year = x[0];
   var day = x[1];
   var month = x[2];

   return `${day}/${month}/${year}`;

}

console.log(convertDate(x));

