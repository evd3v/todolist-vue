<template lang="pug">
  .textarea
    label(:for='id')
      | {{ label }}
    textarea(:id='id' v-model="inputValue")
</template>

<script>
export default {
  name: 'BaseTextarea',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.textarea
  label
    display: block
    color: var(--dark-grayish-blue)
    font-size: 14px
    margin-bottom: 10px

  textarea
    font-family: inherit
    width: 100%
    height: 80px
    border: 1px solid var(--very-light-gray)
    resize: none
    font-size: 16px
    line-height: 18px
    color: inherit
    padding: 15px 10px
    border-radius: 5px
    &:focus
      outline: none
</style>
