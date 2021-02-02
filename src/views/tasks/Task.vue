<template lang="pug">
  .task-page
    template(v-if="task")
      .title
        | Задача {{ task.id }}
    template(v-else)
      circular-preloader
</template>

<script>
import { tasksRequest } from '@/api'
import CircularPreloader from '@/components/base/CircularPreloader'

export default {
  name: 'TaskPage',
  components: { CircularPreloader },
  data() {
    return {
      /** @type Task | null */
      task: null
    }
  },
  async mounted() {
    const id = Number(this.$route.params.id)
    try {
      this.task = await tasksRequest.getTaskById({ id })
    } catch (e) {
      await this.$router.replace('/error')
    }
  }
}
</script>

<style lang="sass" scoped>
.task-page
  display: flex
  flex-direction: column
  align-items: center
</style>
