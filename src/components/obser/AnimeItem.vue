<template>
  <div class="wrap-card" @click="openPopup(item.mal_id)">
    <div class="card">
      <div class="card-body">
        <img :src="item.image_url">
        <div class="card-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { actions } from '@/store'
export default {
  name: "AnimeItem",
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  methods:{
    ...actions
  }
}
</script>

<style scoped>
  .wrap-card{
    width: 25%;
  }
  .card{
    height: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
  }
</style>