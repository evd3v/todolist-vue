<template lang="pug">
  .new-task-page
    .title
      | Новая задача
    .new-task-page-form
      .new-task-page-form-field
        base-textarea(id="task-title" v-model='title' label="Название задачи")
      .new-task-page-form-field
        base-textarea(id="task-description" v-model='description' label="Описание задачи")
      base-button(label="Создать задачу" :disabled='!valid' :loading="loading" @click='createTask')
</template>

<script>
import { tasksRequest } from '@/api'

import BaseTextarea from '@/components/base/BaseTextarea'
import BaseButton from '@/components/base/BaseButton'
import { createFormattedTaskDate } from '@/helpers'

export default {
  name: 'NewTaskPage',
  components: { BaseButton, BaseTextarea },
  data() {
    return {
      title: '',
      description: '',
      loading: false
    }
  },
  computed: {
    valid() {
      console.log(createFormattedTaskDate())
      return this.title && this.description
    }
  },
  methods: {
    async createTask() {
      this.loading = true
      const id = await tasksRequest
        .createTask({
          title: this.title,
          description: this.description,
          status: 1,
          created_date: createFormattedTaskDate()
        })
        .finally(() => (this.loading = false))

      await this.$router.replace(`/tasks/${id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.new-task-page
  &-form
    display: flex
    flex-direction: column
    justify-content: center
    &-field
      margin-top: 20px
    button
      margin-top: 50px
</style>
