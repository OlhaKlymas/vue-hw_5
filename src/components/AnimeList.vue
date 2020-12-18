<template>
  <div>
    <template v-if="!isLoaded">Load...</template>
    <template v-else>
      <div class="container">
        <anime-item
            v-for="item in animeArr"
            :key="item.id"
            :item="item"
        ></anime-item>
      </div>
    </template>
  </div>
</template>

<script>
import { actions, getters } from '@/store'
import AnimeItem from "./obser/AnimeItem";

export default {
  name: "AnimeList",
  components: {AnimeItem},
  computed:{
    ...getters
  },
  beforeMount() {
    this.getAnimeArr()
  },
  methods:{
    ...actions
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>