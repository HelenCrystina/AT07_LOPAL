/*2 - Crie um jogo simples em JavaScript no qual o programa gera um número aleatório entre 1 e 10.
 O usuário tem até 3 tentativas para adivinhar o número. Após cada tentativa, o programa deve informar 
 se o número está correto, se é maior ou menor do que o número gerado. Ao final, mostre uma mensagem de 
 vitória ou derrota e exiba o número sorteado.*/

 let numSorteado = Math.floor(Math.random() * 11);

 alert("Jogo de acertar o número sorteado");
 let tent1 = parseInt(prompt("Digite um número de 1 a 10 para acertar a número sorteado!!"));
 if (tent1 == numSorteado) {
     alert(`Parabéns, você acertou! O numero sorteado é ${numSorteado}`);
 } else {
        if (tent1<=numSorteado){
            alert("Digite um número menor")
        }else{
            alert("Digite um número maior")
        }
     let tent2 = parseInt(prompt("Você so tem mais duas tentativas! Digite outro número entre 1 a 10"));
     if (tent2 == numSorteado) {
         alert(`Parabéns, você acertou! O numero sorteado é ${numSorteado}`);
 
     } else {

            if (tent2<=numSorteado){
                alert("Digite um número menor")
            }else{
                alert("Digite um número maior")
            }
 
         let tent3 = parseInt(prompt("Você só tem mais uma tentativas! Digite um numero entre 1 a 10"));
         if (tent3 == numSorteado) {
             alert(`Parabéns, você acertou na última tentativa! O numero sorteado é ${numSorteado}`);
 
         } else {
             alert(`Você perdeu, acabaram as suas tentativas. E o número sorteado era: ${numSorteado} `);
         }
     }
 }