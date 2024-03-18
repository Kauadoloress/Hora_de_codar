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

if (number3 > 0) {
    alert(`O número ${number3} é positivo`);
} else if (number3 < 0) {
    alert(`O número ${number3} é negativo`);

} else {
    alert("O número informado é igual a zero");
};

//3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let number4 = parseInt(prompt("Digite um número"));
let number5 = parseInt(prompt("Digite um outro número que não seja igual ao primeiro"));
let number6 = parseInt(prompt("Digite um número que não seja iguais aos dois ultimos"));

if (number4 > number5 && number4 > number6) {
    alert(`O número ${number4} é maior`);
} else if (number5 > number4 && number5 > number6) {
    alert(`O número ${number5} é maior`);
} else if (number6 > number4 && number6 > number5) {
    alert(`O número ${number6} é maior`);
} else {
    alert(`Os números informados são iguais`)
};


//4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.4

let number7 = parseInt(prompt("Digite um número"));
let number8 = parseInt(prompt("Digite um outro número que não seja igual ao primeiro"));
let number9 = parseInt(prompt("Digite um número que não seja iguais aos dois ultimos"));

if (number7 > number8 && number7 > number9) {
    maior = number7;
    segundoMaior = number8 > number9 ? number8 : number9;

} else if (number8 > number7 && number8 > number9) {
    maior = number8;
    segundoMaior = number7 > number9 ? number7 : number9;
} else if (number9 > number7 && number9 > number8) {
    maior = number9;
    segundoMaior = number7 > number8 ? number7 : number8;
};

let somaM = maior + segundoMaior;

alert(`A soma dos ${maior} e do segundo meior ${segundoMaior} é de ${somaM}`);

//5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

let N1 = parseInt(prompt("Digite um número"));
let N2 = parseInt(prompt("Digite um número"));
let N3 = parseInt(prompt("Digite um número"));
let N4 = parseInt(prompt("Digite um número"));
let N5 = parseInt(prompt("Digite um número"));
let N6 = parseInt(prompt("Digite um número"));

alert(`Os números informados são ${N1}, ${N2}, ${N3}, ${N4}, ${N5}, ${N6}`);

let SomaTd = parseInt((N1 + N2 + N3 + N4 + N5 + N6) / 6);

alert(`A média aritmética é de ${SomaTd}`);

//6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

let Nu1 = parseInt(prompt("Digite um número"));
let Nu2 = parseInt(prompt("Digite outro número"));
let Nu3 = parseInt(prompt("Digite um número diferente dos dois ultimos"));
let Nu4 = parseInt(prompt("Digite um número diferente dos três ultimos"));
let NuMaior;

if (Nu1 > Nu2 && Nu1 > Nu3 && Nu1 > Nu4) {
    NuMaior = Nu1;
} else if (Nu2 > Nu1 && Nu2 > Nu3 && Nu2 > Nu4) {
    NuMaior = Nu2;
} else if (Nu3 > Nu1 && Nu3 > Nu2 && Nu3 > Nu4) {
    NuMaior = Nu3;
} else {
    NuMaior = Nu4;
}

alert(`O primeiro número é ${Nu1} é o ultimo ${Nu4} e o maior é ${NuMaior}`);

//7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  

let NuM1 = parseInt(prompt("Digite um número"));
let NuM2 = parseInt(prompt("Digite um número"));
let NuM3 = parseInt(prompt("Digite um número"));
let NuM4 = parseInt(prompt("Digite um número"));
let NuM5 = parseInt(prompt("Digite um número"));
let NuM6 = parseInt(prompt("Digite um número"));

//Vinf = valor inferior

let Vinf = 0;

if (NuM1 < 72) {
    Vinf += NuM1;
}
if (NuM2 < 72) {
    Vinf += NuM2;
}
if (NuM3 < 72) {
    Vinf += NuM3;
}
if (NuM4 < 72) {
    Vinf += NuM4;
}
if (NuM5 < 72) {
    Vinf += NuM5;
}
if (NuM6 < 72) {
    Vinf += NuM6;
}

alert(`A soma dos valores inferiores é de ${Vinf} e os números informados ${NuM1}, ${NuM2}, ${NuM3}, ${NuM4},${NuM5}, ${NuM6}`);

//8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite um número"));
let num3 = parseInt(prompt("Digite um número"));
let num4 = parseInt(prompt("Digite um número"));

if (num1 > 0 && num1 < 10 && num2 > 0 && num2 < 10 && num3 > 0 && num3 < 10 && num4 > 0 && num4 < 10) {
    let somaMed = (num1 + num2 + num3 + num4) / 4;
    if (somaMed > 5) {
        alert(`Você passou`);
    } else {
        alert(`Você não passou, tente novamente`)
    }
} else {
    alert("Erro, informe novamente os números");
}

//9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

let yeArs = parseInt(prompt("Digite seu ano de nascimento "));
let Votar = 2024 - yeArs

if (Votar >= 16) {
    alert("Você pode votar este ano");
} else {
    alert("Você não pode votar, pois não atingiu a idade mínima");
}

//10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

let genEro = prompt("Qual seu Genêro? 1-Masculino/2-Feminino")
let altUra = prompt("Digite sua altura")
let pEsoideal;

if (genEro == 1) {
    pEsoideal = parseInt(72.7 * altUra) - 58;
    alert(`Seu peso ideal é ${pEsoideal} kg`);
} else if (genEro == 2) {
    pEsoideal = parseInt(62.1 * altUra) - 44.7
    alert(`Seu peso ideal é ${pEsoideal} kg`);
} else {
    alert("ERRO: informações incorrentas");
}

//11. Uma micro calculadora
//Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
//O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 
//Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações

let Aritmetics = parseInt(prompt("Qual operação deseja ultilizar? 1-Adição/2-Subtração/3-Divisão/4-Multiplicação"));
let NNumber1 = parseFloat(prompt("Digite um número:"));
let NNumber2 = parseFloat(prompt("Digite outro número:"));
let calc;

if (Aritmetics == 1) {
    calc = NNumber1 + NNumber2;
    alert(`O resulta da adição é ${calc}`);
} else if (Aritmetics == 2) {
    calc = NNumber1 - NNumber2;
    alert(`O resultado da subtração é ${calc}`)
} else if (Aritmetics == 3) {
    calc = NNumber1 / NNumber2;
    alert(`O resultado da adição é ${calc}`);
}else if(Aritmetics == 4){
    calc = NNumber1 * NNumber2;
    alert(`O resultado da multiplicação é ${calc}`)
}else{
    alert("ERRO: tente novamente");
}

let number6 = parseInt(prompt("Digite um número que não seja iguais aos dois ultimos"));

if(number4 > number5 || number4 > number6 && number){
    
};
