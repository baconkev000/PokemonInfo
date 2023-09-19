<template>
  <div>
    <h2>Pokemon Directory</h2>
    <div>
      <div class="search">
        <input
          v-model="inputSearch"
          class="search"
          placeholder="Search for pokemon..."
          @keyup="getFilteredPokemon()"
        >
      </div>
    </div>
    <div class="pokeList">
      <div v-for="p in filteredPokemon" :key="p.name" class="grid-item">
        <PokeCard :pokemon="p" />
      </div>
    </div>
    <div v-if="filteredPokemon.length === 0" class="message">
      <h1>No Pokemon Found</h1>
      <p>Try Searching for a different name</p>
    </div>
    <span v-else />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import type Pokedex from '../types/pokedex'
import type Pokemon from '../types/pokemon'

const filteredPokemon = ref([] as Array<Pokemon>)
const inputSearch = ref('')

// fetch pokemon
const { data: pokemonList } = await useFetch('/api/pokemon', {
  query: { limit: 60 },
  transform: (pokemonList: Array<Pokedex>) => {
    return pokemonList.map((pokemon: Pokedex) => ({ name: pokemon.name, thumb: pokemon.sprites.front_default }))
  }
})

// returns filtered pokemon list from search input
const getFilteredPokemon = () => {
  const value = inputSearch.value
  filteredPokemon.value = pokemonList.value!.filter(
    (pokemon: Pokemon) =>
      pokemon.name.toLowerCase().substr(0, value.length) === value
  )
}

onBeforeMount(() => {
  filteredPokemon.value = pokemonList.value!
})
</script>

<style scoped>
    .pokeList{
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        background-color: #f5f8f9;
        padding: 10px;
        column-gap: 10px;
        row-gap: 10px;
        border-radius:10px;
        margin-top:20px;
    }
    .grid-item {
        padding: 20px;
        font-size: 20px;
        text-align: center;
    }
.search {
  width: 100%;
  position: relative;
  display: flex;
  padding:10px;
}

.searchTerm {
  width: 100%;
  border: 3px solid #353636;
  border-right: none;
  padding: 15px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #353636;
}
.message {
    width:100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #f5f8f9;
}
.hide{
  display: none;
}
</style>
