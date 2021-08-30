for(let linha of linhas)
    {
        var [a, b, c] = linha.trim().split(' ');
        
        var multiplicacao = 0;
        var aux = 0;
        var soma = 0;
        
        for (var w=1; w <= c; w++) {
            for (var i=0; i < w; i++) {
                multiplicacao = (b * Math.pow(2, i));
                aux = aux + multiplicacao;
            }
            soma = a + aux
            console.log(soma.split(' '));
            aux = 0;
        }
    }
