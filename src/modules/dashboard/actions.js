import { dashboardTypes } from './'

const addTask = (task) => ({
    type: dashboardTypes.ADD_TASK,
    task
})

const deleteTask = (id) => ({
    type: dashboardTypes.DELETE_TASK,
    id
})

const completeTask = (id) => ({
    type: dashboardTypes.COMPLETE_TASK,
    id
})

export default {
    addTask,
    deleteTask,
    completeTask
}