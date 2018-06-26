import { dashboardTypes } from './'

const defaultState = {
    tasks: [{
        id: 1,
        title: 'First task'
    }, {
        id: 2,
        title: 'Second task'
    }, {
        id: 3,
        title: 'Third task'
    }]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case dashboardTypes.ADD_TASK:
            return state.concat(action.task)
        case dashboardTypes.DELETE_TASK:
            const index = state.tasks.findIndex(task => task.id === action.id)

            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, index),
                    ...state.tasks.slice(index + 1)
                ]
            }
        default:
            return state
    }
}