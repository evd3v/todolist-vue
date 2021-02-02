<template lang="pug">
  .base-select-dropdown(:data-open='state')
    label(v-if="label")
      | {{ label }}
    button(ref='toggle' class="base-select-dropdown-toggle" @click='toggleMenu')
      template(v-if="selected")
        span
          | {{ selected[titleKey] }}
      chevron-bottom
    .base-select-dropdown-list(class="custom-scrollbar")
      .base-select-dropdown-list-item(
        v-for="(item, index) in items"
        :key='index'
        @click="() => selectItem(item)"
        )
          | {{ item[titleKey] }}
</template>

<script>
import ChevronBottom from '@/assets/images/svg/chevron-bottom.svg?inline'

export default {
  name: 'BaseSelectDropdown',
  components: {
    ChevronBottom
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    titleKey: {
      type: String,
      default: 'title'
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      state: false
    }
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  mounted() {
    window.addEventListener('click', this.onClickOutside)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.onClickOutside)
  },
  methods: {
    closeMenu() {
      this.state = false
    },
    toggleMenu() {
      this.state = !this.state
    },
    onClickOutside(e) {
      if (e.target !== this.$refs.toggle) {
        this.closeMenu()
      }
    },
    selectItem(item) {
      this.selected = item
      this.closeMenu()
    }
  }
}
</script>

<style lang="sass" scoped>
.base-select-dropdown
  position: relative
  display: flex
  flex-direction: column

  label
    display: block
    color: var(--dark-grayish-blue)
    font-size: 14px
    transition: all ease-in-out 0.2s
    margin-bottom: 10px

  &-toggle
    position: relative
    background: var(--white)
    border: 1px solid var(--very-light-gray)
    border-radius: 5px
    height: 50px
    line-height: 50px
    padding: 0 40px 0 10px
    text-align: left
    font-family: inherit
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    font-size: 14px
    &:focus
      outline: none

    svg
      pointer-events: none
      transition: all 0.2s
      position: absolute
      right: 0
      top: 0
      path
        fill: var(--very-light-gray)

  &-list
    z-index: 2
    display: none
    position: absolute
    width: 100%
    max-height: 300px
    overflow: auto
    flex-direction: column
    top: 78px
    border: 1px solid var(--very-light-gray)
    border-bottom-left-radius: 5px
    border-bottom-right-radius: 5px
    padding: 0 10px
    background-color: var(--white)
    &-item
      height: 50px
      min-height: 50px
      line-height: 50px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      font-size: 14px
      &:not(:first-child)
        border-top: 1px solid var(--very-light-gray)

      &:hover
        cursor: pointer

  &[data-open='true']
    .base-select-dropdown-toggle
      font-weight: 500
      border-bottom: none
      border-bottom-left-radius: 0
      border-bottom-right-radius: 0
      &:before
        content: ''
        display: block
        position: absolute
        bottom: 0
        width: calc(100% - 20px)
        background-color: var(--very-light-gray)
        height: 1px

      svg
        transform: rotate(180deg)

    .base-select-dropdown-list
      display: flex
</style>
