<template lang="pug">
  .main-page
    .title
      | Список дел
    base-button(label="Добавить задачу" variant="error" loading)
    .main-page-todos
      todo-card
      todo-card
      todo-card
      todo-card
</template>

<script>
import TodoCard from '@/components/TodoCard'
import BaseButton from '@/components/base/BaseButton'
export default {
  name: 'MainPage',
  components: { BaseButton, TodoCard }
}
</script>

<style lang="sass" scoped>
.main-page
  display: flex
  flex-direction: column
  align-items: center
  &-todos
    margin: 30px auto
    max-width: 500px
</style>
