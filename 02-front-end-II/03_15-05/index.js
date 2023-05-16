const container = document.querySelector('#container')

// async function pegarDadosDeUsuario(id) {
//   // const fetchMetodo = await fetch('https://reqres.in/api/users/2', {
//   //   method: 'POST',
//   //   body: {
//   //     name: 'lucas'
//   //   }
//   // })
//   // const data = await fetchMetodo.json()
//   const axiosMetodo = await api.get(`/users/${id}`)

//   // console.log(data)
//   const dadosUsuario = axiosMetodo.data

//   container.innerHTML += `
//     <div> 
//     <img src=${dadosUsuario.data.avatar} /> 
//     <h1>${dadosUsuario.data.first_name}</h1> 
//     </div>
//   `
//   console.log(dadosUsuario)
// }

// async function criarUsuario() {
//   const response = await api.post('/users', {
//     name: "Lucas",
//     job: "Front"
//   })

//   console.log(response)
// }

// criarUsuario()

// for (let i = 1; i <= 10; i++) {
//   pegarDadosDeUsuario(i)
// }

// https://jsonplaceholder.typicode.com/photos

async function renderizarImagens() {
  const response = await api.get('/photos')
  const data = response.data

  data.forEach((foto, index) => {
    if (index > 10) return
    // Formas de adicionar o HTML via JS

    // 1. Criando elementos
    // const divImage = document.createElement('div')
    // divImage.id = 'image'

    // const imgTag = document.createElement('img')
    // imgTag.src = foto.url

    // const h1Tag = document.createElement('h1')
    // h1Tag.innerText = foto.title

    // divImage.appendChild(imgTag)
    // divImage.appendChild(h1Tag)

    // container.appendChild(divImage)

    // 2. InserAdjacentHTML

    //   container.insertAdjacentHTML('afterend', `
    //   <div id='image'>
    //     <img src=${foto.url} />
    //     <h1>${foto.title}</h1>
    //   </div>
    // ` )

    // 3. innerHTML

    container.innerHTML += `
      <div>
        <img src=${foto.url} />
        <h1>${foto.title}</h1>
      </div>
    `
  })
}

renderizarImagens()