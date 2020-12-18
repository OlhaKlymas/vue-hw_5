<template>
  <div class="wrap-card">
    <div class="card"
         @click="showPopup"
    >
      <div class="card-body">
        <img :src="item.image_url">
        <div class="card-title">{{item.title}}</div>
      </div>
    </div>

    <AnimePopup
        v-if="clicked"
        :item="item"
        @showPopup="showPopup"
    />
  </div>
</template>

<script>
import AnimePopup from "./AnimePopup";
export default {
  name: "AnimeItem",
  components: {AnimePopup},
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data(){
    return{
      clicked: false
    }
  },
  methods: {
    showPopup(){
      this.clicked = !this.clicked
    }
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