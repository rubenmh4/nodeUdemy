const {httpClientPlugin} = require('../plugins/http-client.plugin')
/*
const getPokemonById = (id)=>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((pokemon)=> pokemon.name )

}
*/
const getPokemonById = async (id)=>{

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const pokemon = await httpClientPlugin.get(url)
    console.log(pokemon)
    return pokemon.name
}

module.exports = getPokemonById