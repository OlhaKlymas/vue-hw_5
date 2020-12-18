<template>
  <form @submit.prevent="submitForm">
    <label>
      <span>Name</span>
      <input v-model="user.name" type="text">
    </label>
    <label>
      <span>Age</span>
      <input v-model="user.age" type="number">
    </label>
    <button-submit-hoc type="submit" >Submit</button-submit-hoc>
  </form>
</template>

<script>
import Button from "./global/Button"
import { WithSubmitBtn } from "./hoc/WithSubmitBtn"

const ButtonSubmitHoc = WithSubmitBtn(Button)

export default {
  name: "FormHoc",
  components: {
    ButtonSubmitHoc
  },
  data(){
    return{
      user: {
        name: '',
        age: null
      }
    }
  },
  methods: {
    submitForm(){
      for(let key in this.user){
        console.log(this.user[key])
        localStorage[key] = this.user[key]
      }
    }
  }
}
</script>

<style scoped>

</style>