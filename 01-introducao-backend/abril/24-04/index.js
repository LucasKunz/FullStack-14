const carrinhoCompras = {
  produtos: [],
  pagamento: {},
  totalCompra: 0
}

function addProduto() {
  const produto = {};
  produto.nome = prompt('Digite o nome do produto: ');
  produto.quantidade = Number(prompt('Digite a quantidade de produto: '));
  produto.preco = Number(prompt('Digite o preço do produto: '));
  carrinhoCompras.produtos.push(produto)
  const totalAPagar = produto.quantidade * produto.preco;
  carrinhoCompras.totalCompra += totalAPagar;
}

// - Se a modalidade escolhida pelo usuário for CRÉDITO, o sistema deverá preencher a propriedade desconto com o valor 0 (zero) e calcular o valor da parcela considerando a formula:
// (totalCompra + acrescimo) / quantidadeParcelas

function infoPagamento() {
  const formaPagamento = prompt("digite a forma de pagamenteo CREDITO, DEBITO, PIX e DINHEIRO: ").toLowerCase();

  switch (formaPagamento) {
    case 'credito': case 'crédito':
      const parcelas = Number(prompt("Digite quantas vezes deseja parcelar: "));
      // Outra forma de adicionar
      // carrinhoCompras.pagamento.quantidadeParcelas = parcelas
      // carrinhoCompras.pagamento.modalidade = formaPagamento
      // carrinhoCompras.pagamento.desconto = 0

      carrinhoCompras.pagamento = {
        quantidadeParcelas: parcelas,
        modalidade: formaPagamento,
        desconto: 0
      }

      if (parcelas <= 5) {
        carrinhoCompras.pagamento = {
          totalComAcrescimo: carrinhoCompras.totalCompra * 1.05,
          parcelas: carrinhoCompras.totalCompra / parcelas,
        }
        // Outra forma de adicionar
        // carrinhoCompras.totalCompra = carrinhoCompras.totalCompra * 1.05;
        // carrinhoCompras.pagamento.parcelas = carrinhoCompras.totalCompra / parcelas;
      } else if (parcelas <= 10) {
        carrinhoCompras.totalCompra = carrinhoCompras.totalCompra * 1.10;
        carrinhoCompras.pagamento.parcelas = carrinhoCompras.totalCompra / parcelas;
      } else {
        carrinhoCompras.totalCompra = carrinhoCompras.totalCompra * 1.15;
        carrinhoCompras.pagamento.parcelas = carrinhoCompras.totalCompra / parcelas;
      }

      break;
    case 'debito': case 'débito': case 'pix': case 'dinheiro':
      break;
    case 'pix': case 'dinheiro':

      break;
    case 'dinheiro':

      break;
    default:
      alert('Opção de pagamento invalida!')
  }
}


