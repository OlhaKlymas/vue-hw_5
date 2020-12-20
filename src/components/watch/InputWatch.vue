<template>
  <div>
    <label>
      <span>{{label}}</span>
      <input :type="type"
             :value="value"
             @input="$emit('input', $event.target.value)"
             @change="$emit('changeInput')"
             :style="{'background-color': themeData.form.bgInput, 'color': themeData.form.colorInput }"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputWatch",
  inject:{
    themeData: {
      form: {
        default:{}
      }
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