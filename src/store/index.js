import Vue from 'vue'
import axios from 'axios'

const store = Vue.observable({
    isLoaded: false,
    animeArr: []
})

export const mutations = {
    setIsLoaded: payload => store.isLoaded = payload,
    setAnimeArr: payload => store.animeArr = payload
}

export const getters = {
    isLoaded: () => store.isLoaded,
    animeArr: () => store.animeArr
}

export const actions = {
    async getAnimeArr() {
        mutations.setIsLoaded(false)
        const data = await axios.get('https://api.jikan.moe/v3/top/anime')
        mutations.setAnimeArr(data.data.top)
        mutations.setIsLoaded(true)
    }
}