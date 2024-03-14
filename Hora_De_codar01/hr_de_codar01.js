//1- Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.

alert("Excercício 1")

let nome_do_carro = "Fusca";

alert(nome_do_carro);

//2- Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".

alert("Excercício 2")

let name_user = prompt("Digite seu nome");

alert(`Olá, ${name_user}`);

//3-Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".

alert("Excercício 3")

let idade_user = prompt("Digite sua idade");

alert(`Olá, ${name_user}, sua idade é ${idade_user} anos`);

//4-Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

alert("Excercício 4")

//Área do Retângulo

alert("Calcule a Área do retângulo")

let number1 = parseInt(prompt("Digite uma base para retângulo"));
let number2 = parseInt(prompt("Digite uma altura para retângulo"));

let A_retangulo = number1 * number2;

alert(`A área do retângulo é de ${A_retangulo}`);

//Área do Quadrado

alert("Calcule a Área do quadrado");

let number3 = parseInt(prompt("Digite um número"));
let quadrado = number3 * number3;

alert(`A área do qudrado é de ${quadrado}`);

//Área do Losango

alert("Calcule a área do Losango")

let number4 = parseInt(prompt("Digite um número para diagonal maior"));
let number5 = parseInt(prompt("Digite um número para diagonal menor"));

let A_losango = (number4 * number5) / 2;

alert(`A área do losango é de ${A_losango}`);

//Área do Trapézio

alert("Calcule a área do trapézio");

let baseM = parseInt(prompt("Digite um número para a base maior"));
let baseN = parseInt(prompt("Digite um número para a base menor"));
let altura1 = parseInt(prompt("Agora digite um número para a altura"));

let A_trapezio = ((numberM + numberN) * altura1) / 2;

alert(`A área do trapézio é de ${A_trapezio}`);

//Área do paralelogramo

alert("Calcule a área do paralelogramo");

let number8 = parseInt(prompt("Digite a base para o paralelogramo"));
let altura2 = parseInt(prompt("Digite a altura para o paralelogramo"));

let A_paralelogramo = number8 * altura2;

alert(`A área do paralelogramo é de ${A_paralelogramo}`);

//Área do Triângulo

alert("Calcule a área do triângulo");

let number9 = parseInt(prompt("digite a base do triângulo"));
let altura3 = parseInt(prompt("Digite a altura do trângulo"));

let A_triangulo = (number9 * altura3) / 2;

alert(`A área do triângulo é de ${A_triangulo}`);

//Área do Circulo

alert("Calcule a área do círculo");

let raio = parseInt(prompt("Digite o raio do círculo"));

let A_circulo = 3.14 * (raio * raio);

alert(`A área do circulo é de ${A_circulo}`);







