<template lang="pug">
  .circular-preloader
    .loader
</template>

<script>
export default {
  name: 'CircularPreloader'
}
</script>

<style lang="sass" scoped>
.circular-preloader
  width: 150px
  height: 150px
  .loader
    display: block
    position: relative
    border-radius: 50%
    width: 150px
    height: 150px
    border: 3px solid transparent
    border-top-color: var(--main-blue)
    animation: spin 2s linear infinite

    &:before
      content: ''
      position: absolute
      top: 5px
      left: 5px
      right: 5px
      bottom: 5px
      border-radius: 50%
      border: 3px solid transparent
      border-top-color: var(--main-blue)
      animation: spin 3s linear infinite

    &:after
      content: ''
      position: absolute
      top: 15px
      left: 15px
      right: 15px
      bottom: 15px
      border-radius: 50%
      border: 3px solid transparent
      border-top-color: var(--main-blue)
      animation: spin 1.5s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
