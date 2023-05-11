Crie um algoritmo que adicione produtos em um carrinho de compras de uma loja virtual.
Para isso crie um objeto para estruturar os dados desse carrinho de compras. Será necessário armazenar a lista de produtos que foram adicionados pelo usuario e informações sobre o pagamento. Sabendo que:

- Todo produto deve possuir NOME, QUANTIDADE e PREÇO UNITÁRIO, sendo estes, informados pelo usuário;

- O carrinho de compras deve possuir a LISTA DE PRODUTOS, TOTAL DA COMPRA e dados sobre o PAGAMENTO escolhido pelo usuário;

- O PAGAMENTO deve possuir a MODALIDADE escolhida pelo usuário, sendo valores válidos para essa propriedade apenas: CREDITO, DEBITO, PIX e DINHEIRO; O sistema não deve aceitar outro valor como forma de pagamento;

- O PAGAMENTO deve possuir QUANTIDADE DE PARCELAS, DESCONTO, ACRÉSCIMO e VALOR DA PARCELA além da MODALIDADE

- Se a modalidade escolhida pelo usuário for CREDITO, o usuário deverá informar a quantidade de parcelas e o sistema deverá calcular o valor do acréscimo com base na seguinte tabela:
até 5x      - 5%  do total da compra
até 10x     - 10% do total da compra
acima de 10 - 15% do total da compra

OBS: o TOTAL DA COMPRA é a soma de (preço unitario * quantidade) de todos os produtos adicionados na LISTA DE PRODUTOS

- Se a modalidade escolhida pelo usuário for CRÉDITO, o sistema deverá preencher a propriedade desconto com o valor 0 (zero) e calcular o valor da parcela considerando a formula:
(totalCompra + acrescimo) / quantidadeParcelas

- Se a modalidade escolhida pelo usuário for DÉBITO, PIX ou DINHEIRO o sistema deverá preencher a propriedade QUANTIDADE DE PARCELAS, ACRESCIMO e VALOR DA PARCELA com o valor 0

- Se a modalidade escolhida pelo usuário for DÉBITO, o sistema deverá calcular e preencher a propriedade DESCONTO com o valor equivalente à 5% sobre o valor da compra;

- Se a modalidade escolhida pelo usuário for PIX ou DINHEIRO, o sistema deverá calcular e preencher a propriedade DESCONTO com o valor equivalente à 10% sobre o valor da compra;

Ao final o sistema deverá mostrar um resumo final sobre o carrinho de compras com:
- Produtos: nome, quantidade, preço unitário e valor total do produto (preço * quantidade)
- Pagamento:
 Se a MODALIDADE for CREDITO mostrar MODALIDADE, TOTAL DA COMPRA, ACRESCIMO, TOTAL COM ACRESCIMO, QUANTIDADE DE PARCELAS e VALOR DA PARCELA
 Se a MODALIDADE for DÉBITO, PIX ou DINHEIRO mostrar MODALIDADE, TOTAL DA COMPRA, DESCONTO e TOTAL COM DESCONTO 