/* Desenvolva aqui a rotina */

// 1. Totalizar os campos 1+2+3 no campo 4 - (OK)
// 2. Totalizar os descontos 5+6 no campo 7 - (OK)
// 3. Totalizar as receitas - despesas (campo 4 - campo 7) no campo 10 - (O)

const btnCalc = document.querySelector('#btn_calcular')

function calcularReceita() {
  const valorBase = document.querySelector('#valor_base').value
  const valorTransporte = document.querySelector('#valor_transporte').value
  const valorAlimentação = document.querySelector('#valor_alimentacao').value
  const receitaTotal = document.querySelector('#valor_receita')

  const somaReceita = Number(valorBase) + Number(valorTransporte) + Number(valorAlimentação)

  receitaTotal.value = somaReceita

  return somaReceita
}

function calcularDescontos() {
  const valorAutomovel = document.querySelector('#valor_automovel').value
  const valorFaltas = document.querySelector('#faltas').value
  const descontoTotal = document.querySelector('#valor_descontos')

  const somaDescontos = Number(valorAutomovel) + Number(valorFaltas)

  descontoTotal.value = somaDescontos

  return somaDescontos
}

function calcularSalario() {
  const somaReceita = calcularReceita()
  const somaDescontos = calcularDescontos()

  const valorTotal = document.querySelector('#valor_total')
  const somaTotal = somaReceita - somaDescontos

  valorTotal.value = somaTotal
}

btnCalc.addEventListener('click', calcularSalario)

