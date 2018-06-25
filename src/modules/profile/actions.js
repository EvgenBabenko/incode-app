import { profileTypes } from './'

const getProfile = (profile) => ({
    type: profileTypes.GET_PROFILE,
    profile
})

const editProfile = (profile) => ({
    type: profileTypes.EDIT_PROFILE,
    profile
})

export default { getProfile, editProfile }