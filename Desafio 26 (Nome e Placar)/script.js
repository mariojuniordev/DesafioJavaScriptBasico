var jogadores = [{nome: 'amy', placar: 100},{nome: 'david', placar: 100}, {nome: 'heraldo', placar: 50},{nome: 'aakansha', placar: 75}, {nome: 'aleksa', placar: 150}];

function ordenacao(jogadores){
  jogadores.sort((a,b) =>{
    if(a.placar < b.placar){
      return 1;
    } else if(a.placar > b.placar){
      return -1;
    } else if (a.placar === b.placar) {
      if(a.nome > b.nome){
        return 1;
      } else {
        return -1;
      }
    }
  });

  for(let jogador of jogadores){
    console.log(`${jogador.nome} ${jogador.placar}` );
  }

}


ordenacao(jogadores);