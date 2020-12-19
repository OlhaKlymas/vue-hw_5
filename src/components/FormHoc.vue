<template>
  <form @submit.prevent="">
    <label>
      <span>Name</span>
      <input v-model="user.name" type="text">
    </label>
    <label>
      <span>Age</span>
      <input v-model="user.age" type="number">
    </label>
    <button-submit-hoc :user="user" @click.native="submitForm">Submit</button-submit-hoc>
  </form>
</template>

<script>
import Btn from "./global/Btn";
import { WithSubmitBtn } from "./hoc/WithSubmitBtn"

const ButtonSubmitHoc = WithSubmitBtn(Btn)

export default {
  name: "FormHoc",
  components: {
    ButtonSubmitHoc
  },
  data(){
    return{
      user: {
        name: '',
        age: ''
      }
    }
  },
  methods: {
    submitForm(){}
  }
}
</script>

<style scoped>

</style>