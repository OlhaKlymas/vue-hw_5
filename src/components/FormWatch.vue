<template>
  <form @submit.prevent="submitForm"
        :style="{'background-color': form.bg, 'color': form.colorText }"
  >
    <div>
      <span>{{counter}} полей изменено</span>
      <button v-if="counter > 0" type="button" @click="clearForm">Очистить</button>
    </div>

    <transition-group name="fade">

      <InputWatch
          v-for="(key, i) in showList"
          :key="i"
          :label="i"
          @changeInput="changeInput"
          v-model="showList[i]"
      />
    </transition-group>

    <div>
      <button type="button" v-show="showListCounter !== Object.keys(filter).length" @click="showListCounter = Object.keys(filter).length">Показать все фильтры</button>
      <button type="button" v-show="showListCounter === Object.keys(filter).length" @click="showListCounter = 2">Скрыть фильтры</button>
    </div>
    <div>
      <button-submit-hoc type="submit" >Submit</button-submit-hoc>
    </div>
  </form>
</template>

<script>

import Button from "./global/Button"
import { WithSubmitBtn } from "./hoc/WithSubmitBtn"

const ButtonSubmitHoc = WithSubmitBtn(Button)

import InputWatch from "./watch/InputWatch";
export default {
  name: "FormWatch",
  components: {InputWatch, ButtonSubmitHoc},
  data(){
    return{
      user:{
        name: '',
        surname: '',
        age: '',
        gender: 'male',
        lang: 'RU'
      },
      filter: {},
      counter: 0,
      showList: {},
      showListCounter: 2
    }
  },
  inject:{
    form: {
      default:{}
    }
  },
  created() {
    this.clearForm()
    this.showInputs(this.showListCounter)
  },
  watch:{
    showListCounter:
      function(){
        this.showInputs(this.showListCounter)
      }
  },
  methods: {
    submitForm(){
      for(let key in this.showList){
        console.log(this.showList[key])
      }
    },
    changeInput(){
        this.counter++
    },
    clearForm(){
      this.filter = Object.assign({}, this.user)
      this.showInputs()
      this.counter = 0
    },
    showInputs(){
      let count = 0
      this.showList = {}
      for (let key in this.filter){
        if(count < this.showListCounter){
          this.$set(this.showList, key, this.filter[key])
        }
        count++
      }
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