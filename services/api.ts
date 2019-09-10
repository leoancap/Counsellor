import axios from 'axios'
import memoize from 'lodash/memoize'

const dev = process.env.NODE_ENV !== 'production'

const apiUrl = dev
  ? 'http://localhost:3000'
  : 'https://counsellor.leoancap.now.sh'

export const baseURL = axios.create({
  baseURL: `${apiUrl}/api`,
})

const today = () => new Date().getDate()

export const api = {
  professionals: memoize(
    async (startDate: number = today(), endDate: number = today() + 3) => {
      const { data } = await baseURL.get('/professionals', {
        params: {
          startDate,
          endDate,
        },
      })
      return data
    },
  ),
  professional: async (
    name: string,
    startDate: number = today(),
    endDate: number = today() + 3,
  ) => {
    const { data } = await baseURL.get(`/professional`, {
      params: {
        name,
        startDate,
        endDate,
      },
    })
    return data
  },
}
