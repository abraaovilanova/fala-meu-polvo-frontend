import axios from 'axios'
import { url } from '../../api/api'

const authActionsType = {
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAIL: 'SIGNUP_FAIL',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAIL: 'LOGOUT_FAIL',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL'
}

const SignUpAuthAction = (userState, history) => {
    return async (dispatch) => {
        try{
            const {userName, name, password } = userState
            const data = await axios
            .post(`${url}/auth/signin`,{user: userName, name , password })
            console.log(data)
            dispatch({type:authActionsType.SIGNUP_SUCCESS, payload: data})
            history("/")
        }catch (err){
            console.log(err)
            dispatch({type:authActionsType.SIGNUP_FAIL, payload: ''})
        }

    }
}

const LogOutAuthAction = (history) => {
    return async (dispatch) => {
        try{
            dispatch({type:authActionsType.LOGOUT_SUCCESS, payload: {}})
            history("/")
        }catch (err){
            console.log(err)
            dispatch({type:authActionsType.LOGOUT_FAIL, payload: ''})
        }

    }
}

const LoginAuthAction = (loginState, history) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`${url}/auth/login`,loginState)

            const { loginUser, token } = res.data

            dispatch({type: authActionsType.LOGIN_SUCCESS, payload: {data: {loginUser, token}}})

            history('/')
            
        }catch(err){
            dispatch({type: authActionsType.LOGIN_FAIL, payload: {}})
            console.log(err)
        }
    }

}

export { 
    authActionsType,
    SignUpAuthAction,
    LogOutAuthAction,
    LoginAuthAction
    }