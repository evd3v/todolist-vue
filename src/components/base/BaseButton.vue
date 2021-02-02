<template lang="pug">
  button(
    class="button"
    :data-disabled="disabled"
    :data-variant="variant"
    @click="onClick"
  )
    span(:class='{ loading }')
      | {{ label }}
    dots-preloader(v-if='loading')
</template>

<script>
import DotsPreloader from '@/components/base/DotsPreloader'
export default {
  name: 'BaseButton',
  components: { DotsPreloader },
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass" scoped>
.button
  position: relative
  font-family: inherit
  border: 1px solid var(--light-gray)
  line-height: 40px
  height: 40px
  font-weight: 500
  font-size: 16px
  color: var(--white)
  border-radius: 5px
  padding: 0 30px
  display: flex
  align-items: center
  justify-content: center
  white-space: nowrap

  .loading
    display: none

  &[data-disabled='true']
    pointer-events: none
    opacity: 0.4

  &[data-variant="primary"]
    background-color: var(--main-blue)

  &[data-variant="error"]
    background-color: var(--vivid-orange)
</style>
