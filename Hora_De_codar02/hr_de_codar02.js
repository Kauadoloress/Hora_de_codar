//1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite outro número"));

if (number1 > number2) {
    alert(`O maior número é ${number1}`);

} else {
    alert(`o maior número é ${number2}`);
};

//2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

let number3 = parseInt(prompt("Digite um número"));

if (number3 > 0){
    alert(`O número ${number3} é positivo`);
} else if(number3 < 0) {
    alert(`O número ${number3} é negativo`);

} else{
    alert("O número informado é igual a zero");
};

//3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let number4 = parseInt(prompt("Digite um número"));
let number5 = parseInt(prompt("Digite um outro número que não seja igual ao primeiro"));
let number6 = parseInt(prompt("Digite um número que não seja iguais aos dois ultimos"));

if(number4 > number5 || number4 > number6 && number){
    
};
