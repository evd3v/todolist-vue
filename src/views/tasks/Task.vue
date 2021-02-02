<template lang="pug">
  .task-page
    template(v-if="task")
      .title
        | Задача {{ task.id }}
      .task-page-form
        .task-page-form-field
          base-textarea(v-model='task.title' label="Название" id='title')
        .task-page-form-field
          base-textarea(v-model='task.description' label="Описание" id='description')
        .task-page-form-field
          base-select-dropdown(v-model='task.status' :items="statuses" label="Статус" titleKey='translatedTitle')
        .task-page-form-field
          span(class="task-page-form-field-text")
            | Дата создания: {{ task.created_date }}
        base-button(label='Обновить' @click='onUpdate' :disabled='!haveUpdates || loading || !valid' :loading='updating')
        base-button(label='Удалить' @click='onDelete' variant="error" :disabled="loading" :loading='deleting')
    template(v-else)
      circular-preloader
</template>

<script>
import isEqual from 'lodash/isEqual'

import { taskStatuses } from '@/const'
import { getTaskStatusById } from '@/helpers'
import { tasksRequest } from '@/api'

import CircularPreloader from '@/components/base/CircularPreloader'
import BaseTextarea from '@/components/base/BaseTextarea'
import BaseSelectDropdown from '@/components/base/BaseSelectDropdown'
import BaseButton from '@/components/base/BaseButton'

export default {
  name: 'TaskPage',
  components: {
    BaseButton,
    BaseSelectDropdown,
    BaseTextarea,
    CircularPreloader
  },
  data() {
    return {
      task: null,
      copyTask: null,
      deleting: false,
      updating: false,
      statuses: [...taskStatuses]
    }
  },
  computed: {
    haveUpdates() {
      return !isEqual(this.task, this.copyTask)
    },
    valid() {
      return this.task.title && this.task.description
    },
    loading() {
      return this.deleting || this.updating
    }
  },
  async mounted() {
    const id = Number(this.$route.params.id)
    try {
      const task = await tasksRequest.getTaskById({ id })
      this.task = { ...task, status: getTaskStatusById(task.status) }
      this.copyTask = { ...this.task }
    } catch (e) {
      await this.$router.replace('/error')
    }
  },
  methods: {
    async onUpdate() {
      if (this.valid) {
        this.updating = true
        await tasksRequest
          .updateTask({
            id: this.task.id,
            updatedFields: {
              title: this.task.title,
              description: this.task.description,
              status: this.task.status.id
            }
          })
          .finally(() => (this.updating = false))

        await this.$router.replace('/')
      }
    },
    async onDelete() {
      this.deleting = true
      await tasksRequest
        .removeTask({ id: this.task.id })
        .finally(() => (this.deleting = false))

      await this.$router.replace('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.task-page
  display: flex
  flex-direction: column
  align-items: center
  &-form
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    &-field
      margin-top: 20px
      &-text
        color: var(--dark-grayish-blue)
    button
      margin-top: 50px
</style>
