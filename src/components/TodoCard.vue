<template lang="pug">
  .todo-card
    .todo-card-title
      | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, at beatae ea error est explicabo fugit in inventore iusto labore, maiores nobis officia porro qui quisquam veritatis voluptas voluptates voluptatibus?
    .todo-card-description
      | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias autem hic in ipsum magnam nisi odio optio saepe tempore? Ad corporis delectus labore officiis possimus. Deleniti eius reprehenderit sunt.
</template>

<script>
export default {
  name: 'TodoCard'
}
</script>

<style lang="sass" scoped>
.todo-card
  display: flex
  flex-direction: column
  padding: 10px 20px
  height: 110px
  text-align: center
  background-color: #ccc
  transition: all 0.3s cubic-bezier(.25,.8,.25,1)
  border-radius: 5px

  &:not(:first-child)
    margin-top: 20px

  &:hover
    cursor: pointer
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)

  &-title
    font-size: 22px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  &-description
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    overflow: hidden
    text-overflow: ellipsis
    margin-top: 10px
    font-size: 18px
</style>
