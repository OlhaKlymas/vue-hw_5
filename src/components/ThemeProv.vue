<template>
<div>
  <div class="btn-group">
    <button type="button" @click="theme = 'color-theme'">Color Theme</button>
    <button type="button" @click="theme = 'dark-theme'">Dark Theme</button>
  </div>

  <componentn :is="theme">
    <form-watch></form-watch>
  </componentn>
</div>
</template>

<script>
import FormWatch from "./FormWatch";
import ColorTheme from "./themes/ColorTheme";
import DarkTheme from "./themes/DarkTheme";
export default {
  name: "ThemeProv",
  components: {
    ColorTheme,
    DarkTheme,
    FormWatch
  },
  data(){
    return{
      theme: 'color-theme'
    }
  },

}
</script>

<style scoped>

</style>