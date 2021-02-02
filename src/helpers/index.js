import { taskStatuses } from '@/const'

/**
 * Returns status object by status id
 * @param id
 * @return {{id: number, title: string}}
 */
export const getTaskStatusById = (id) => {
  return taskStatuses.find((status) => status.id === id)
}

export const createFormattedTaskDate = () => {
  const date = new Date().toISOString().split('T')

  const year = date[0]

  const time = date[1].split(':')
  const formattedTime = `${time[0]}:${time[1]}`

  return `${year} ${formattedTime}`
}
