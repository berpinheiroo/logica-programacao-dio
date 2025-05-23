const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl.question("Digite a quantidade de vitórias do seu herói: ", function(vit){
    rl.question("Digite a quantidade de derrotas do seu herói: ", function(der){
    let saldoVit = vit - der

    let nivel;
    if (saldoVit < 10) {
        nivel = "Ferro"
    } else if (saldoVit > 11 && saldoVit < 20) {
        nivel = "Bronze"
    } else if (saldoVit > 21 && saldoVit < 50) {
        nivel = "Prata"
    } else if (saldoVit > 51 && saldoVit < 80) {
        nivel = "Ouro"
    } else if (saldoVit > 81 && saldoVit < 90) {
        nivel = "Diamante"
    } else if (saldoVit > 91 && saldoVit < 100) {
        nivel = "Lendário"
    } else if (saldoVit >= 101) {
        nivel = "Imortal"
    }

    console.log(`O Herói tem saldo de ${saldoVit} de vitórias e está no nível ${nivel}`)
});
});