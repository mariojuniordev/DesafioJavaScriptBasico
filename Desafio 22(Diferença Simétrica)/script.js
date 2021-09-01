var m = [2, 4, 5, 9];
var n = [2, 4, 11, 12];

function difference(m, n){

  var result = [];
  
  for (var i = 0; i < m.length; i++) {
    if(n.indexOf(m[i]) === -1){
      result.push(m[i]);
    }
  }

  for (var i = 0; i < n.length; i++) {
    if(m.indexOf(n[i]) === -1){
      result.push(n[i]);
    }
  }

  for (var i = 0; i < result.length; i++){
    console.log(result[i]) ;
  }

}

difference(m, n);

