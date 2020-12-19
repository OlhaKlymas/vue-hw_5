<template>
  <div class="popup">
    <div class="container">
      <div class="card__body">
        <h3 class="card__title">{{idForPopup.title}}</h3>
        <div class="card__content">
          <div class="card__img">
            <img :src="idForPopup.image_url">
          </div>
          <div class="card__text">
            <p>{{idForPopup.type}}</p>
            <p>{{idForPopup.episodes}}</p>
            <p>{{idForPopup.start_date}}</p>
            <p>{{idForPopup.end_date}}</p>
            <p>{{idForPopup.members}}</p>
            <p>{{idForPopup.score}}</p>
          </div>
        </div>
      </div>
      <button type="button" @click="hidePopup">Exit</button>
    </div>
  </div>
</template>

<script>
import { actions, getters } from '@/store'
export default {
  name: "AnimePopup",
  computed: {
    ...getters
  },
  methods:{
    ...actions
  }
}
</script>

<style scoped>
  .popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #020202c2;
  }
  .container{
    position: relative;
    width: 50%;
    margin: 20px auto;
    background: #fff9ef;
    padding: 20px;
    box-sizing: border-box;
  }
  .card__content{
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .card__text{
    width: 100%;
  }
  button{
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
</style>