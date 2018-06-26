import { dashboardTypes } from './'

export default (state = [], action) => {
    switch (action.type) {
        case dashboardTypes.ADD_TASK:
            return state.concat(action.task)
        default:
            return state
    }
}