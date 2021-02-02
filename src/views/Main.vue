<template lang="pug">
  .main-page
    .title
      | Список дел
    base-button(label="Добавить задачу" variant="primary")
    .main-page-todos(v-if='!loading')
      todo-card
      todo-card
      todo-card
      todo-card
    circular-preloader(v-else)
</template>

<script>
import TodoCard from '@/components/TodoCard'
import BaseButton from '@/components/base/BaseButton'
import { tasksRequest } from '@/api'
import CircularPreloader from '@/components/base/CircularPreloader'
export default {
  name: 'MainPage',
  components: { CircularPreloader, BaseButton, TodoCard },
  data() {
    return {
      loading: true,
      todos: []
    }
  },
  async mounted() {
    this.todos = await tasksRequest
      .listTasks()
      .finally(() => (this.loading = false))
  }
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

::v-deep.circular-preloader
  margin-top: 50px
</style>
