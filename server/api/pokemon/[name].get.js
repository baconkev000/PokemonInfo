import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * instance.get pokemon list
 * @param name
 * @returns Promsie
 */

export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name')
  return instance.get(`/${name}`).then((res) => {
    if (res !== undefined) {
      // get pokemon detail
      return res.data
    }
    return []
  }
  ).catch((error) => {
    return error
  })
})
