<template lang="pug">
  .task-card(:data-status='status.title')
    .task-card-title
      | {{ task.title }}
    .task-card-description
      | {{ task.description }}
</template>

<script>
import { getTaskStatusById } from '@/helpers'

export default {
  name: 'TaskCard',
  props: {
    task: {
      /** @type Task */
      type: Object,
      required: true
    }
  },
  computed: {
    status() {
      return getTaskStatusById(this.task.status)
    }
  }
}
</script>

<style lang="sass" scoped>
.task-card
  display: flex
  flex-direction: column
  padding: 10px 20px
  height: 90px
  width: 100%
  text-align: center
  background-color: #ccc
  transition: all 0.3s cubic-bezier(.25,.8,.25,1)
  border-radius: 5px
  color: var(--white)

  @media (min-width: 576px)
    height: 110px

  &:not(:first-child)
    margin-top: 20px

  &:hover
    cursor: pointer
    opacity: 0.8
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22)

  &[data-status="to-do"]
    background-color: var(--soft-blue)

  &[data-status="in-progress"]
    background-color: var(--dark-violet)

  &[data-status="done"]
    background-color: var(--dark-green)

  &-title
    font-size: 16px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    @media (min-width: 576px)
      font-size: 22px

  &-description
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    overflow: hidden
    text-overflow: ellipsis
    margin-top: 10px
    font-size: 14px
    @media (min-width: 576px)
      font-size: 16px
</style>
