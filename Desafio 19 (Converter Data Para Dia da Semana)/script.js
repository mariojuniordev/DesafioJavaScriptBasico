function weekDay(year, month, day){
  var date = (new Date(year, month-1, day)).getDay();
  var days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  return days[date];

}

var x = '11/10/2010';

function convertDate(x){
  
   x = x.split('/');

   var day = x[0];
   var month = x[1];
   var year = x[2];

   return weekDay(year, month, day);

}

console.log(convertDate(x));

