<template>
  <div id="app">
    <FormHoc/>
    <FormWatch :user="user"/>
<!--    <ThemeProv/>-->
<!--    <AnimeList/>-->
  </div>
</template>

<script>
import FormHoc from "./components/FormHoc";
import FormWatch from "./components/FormWatch";
// import ThemeProv from "./components/ThemeProv";
// import AnimeList from "./components/AnimeList";
export default {
  name: 'App',
  components: {
    // AnimeList,
    // ThemeProv,
    FormWatch,
    FormHoc
  },
  data(){
    return{
      user:{
        name: '',
        surname: '',
        age: '',
        gender: 'male',
        lang: 'RU'
      }
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
