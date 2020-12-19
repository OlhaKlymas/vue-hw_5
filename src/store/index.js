import Vue from 'vue'
import axios from 'axios'

export const store = Vue.observable({
    isLoaded: false,
    animeArr: [],
    isOpened: false,
    idForPopup: {}
})

export const mutations = {
    setIsLoaded: payload => store.isLoaded = payload,
    setIsOpened: payload => store.isOpened = payload,
    setAnimeArr: payload => store.animeArr = payload,
    setIdForPopup: payload => store.idForPopup = payload
}

export const getters = {
    isLoaded: () => store.isLoaded,
    isOpened: () => store.isOpened,
    animeArr: () => store.animeArr,
    idForPopup: () => store.idForPopup
}

export const actions = {
    async getAnimeArr() {
        mutations.setIsLoaded(false)
        const data = await axios.get('https://api.jikan.moe/v3/top/anime')
        mutations.setAnimeArr(data.data.top)
        mutations.setIsLoaded(true)
    },
    openPopup(id){
        mutations.setIsOpened(true)
        store.animeArr.map(item =>{
            if(id === item.mal_id){
                mutations.setIdForPopup(item)
            }
        })
    },
    hidePopup(){
        mutations.setIsOpened(false)
        mutations.setIdForPopup({})
    }
}