//Desafio: Dado o número de pessoas num estúdio sendo 420, apenas 135 dessas pessoas voltaram ao estúdio
//após o intervalo. Calcular o percentual de pessoas que voltaram ao estúdio após o intervalo

var numeroPessoas = 420;
var numeroVoltaram = 135;
var numeroNaoVoltaram = numeroPessoas - numeroVoltaram;
var porcentagemVoltaram = (numeroVoltaram/numeroPessoas)*100

console.log(`A porcentagem de pessoas que voltaram após o intervalo é ${porcentagemVoltaram.toFixed(2)}%`);

