
var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ?  
console.log('Jogadores são Válidos') : console.log('Jogadores Inválidos'); 

var $placar = jogador1 && jogador2;
console.log("O placar do jogo => jogador1:", jogador1,"jogador2:", jogador2);  

if (jogador1 > 0) {
    placar = jogador1 > jogador2;
    console.log('Jogador 1 Marcou ponto');
}

else if (jogador2 > 0) {
        placar = jogador2 > jogador1;
        console.log('Jogador 2 Marcou ponto');
}

 else {
 console.log('Ninguem Marcou ponto');
 }


switch (placar) {
 case placar = jogador1 > jogador2:
    console.log('Jogador 1 ganhou!');
    break;
 case placar = jogador2 > jogador1:
    console.log('Jogador 2 ganhou!');
    break; 
    default:
        console.log('Ninguem Marcou Ganhou');
}

