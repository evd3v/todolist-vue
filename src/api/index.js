import tasksApi from '@/api/tasksApi'

/** Single tone instance for making requests to tasks API */
export const tasksRequest = new tasksApi()
