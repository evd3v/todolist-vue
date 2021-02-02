import { taskStatuses } from '@/const'

/**
 * Returns status object by status id
 * @param id
 * @return {{id: number, title: string}}
 */
export const getTaskStatusById = (id) => {
  return taskStatuses.find((status) => status.id === id)
}
