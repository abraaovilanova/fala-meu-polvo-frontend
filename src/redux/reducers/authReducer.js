import { authActionsType } from '../actions/authActions'

const initialState = {
    isLoggedIn: localStorage.getItem("token") ? true: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type){
        case authActionsType.SIGNUP_SUCCESS:
        case authActionsType.LOGIN_SUCCESS:
            const { token, loginUser } = action.payload.data
            localStorage.setItem("token",token)
            return {
                isLoggedIn: true,
                }
        case authActionsType.LOGOUT_SUCCESS:
        case authActionsType.LOGOUT_FAIL:
            localStorage.removeItem('token')
            return {
                isLoggedIn: false,
            }
        case authActionsType.SIGNUP_FAIL:
            return state

        default:
            return state
    }
}


export default authReducer