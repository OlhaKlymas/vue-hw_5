<template>
  <div>
    <label>
      <span>{{label}}</span>
      <input :type="type"
             :value="value"
             @input="$emit('input', $event.target.value)"
             @change="$emit('changeInput')"
             :style="{'background-color': form.bgInput, 'color': form.colorInput }"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputWatch",
  inject:{
    form: {
    default:{}
    }
  },
  props: {
    label: {
      type: String,
      request: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>