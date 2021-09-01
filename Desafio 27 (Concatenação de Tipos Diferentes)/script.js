segInt = 7;
segFloat = 5.32;
segString = 'Básico';

function operacao(segInt, segFloat, segString)
{
    let priInt = 4;
    let priFloat = 3.17;
    let priString = "JavaScript - ";
    
    //Informe seu código aqui
    console.log(priInt + parseInt(segInt));
    console.log(priFloat + parseFloat(segFloat));
    console.log(priString + String(segString));
}

operacao(segInt,segFloat,segString);
