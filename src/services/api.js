import axios from "axios";

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export const useApi = () => ({
    getPokeList: async (offset) => {
        const response = await api.get(`/?limit=10&offset=${offset}`).catch()
        return response.data
    },

    getPokeByName: async (name) => {
        const response = await api.get(`/${name}`).catch()
        return response.data
    },

    getPokeByUrl: async (url) => {
        const response = await api.get(url).catch()
        return response.data
    }
})