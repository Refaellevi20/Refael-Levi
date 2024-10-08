  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20'


$.get(API_URL, (data) =>{
    const pokemons = data.results

    const sortedPokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name))


    sortedPokemons.forEach(pokemon => {
        $.get(pokemon.url,(pokemonDetails) => {
            const pokemonName = pokemonDetails.name
            const pokemonImage = pokemonDetails.sprites.front_default
            const pokemonWeight = pokemonDetails.weight


            $('.pokemon-list').append(`
                <li>
                    <h2>${pokemonName}</h2>
                    <p>Weight: ${pokemonWeight}</p>
                    <img src="${pokemonImage}" alt="${pokemonName}">
                    
                </li>
            `)
        })
    })
})

// function fetchPokemonList() {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', API_URL)
//     xhr.onload = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText)
//             const pokemons = data.results
//             const sortedPokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name))
//             fetchPokemonDetails(sortedPokemons)
//         }
//     }
//     xhr.send()
//     }

// function fetchPokemonDetails(pokemons) {
//     pokemons.forEach = ((pokemon) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', pokemon.url)
//         xhr.onload = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             const data = JSON.parse(xhr.responseText)
//             // const pokemons = data.results
//             // const sortedPokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name))
//             renderPokemon(data)
//         }
//     }
//     xhr.send()
// })
// }

// function renderPokemon(pokemon) {
// const pokemonList = document.querySelector('.pokemon-list')
//             const pokemonName = pokemon.name
//             const pokemonImage = pokemon.sprites.front_default
//             const pokemonWeight = pokemon.weight

//             const strHtmls = data.forEach(pokemon => `
//                     <li>
//             <h2>${pokemonName.name}</h2>
//             <img src="${pokemonImage}" alt="${pokemonName}">
//             <p>${pokemonWeight.weight}</p>
//         </li>`)

//         pokemonList.innerHTML = strHtmls.join('')
//             }

     



// const poke_container = document.getElementById("poke_container")
// const pokemon_number = 150

// const colors = {
//   fire: '#FDDFDF',
//   grass: '#DEFDE0',
//   electric: '#FCF7DE',
//   water: '#DEF3FD',
//   ground: '#f4e7da',
//   rock: '#d5d5d4',
//   fairy: '#fceaff',
//   poison: '#98d7d5',
//   bug: '#f8d5a3',
//   dragon: '#97b3e6',
//   psychic: '#eaeda1',
//   flying: '#F5F5F5',
//   fighting: '#E6E0D4',
//   normal: '#F5F5F5'
// }

// main_types = Object.keys(colors)

// const fetchPokemon = async () => {
//   for (let i = 1 i <= pokemon_number i++) {
//     await getPokemon(i)
//   }
// }

// const getPokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`
//   const res = await fetch(url)
//   const pokemon = await res.json()
//   createPokemonCard(pokemon)
// }

// fetchPokemon()

// function createPokemonCard(pokemon) {
//   const pokemonEl = document.createElement("div")
//   pokemonEl.classList.add("pokemon")
  
// const poke_types = pokemon.types.map(el => el.type.name)
// const type = main_types.find(
//   type => poke_types.indexOf(type) > -1
// )
  
// const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1) 
  
// const color = colors[type]
  
//  pokemonEl.style.backgroundColor = color

  
//       const pokeInnerHTML = `
//                 <div class="img-container">
//                     <img src="https://pokeapi.co/api/v2/pokemon/${pokemon.id}.png" alt="${name}" />
//                 </div>
//                 <div class="info">
//                     <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
//                     <h3>${name}</h3>
//                     <small class="type">Type: <span>${type}</span></small>
//                 </div>
//             `
//             console.log(`Image URL: https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`)
//             pokemonEl.innerHTML = pokeInnerHTML
//             poke_container.appendChild(pokemonEl)
//         }

//////////////////////////////////////////!

// const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20'
// const pokemonList = document.querySelector('.pokemon-list')

// //* Pokémon data
// $.get(API_URL, (data) => {
//     const pokemons = data.results

//     const sortedPokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name))

//     sortedPokemons.forEach(pokemon => {
//         $.get(pokemon.url, (pokemonDetails) => {
//             const pokemonName = pokemonDetails.name
//             const pokemonWeight = pokemonDetails.weight
//             const sprites = pokemonDetails.sprites 

//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <h2>${pokemonName}</h2>
//                 <div class="img-container"></div>
//                 <p>Weight: ${pokemonWeight}</p>
//             `

//             const imgContainer = li.querySelector('.img-container')

//             //* Start the animation
//             animateSprites(sprites, imgContainer)
//             pokemonList.appendChild(li)
//         })
//     })
