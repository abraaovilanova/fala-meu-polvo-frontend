import React, { useState } from 'react'
import axios from 'axios'

// redux
import { connect } from 'react-redux'
import { LoginAuthAction, SignUpAuthAction } from '../../redux/actions/authActions'

import { useNavigate  } from 'react-router-dom'

const Auth =  (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState(undefined)

    const history = useNavigate()

    const { login, signup } = props

    const { user } = props

    const signinRender = props.formType === 'signin' ? (
        <>
            <label>Name</label>
            <input 
                type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </>
    ) : ''

    async function handleSubmit(e){
        e.preventDefault()

        const body = {
            user: userName,
            password,
            name
        }

        if(props.formType === 'login'){
            login(body, history)
        }

        if(props.formType === 'signin'){
            signup(body,history)
            
        }

        setUserName('')
        setName('')
        setPassword('')

    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            {signinRender}
            <label>User: </label>
            <input 
                type="text" 
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
            />

            <label>Password: </label>
            <input 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <br />
            <input type="submit" value={`${props.formType}`} />
        </form>
    )
} 

const mapStateToProps = (state) => {
    return {
        user: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: (loginState, history) => {
            dispatch(LoginAuthAction(loginState, history))
        },
        signup:  (signupState, history) => {
            dispatch(SignUpAuthAction(signupState,history))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)