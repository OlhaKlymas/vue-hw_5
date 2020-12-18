<template>
  <button
      :type="type"
      @click="$emit('btnHandler',  $event)"
      :style="{'background-color': form.bgBtn, 'color': form.colorBtn }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  inject:{
    form: {
      default:{}
    }
  },
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>

</style>