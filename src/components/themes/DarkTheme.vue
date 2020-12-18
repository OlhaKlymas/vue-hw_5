<script>
export default {
  provide: {
    form: {
      bg: 'black',
      bgBtn:'#7f1dea',
      colorBtn: '#ccc',
      colorText: '#ccc',
      bgInput: '#d0b1f1',
      colorInput: '#7f1dea'
    }
  },
  render() {
    return this.$slots.default
  }
}
</script>