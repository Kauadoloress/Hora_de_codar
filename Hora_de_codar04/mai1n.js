//1.Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

// function cadastrar() {
//     let numberalunos = 0;
//     let nomealuno = [""];


//     while (true) {
//         let namee = (prompt("Digite o nome do aluno:"));

//         if (namee.toUpperCase() == "PARE") {
//             break
//         }else{
//             nomealuno.push(namee);
//             numberalunos++;
//         }
//     }

//     if (numberalunos > 0) {
//         document.write(`O número de alunos: ${numberalunos}  <br> Lista de alunos: ${nomealuno.join("<br>")}`);
//     }else{
//         document.write("Nenhum aluno cadastrado");
//     }  
// }

// cadastrar();

//2.Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

// function verificarPlaneta(){
//     let planet =["TERRA", "MARTE", "PLUTÃO", "VÊNUS", "JÚPITER", "SATURNO"];



//     while(true){

//         let digitar = prompt("Digite um nome do planeta");
//         let digitarplaneta = digitar.toUpperCase();
//         if(planet.includes(digitarplaneta)){
//             alert("Planeta informado existe");
//             break
//         }else{
//             alert("Planeta informado não existe");

//         }



//     }


// }

// verificarPlaneta()

//3.Vamos criar uma lista de compras;Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas; Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista"; Peça novamente para o usuário digitar o nome de uma fruta para ser removida; Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado"; Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

function listMercado() {
    let frutas = ["maçã", "banana", "laranja", "uva", "morango", "abacaxi"];

    while (frutas.length > 0) {
        alert(frutas);
        let nomefruta = prompt("Digite o nome da fruta");

        let nomefruit = nomefruta.toLowerCase();

        if (frutas.includes(nomefruit)) {
            let removee = frutas.indexOf(nomefruit);
            frutas.splice(removee, 1);
        } else {
            alert("Fruta indisponível")
            break
        }
    }

   alert("Compra finalizada")

} 

listMercado();









