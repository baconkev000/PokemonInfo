import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * instance.get pokemon list
 * @params event -- contains query parameter for size limit of response --
 * @returns Promsie
 */

export default defineEventHandler(async (event) => {
  const query = getQuery(event, 'query')
  return await instance.get('', { params: query }).then(async (res) => {
    if (res !== undefined) {
      // get names pokemon returned and get data of each one
      try {
        // take returned data and create list of pokemon name
        const pNames = res.data.results.map((pokemon) => { return pokemon.name })
        const promises = []
        pNames.forEach((pokemon) => {
          promises.push(
            instance.get(`/${pokemon}`).then((result) => {
              if (result !== undefined) {
                return result.data
              }
            })
          )
        })

        return await Promise.all(promises)
      } catch (error) {
        return error
      }
    }
    return []
  }
  ).catch((error) => {
    return error
  })
})
