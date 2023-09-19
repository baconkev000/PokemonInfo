<template>
  <div>
    <h1>{{ pokeName }}</h1>
    <div class="detail-wrapper">
      <div class="img-wrapper">
        <img :src="pokemon.sprites.other.home.front_default" :alt="`${pokeName}'s thumbnail'`">
      </div>
      <div class="detail">
        <div class="detail-info">
          <ul>
            <li><strong>Name: </strong>{{ pokeName }}</li>
            <li><strong>Height: </strong>{{ pokemon.height }}</li>
            <li><strong>Weight: </strong>{{ pokemon.weight }}</li>
            <li>
              <strong>Abilites: </strong>
              <span>{{ getAbilities(pokemon.abilities) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ability } from '../types/pokedex'
const { name } = useRoute().params
const { data: pokemon } = await useFetch(`/api/pokemon/${name}`)

const capitolize = (str: string) => {
  if (str.charAt !== undefined) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  } else {
    return str
  }
}
const getAbilities = (abilities: Array<Ability>) => {
  const abilitiesAr = abilities.map((a: Ability) => capitolize(a.ability.name))
  return abilitiesAr.join(', ')
}
const pokeName = capitolize(name.toString())

</script>

<style scoped>
.img-wrapper{
    background-color: aquamarine;
}
.detail-wrapper{
    display: flex;
    flex-direction: row;
    background-color: #f5f8f9;
}
.detail-info ul{
    list-style: none;
    font-size: 20px;
    line-height: 50px;
}

</style>
