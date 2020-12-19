<template>
  <button
      :type="type"
      @click="$emit('btnHandler',  $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    user: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>

</style>