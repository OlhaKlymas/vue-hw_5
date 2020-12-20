<template>
  <div id="app">

<!--    <FormHoc/>-->

<!--    <FormWatch :user="user"/>-->

    <theme-prov>
      <FormWatch :user="user"/>
    </theme-prov>

    <theme-hoc-for-form>
      <FormWatch :user="user"/>
    </theme-hoc-for-form>

<!--    <AnimeList/>-->

  </div>
</template>

<script>
// import FormHoc from "./components/FormHoc";
import ThemeProv from "./components/ThemeProv";
// import AnimeList from "./components/AnimeList";
import FormWatch from "./components/FormWatch";
import ThemeHocForForm from "./components/themes/ThemeHocForForm";

export default {
  name: 'App',
  components: {
    ThemeHocForForm,
    // AnimeList,
    ThemeProv,
    FormWatch,
    // FormHoc
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
