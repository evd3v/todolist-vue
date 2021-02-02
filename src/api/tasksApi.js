import Api from '@/api/api'

/** Base url for posts API. For demonstration it's defined
 * as const url. In production mode it must be define as environment variables.
 * In this project uses local json server */
const TASKS_API_URL = 'http://localhost:3000'

/** Tasks Api class */
export default class TasksApi extends Api {
  constructor() {
    super()
    this.client.defaults.baseURL = TASKS_API_URL
  }

  /**
   * Returns current tasks list
   * @return {Promise<Array<Task>>}
   */
  async listTasks() {
    const { data } = await this.client.get('/tasks')
    return data
  }

  /**
   * Returns task object by task id
   * @param {number} id - Task id
   * @return {Promise<Task>}
   */
  async getTaskById({ id }) {
    const { data } = await this.client.get(`/tasks/${id}`)
    return data
  }

  /**
   * Creates new task object. After success returns id of the new task
   * @param {CreateTaskRequest} task
   * @return {Promise<number>}
   */
  async createTask(task) {
    const {
      data: { id }
    } = await this.client.post('/tasks', task)
    return id
  }

  /**
   * Updates task by task id
   * @param {number} id
   * @param {UpdateTaskRequest} updatedFields
   * @return {Promise<Task>}
   */
  async updateTask({ id, updatedFields }) {
    const { data } = await this.client.patch(`/tasks/${id}`, updatedFields)
    return data
  }

  /**
   * Removes task by task id. If task is not exists - returns 404 error
   * @param {number} id
   * @return {Promise<any>}
   */
  async removeTask({ id }) {
    return await this.client.delete(`/tasks/${id}`)
  }
}
