<template>
  <NuxtLink class="link" :to="`/${props.pokemon.name}`">
    <div class="card">
      <img class="thumb" :src="props.pokemon.thumb" :alt="`${props.pokemon.name}'s thumbnail'`">
      <p>{{ updateName(props.pokemon.name) }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import Pokemon from '~/types/pokemon'

const props = defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true
  }
})
const updateName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1)
}
</script>

<style scoped>
    .card{
        width:100%;
        height:100%;
        border-radius:10px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
        cursor:'pointer';
    }
    .link {
        color: rgb(114, 114, 114);
        text-decoration: none;
    }
    .thumb{
        filter: drop-shadow(20px 5px 4px #7e7e9f);
    }
</style>
