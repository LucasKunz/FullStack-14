const formElement = document.querySelector('form')

function getCheckbox(checkboxs) {
  const checkboxChecked = []
  for (const item of checkboxs) {
    if (item.checked) {
      checkboxChecked.push(item.value)
    }
  }

  return checkboxChecked
}

formElement.onsubmit = (e) => {
  e.preventDefault()
  const name = formElement.name.value
  const checkbox = getCheckbox(formElement.curso)
  console.log(name)
  console.log(checkbox)
  console.log(formElement.state.options[formElement.state.selectedIndex].value)
}