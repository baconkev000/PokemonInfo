import { describe, test, expect, vi } from 'vitest'

function createFetchResponse (data: any) {
  return { json: () => new Promise(resolve => resolve(data)) }
}
describe('Test Get Pokemon API', () => {
  test('it should fetch 1 pokemon', async () => {
    // get fixture data and create resolved mock response of that data
    const _fetch = vi.fn()
    const mockResponse = import('../../fixtures/pokemon.json')
    _fetch.mockResolvedValue(createFetchResponse(mockResponse))
    // use api to mock fetch a pokemon and verify response
    const pokemon = await _fetch('/api/pokemon?limit=1')
    expect(_fetch).toBeTruthy()
    expect(_fetch).toBeCalledTimes(1)
    expect(_fetch).toHaveBeenCalledWith(
      '/api/pokemon?limit=1'
    )
    expect(Promise.resolve(pokemon)).toStrictEqual(mockResponse)
  })
})
