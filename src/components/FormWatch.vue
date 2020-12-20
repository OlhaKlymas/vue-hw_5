<template>
  <form @submit.prevent=""
        :style="{'background-color': themeData.form.bg, 'color': themeData.form.colorText }"
  >
    <div>
      <span>{{counter}} полей изменено</span>
      <button v-if="counter > 0" type="button" @click="clearForm">Очистить</button>
    </div>

    <transition-group name="fade">

      <InputWatch
          v-for="(key, i) in showList"
          :key="i + idItem"
          :label="i"
          @changeInput="changeInput"
          v-model="filter[i]"
      />
    </transition-group>

    <div>
      <button type="button" v-show="!isShowAll" @click="showListCounter = Object.keys(user).length">Показать все фильтры</button>
      <button type="button" v-show="isShowAll" @click="showListCounter = 2">Скрыть фильтры</button>
    </div>
  </form>
</template>

<script>
import InputWatch from "./watch/InputWatch";
export default {
  name: "FormWatch",
  components: {InputWatch},
  props: {
    user: {
      type: Object,
      require: true
    }
  },
  data(){
    return{
      filter: {
        name: '',
        surname: '',
        age: '',
        gender: 'male',
        lang: 'RU'
      },
      idItem: Math.floor(Math.random()*10000000),
      counter: 0,
      showList: {
        name: '',
        surname: ''
      },
      showListCounter: 2,
      isShowAll: false
    }
  },
  inject:{
    themeData: {
      form: {
        default:{}
      }
    }
  },
  watch:{
    showListCounter:
      function(){
        this.showInputs(this.showListCounter)
      }
  },
  methods: {
    changeInput(){
      this.counter = 0
      for (let key in this.filter){
        if(this.filter[key] !== ''){
          if(this.filter[key] !== this.user[key]){
            this.counter++
          }
        }
      }
    },
    clearForm(){
      this.filter = {...this.user}
      this.counter = 0
    },
    showInputs(){
      if(!this.isShowAll){
        let count = Object.keys(this.filter).length + 1
        for (let key in this.filter){
          if(count < this.showListCounter){
            this.$set(this.showList, key, this.filter[key])
          }
          count--
        }
      }
      else{
        let count = Object.keys(this.filter).length - this.showListCounter
        for (let key in this.filter){
          if(count < this.showListCounter){
            delete this.showList[key]
          }
          count--
        }
      }
      this.isShowAll = !this.isShowAll
    }
  }
}
</script>

<style>
  form{
    width: fit-content;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    border: 1px solid;
  }
  form label{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  form button[type=button]{
    margin: 10px 5px;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition: .5s;
  }
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
</style>