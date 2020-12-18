<script>
export default {
  provide: {
    form: {
      bg: 'yellow',
      bgBtn:'#1d24ea',
      colorBtn: '#fff',
      colorText: '#1d24ea',
      bgInput: '#c3dbff',
      colorInput: '#1d24ea'
    }
  },
  render() {
    return this.$slots.default
  }
}
</script>