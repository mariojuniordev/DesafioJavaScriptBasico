var text = prompt('Digite qualquer frase: ');

function missingLetters(text){
  var l = 'abcdefghijklmnoprstuvwxyz';
  var letters = l.split('');
  var missing = [];
  
  for (let letter of letters){
    //Quando o .indexOf() retorna -1 é pq o item n pertence ao array
    if(text.indexOf(letter) === -1){
      missing.push(letter);
    }
  }

  return missing;
}


console.log(missingLetters());
