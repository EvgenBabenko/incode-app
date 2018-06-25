import { profileTypes } from './'

export default (state = {}, action) => {
    switch (action.type) {
        case profileTypes.GET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case profileTypes.EDIT_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}