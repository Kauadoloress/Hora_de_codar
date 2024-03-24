
//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite outro número"));
let newNum = 0;

while (number2 <= 0) {
  number2 = prompt("Digite um número maior que 0")

}

let soma = number1 / number2;

alert(`A divisão do ${number1} com ${number2} é de ${soma} `);

//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

let i = 30;

while (i >= 0) {
  document.write(`${i} <br>`);
  i--;
}

document.write(`EXPLOSÃO!!!`);

//Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
//Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

let ii = 10;

while (ii > 0) {
  console.log(ii);
  ii--;
}

//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

let NUM1 = 0;
let NUM2 = 0;
let iii = 15;

while (iii <= 100) {
  NUM1 += iii;
  NUM2++;
  iii++;
}

let media = NUM1 / NUM2;

alert(`A média é ${media}`);

//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

let Num1 = parseInt(prompt("Digite um número"));
let Num2 = parseInt(prompt("Digite outro número"));

//Validar se o primeiro número informado e menor que o segundo
let validacao = Num1 <= Num2 ? true : alert("O  primeiro número informado de ser menor que o segundo.")

let Med2 = (Num1 + Num2) / 2;

//Média entre os números informados
let Ssoma = 0;
let Qquantidade = 0;
let Ii = Num1 + 1;

while (Ii < Num2) {
  Ssoma += Ii;
  Qquantidade++;
  Ii++;
}
let SsomaEntreNum = validacao ? Ssoma / Qquantidade : 0;

alert(`A média dos ${Num1} e ${Num2} é de ${Med2}`);
alert(`E a média dos números entre ${Num1} e ${Num2} é de ${SsomaEntreNum}`);

//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.


let aLunoaprovado = 0;
let aLunoreprovado = 0;



while (true) {
  let Nota1 = parseFloat(prompt("Informe sua nota:"));
  let Nota2 = parseFloat(prompt("Informse sua segunda nota:"));

  let mediaNota = (Nota1 + Nota2) / 2;

  mediaNota >= 9.5 ? (alert("Aprovado!!!"), aLunoaprovado++) : (alert("Reprovado!!!"), aLunoreprovado++);


  let outraMedia = prompt("Deseja calcular a nota de outro aluno? S/N");

  if (outraMedia === "N" || outraMedia === "n") {
    alert("Finalizado")
    break;
  } else {
    alert("Iniciando novo calculo de nota");
  }


}

alert(`Alunos aprovados ${aLunoaprovado} e alunos reprovados ${aLunoreprovado}`);

//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

// Variáveis para armazenar as notas e a média
let notasS = [];
let somaANotas = 0;
let mediAa = 0;

// Loop para ler as 6 notas do aluno
let iIi = 0;
while (iIi < 6) {
  let notaA = parseFloat(prompt(`Digite a nota  ${iIi + 1} : `));
  while (notaA < 0 || notaA > 10) {
    alert("Nota inválida!");
    nota = parseFloat(prompt(`Digite a nota  ${iIi + 1} : `));
  }

  // Armazenamento da nota válida e atualização da soma
  notasS.push(notaA);
  somaANotas += notaA;

  // Incrementação do contador
  iIi++;
}

mediAa = somaANotas / notasS.length;

alert(`A média final do aluno é: ${mediAa}`);

//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
//N  é um valor informado pelo usuário

let n = parseInt(prompt("Digite um valor N: "));

let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

//9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

let int = 101;

let count = 0;
while (count < 10) {
  console.log(i);
  i++;
  count++;
}

//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

let nN = parseInt(prompt("Digite um valor N: "));


let iNt = 1;
while (i <= n) {
  console.log(`Tabuada do ${i}:`);
  let j = 1;
  while (j <= 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo

let dentro = 0;
let fora = 0;

let inTT = 1;
while (inTT <= 10) {

  let valor = parseInt(prompt("Digite o valor " + i + ": "));

  if (valor >= 24 && valor <= 42) {
    dentro++;
  } else {
    fora++;
  }

  inTT++;
}

console.log(`Valores dentro do intervalo: ${dentro}`);
console.log(`Valores fora do intervalo: ${fora}`);





//1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

let number1 = parseInt(prompt("Digite um número"));
let number2 = parseInt(prompt("Digite outro número"));
let newNum = 0;

while (number2 <= 0) {
  number2 = prompt("Digite um número maior que 0")
}

let soma = number1 / number2;

alert(`A divisão do ${number1} com ${number2} é de ${soma} `);

//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

let i = 30;

while (i >= 0) {
  document.write(`${i} <br>`);
  i--;
}

document.write(`EXPLOSÃO!!!`);

//Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
//Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

let ii = 10;

while (ii > 0) {
  console.log(ii);
  ii--;
}

//4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

let NUM1 = 0;
let NUM2 = 0;
let iii = 15;

while (iii <= 100) {
  NUM1 += iii;
  NUM2++;
  iii++;
}

let media = NUM1 / NUM2;

alert(`A média é ${media}`);

//5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

let Num1 = parseInt(prompt("Digite um número"));
let Num2 = parseInt(prompt("Digite outro número"));

//Validar se o primeiro número informado e menor que o segundo
let validacao = Num1 <= Num2 ? true : alert("O  primeiro número informado de ser menor que o segundo.")

let Med2 = (Num1 + Num2) / 2;

//Média entre os números informados
let Ssoma = 0;
let Qquantidade = 0;
let Ii = Num1 + 1;

while (Ii < Num2) {
  Ssoma += Ii;
  Qquantidade++;
  Ii++;
}
let SsomaEntreNum = validacao ? Ssoma / Qquantidade : 0;

alert(`A média dos ${Num1} e ${Num2} é de ${Med2}`);
alert(`E a média dos números entre ${Num1} e ${Num2} é de ${SsomaEntreNum}`);

//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.


let aLunoaprovado = 0;
let aLunoreprovado = 0;



while (true) {
  let Nota1 = parseFloat(prompt("Informe sua nota:"));
  let Nota2 = parseFloat(prompt("Informse sua segunda nota:"));

  let mediaNota = (Nota1 + Nota2) / 2;

  mediaNota >= 9.5 ? (alert("Aprovado!!!"), aLunoaprovado++) : (alert("Reprovado!!!"), aLunoreprovado++);


  let outraMedia = prompt("Deseja calcular a nota de outro aluno? S/N");

  if (outraMedia === "N" || outraMedia === "n") {
    alert("Finalizado")
    break;
  } else {
    alert("Iniciando novo calculo de nota");
  }


}

alert(`Alunos aprovados ${aLunoaprovado} e alunos reprovados ${aLunoreprovado}`);

//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
//Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

// Variáveis para armazenar as notas e a média
let notasS = [];
let somaANotas = 0;
let mediAa = 0;

// Loop para ler as 6 notas do aluno
let iIi = 0;
while (iIi < 6) {
  let notaA = parseFloat(prompt(`Digite a nota  ${iIi + 1} : `));
  while (notaA < 0 || notaA > 10) {
    alert("Nota inválida!");
    nota = parseFloat(prompt(`Digite a nota  ${iIi + 1} : `));
  }

  // Armazenamento da nota válida e atualização da soma
  notasS.push(notaA);
  somaANotas += notaA;

  // Incrementação do contador
  iIi++;
}

mediAa = somaANotas / notasS.length;

alert(`A média final do aluno é: ${mediAa}`);

//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
//N  é um valor informado pelo usuário

let nn = parseInt(prompt("Digite um valor N: "));

let iI = 1;
while (i <= n) {
  console.log(i);
  i++;
}

//9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

let intT = 101;

let count = 0;
while (count < 10) {
  console.log(i);
  i++;
  count++;
}

//10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

let nN = parseInt(prompt("Digite um valor N: "));


let iNt = 1;
while (i <= n) {
  console.log(`Tabuada do ${i}:`);
  let j = 1;
  while (j <= 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}

//11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo

let dentro = 0;
let fora = 0;

let inTT = 1;
while (inTT <= 10) {

  let valor = parseInt(prompt("Digite o valor " + inTT + ": "));

  if (valor >= 24 && valor <= 42) {
    dentro++;
  } else {
    fora++;
  }

  inTT++;
}

console.log(`Valores dentro do intervalo: ${dentro}`);
console.log(`Valores fora do intervalo: ${fora}`);



