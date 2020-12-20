<template>
  <div>
    <hr>
    <button type="button" @click="changeTheme">Change Theme</button>
    <slot></slot>
  </div>

</template>

<script>
export default {
name: "ThemeHocForForm",
  provide() {
    return {
      themeData: {
        form: this.theme
      }
    }
  },
  data() {
    return{
      darkTheme: {
        bg: 'black',
        bgBtn:'#7f1dea',
        colorBtn: '#ccc',
        colorText: '#ccc',
        bgInput: '#d0b1f1',
        colorInput: '#7f1dea'
      },
      colorTheme: {
        bg: 'yellow',
        bgBtn:'#1d24ea',
        colorBtn: '#fff',
        colorText: '#1d24ea',
        bgInput: '#c3dbff',
        colorInput: '#1d24ea'
      },
      theme: {
        bg: 'yellow',
        bgBtn:'#1d24ea',
        colorBtn: '#fff',
        colorText: '#1d24ea',
        bgInput: '#c3dbff',
        colorInput: '#1d24ea'
      }
    }
  },
  methods: {
    changeTheme(){
      for (let key in this.theme){
        if (this.theme[key] === this.colorTheme[key]){
          this.theme[key] = this.darkTheme[key]
        }
        else {
          this.theme[key] = this.colorTheme[key]
        }
      }
    }
  }
}
</script>

<style scoped>
  div{
    text-align: center;
  }
</style>