<template>
  <div class="popup">
    <div class="container">
      <div class="card__body">
        <h3 class="card__title">{{item.title}}</h3>
        <div class="card__content">
          <div class="card__img">
            <img :src="item.image_url">
          </div>
          <div class="card__text">
            <p>{{item.type}}</p>
            <p>{{item.episodes}}</p>
            <p>{{item.start_date}}</p>
            <p>{{item.end_date}}</p>
            <p>{{item.members}}</p>
            <p>{{item.score}}</p>
          </div>
        </div>
      </div>
      <button type="button" @click="$emit('showPopup')">Exit</button>
    </div>
  </div>
</template>

<script>
export default {
name: "AnimePopup",
  props: {
    item: {
      type: Object,
      require: true
    }
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