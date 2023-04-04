// 1. Crie uma variável JavaScript e coloque nela o valor de sua idade. Mostre no html usando o document.write() o dado contido na variável junto da frase "Minha idade é x anos", sendo "x" o valor armazenado na sua variável.

// const idade = prompt("Digite a sua idade");

// document.write(`Minha idade é ${idade} anos`); 


// =============================================================================


// 2. Crie três variáveis JavaScript, em duas delas atribua os valores que você quiser e na outra atribua o valor da soma das duas primeiras variáveis. Apresente valor da soma no documento html junto da frase "A resultado da soma de x e y é z", sendo x o valor armazenado na primeira variável, y o valor armazenado segunda variável e z o valor armazenado na terceira variável

// const x = 15;
// const y = 10;
// const z = x + y;
// document.write(`O resultado da soma de ${x} e ${y} é ${z}`);

// =============================================================================

// 3. Crie três variáveis, na primeira variável coloque o total de uma compra, por exemplo 149.90. Na segunda variável coloque a quantidade de parcelas, por exemplo 2. Na terceira variável coloque o valor da parcela. Apresente no documento html as seguintes informações:
//  "O valor total da compra foi R$_,_"
//  "Forma de pagamento: _x de R$_,_"

// const valorTotalDaCompra = 149.90
// const quantidadeDeParcelas = 2
// const valorDaParcela = valorTotalDaCompra / quantidadeDeParcelas 

// document.write(`O valor total da compra foi R$ ${valorTotalDaCompra}.</br> Forma de pagamento: R$ ${quantidadeDeParcelas}x de R$ ${valorDaParcela}`);

// =========================================================================================

// 4. Crie duas variáveis. Na primeira coloque um total de minutos e defina um valor para ela (por exemplo, minutos = 120). Na segunda coloque o total em segundos destes minutos armazenados na primeira variável. Apresente no documento html a seguinte informação: "_ minutos equivale à _ segundos!"

// =============================================================================


// 5.Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de 0 à 10). Calcule a média das notas e armazene na quinta variável criada. Apresente no documento html a seguinte informação: 
// "O aluno _____ ficou com média _,_"

// const name = "Cleitinho"
// const grade1 = 10
// const grade2 = 7.9
// const grade3 = 8.7
// const finalGrade = (grade1 + grade2 + grade3)/3

// document.write(`O aluno ${name} ficou com média ${finalGrade.toFixed(2)}`)

// =============================================================================

// 6. Desenvolva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.

// let A = 10
// let B = 20
// let aux = A // aux agora é 10
// A = B // A agora é 20
// B = aux //  
// document.write(`A variavel A contem: ${A}, e a B: ${B}`)

// =======================================================================================

// 7. Desenvolva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

// const nullWishes = 475
// const whiteWishes = 531
// const validWishes = 1755

// const totalWishes = nullWishes + whiteWishes + validWishes

// const nullPercents = (nullWishes * 100) / totalWishes
// const whitePercents = (whiteWishes * 100) / totalWishes
// let validPercents = (validWishes * 100) / totalWishes

// console.log(`O total de eleitores foi de ${totalWishes}`);
// console.log(`O total de votos nulos foi de ${nullWishes} votos, representando ${nullPercents}% do total de votos`);
// console.log(`O total de votos brancos foi de ${whiteWishes} votos, representando ${whitePercents}% do total de votos`);
// console.log(`O total de votos válidos foi de ${validWishes} votos, representando ${validPercents}% do total de votos`);

// =================================================================================================

// 8. Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais;
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

// const valor_1 = Number (prompt ("Digite o valor 1"))
// const valor_2 = Number (prompt ("Digite o valor 2"))

// if (valor_1 == valor_2){
//   alert ("numeros iguais")
// } else if (valor_1 > valor_2){
//   alert ("Primeiro é maior")
// } else {
//   alert ("Segundo é maior")
// }

// =============================================================================

// 9. As maçãs desta estação custam R$0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Desenvolva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

// const quantidade = Number(prompt('Quantidade de maçãs'))
// let totalCompra = 0

// if (quantidade < 12){
//   totalCompra = quantidade * 0.3
//   document.write(`As maçãs vão custar R$ ${totalCompra}`)
// } else {
//   totalCompra = quantidade * 0.25
//   document.write(`As maçãs vão custar ${totalCompra}`)
// }

// =============================================================================



// 11. Crie um algoritmo que armazene um número inteiro positivo, e gere um alerta com as seguintes mensagens: 
// “Número é par!”, se o valor armazenado for par; 
// “Número é impar!”, se o valor armazenado for ímpar;

// const value = Number(prompt('Digite um valor inteiro positivo'))

// if (value % 2 === 0) {
//   document.write('par')
// } else {
//   document.write('impar')
// }

