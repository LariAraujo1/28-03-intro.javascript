//formal- variavel espaço reservado na emoria para armazenar algo
// informal-variavel caixinha

let nome ="Rodolfo"
console.log(nome)

nome="Rodolfo Gonçalves"
console.log(nome)

const idade= 38
console.log(idade)

// idade=39
// console.log(idade) // uma constante é uma variavel que não muda, por isso esse da erro, então para alterar a const anterior usa-se let

console.log(`O nome do usuario é: ${nome} esssa pessoa tem ${idade} anos`)

// const name1 = prompt("Digite o seu nome")
// console.log("O nome digitado foi: " + name1)
// ou console.log(`O nome digitado foi ${name1}`) 
//ou
// alert(`O nome digitado foi ${name1}`)

console.log("teste")
console.error("Deu ruim!🤣")
console.warn("Alerta 😯😰😅")

const m= 5
if(m >=5){
    console.log("M é maior que 5" + " valor de M ="+ m)

}

// const user = prompt("Digite o seu nome")
// const user=`Rodolfo`

// if(user== `Rodolfo`){
//     console.log(`Bem vindo ${user}`)
// }else{
//     console.log(´uhm... novo por aqui ${user}´)
// }

// const nota=prompt("Digita a média final")

// if(nota >=7){
//     console.log("Aprovado")
// }else{
//     console.log("reprovado")
// } 




// const nota=prompt("Digita a média final")

// if(nota >=7){
//     console.log("Aprovado")
// }else if (nota > 5 && nota <6){
//     console.log("Recuperação forte")
// }else if (nota >=6){
//     console.log("Trabalho geral")
// }else{
//     console.log("reprovado") 
// } 


// Tudo digitado no prompt é uma string mesmo numeros por isso quando é necessario colocar numeros usa-se 
// const diaSemana= ParseInt(prompt("Dia da Semana"))

// if(diaSemana ==1){
//     alert("Segunda")
// }
//  else if(diaSemana ==2){
//     alert("Terça")
// }
// else if(diaSemana ==3){
//     alert("Quarta")
// }
// else if(diaSemana ==4){
//     alert("Quinta")
// }
// else if(diaSemana ==5){
//     alert("Sexta")
// }
// else if(diaSemana ==6){
//     alert("Sabado")
// }
// else if(diaSemana ==7){
//     alert("Domingo")
// }else{
//     alert("Dia Inválido")
// } 

for(let i = 1; i<=100; i++){
    console.log(i);
}  
