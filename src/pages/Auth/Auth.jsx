import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

// redux
import { connect } from 'react-redux'
import { LoginAuthAction, SignUpAuthAction } from '../../redux/actions/authActions'

import { useNavigate  } from 'react-router-dom'

import './Auth.css'

const Auth =  (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState(undefined)

    const history = useNavigate()

    const { login, signup } = props

    const { user } = props

    const signupRender = props.formType === 'signup' ? (
        <div className="auth-form__input-group">
            <label className="auth-form__input-title">Nome</label>
            <input 
                type="text" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="auth-form__input"
            />
        </div>
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

        if(props.formType === 'signup'){
            signup(body,history)
            
        }

        setUserName('')
        setName('')
        setPassword('')

    }

    return (
        <form 
            onSubmit={(e)=>handleSubmit(e)}
            className="auth-form"
        >
            <p className="auth-form__title">Faça o seu {props.formType == 'signup' ? 'Cadastro' : props.formType}</p>

            {signupRender}
            
            <div className="auth-form__input-group">
                <label className="auth-form__input-title">Usuário: </label>
                <input 
                    type="text" 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    className="auth-form__input"
                />
            </div>

            <div className="auth-form__input-group">
                <label className="auth-form__input-title">Senha: </label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="auth-form__input"
                />
            </div>

            <br />

            {props.formType === 'login' ?  
                <>
                    Não tem uma conta? <Link to="/auth/signup">Cadastre-se</Link>
                </> 
                : 
                <>
                    Já tenho uma conta,<Link to="/auth/login"> fazer login</Link>
                </>
            }

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