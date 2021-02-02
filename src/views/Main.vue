<template lang="pug">
  .main-page
    .title
      | Список задач
    router-link(to='/tasks/new')
      base-button(label="Добавить задачу" variant="primary")
    .main-page-todos(class="custom-scrollbar" v-if='!loading')
      task-card(v-for='task in tasks' :key='task.id' :task='task')
    circular-preloader(v-else)
</template>

<script>
import { tasksRequest } from '@/api'

import TaskCard from '@/components/TaskCard'
import BaseButton from '@/components/base/BaseButton'
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
  height: 100%
  &-todos
    margin: 30px auto
    padding: 20px 10px
    width: 100%
    overflow: auto
    @media (min-width: 576px)
      max-width: 500px

::v-deep.circular-preloader
  margin-top: 50px
</style>
