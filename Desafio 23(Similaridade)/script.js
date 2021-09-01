var s = 'ababaa'

function somaSimilaridade(s)
{

    //Informe seu código aqui
    const arraySufix = [];
    let soma = 0;
    let arrayS = s.split('');
    
    for(let i = 0; i < s.length; i++){
        arraySufix[i] = [];
        for(let j = i; j <= s.length -1; j++){
            arraySufix[i].push(arrayS[j])
        }
    }
    
    for(let k = 0; k < arraySufix.length; k++){
        for(let m = 0; m < arraySufix[k].length; m++){
            if(arraySufix[k][m] === arrayS[m]){
                soma += 1;
            } else {
                break;
            }
        }
    }

    return soma;

}

console.log(somaSimilaridade(s))