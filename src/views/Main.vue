<template lang="pug">
  .main-page
    .title
      | Список дел
    base-button(label="Добавить задачу" variant="primary")
    .main-page-todos(v-if='!loading')
      task-card(v-for='task in tasks' :key='task.id' :task='task')
    circular-preloader(v-else)
</template>

<script>
import TaskCard from '@/components/TaskCard'
import BaseButton from '@/components/base/BaseButton'
import { tasksRequest } from '@/api'
import CircularPreloader from '@/components/base/CircularPreloader'
export default {
  name: 'MainPage',
  components: { CircularPreloader, BaseButton, TaskCard },
  data() {
    return {
      loading: true,
      tasks: []
    }
  },
  async mounted() {
    this.tasks = await tasksRequest
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
    width: 100%
    @media (min-width: 576px)
      max-width: 500px

::v-deep.circular-preloader
  margin-top: 50px
</style>
