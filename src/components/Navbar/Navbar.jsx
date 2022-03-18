import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

import { useNavigate  } from 'react-router-dom'


// redux
import { connect } from 'react-redux'
import { LogOutAuthAction } from '../../redux/actions/authActions' 

const Navbar = (props) => {

    const { user } = props
    const { logout } = props

    const history = useNavigate()

    console.log(user, 'navbar')

    const token = localStorage.getItem('token')

    // TODO: CONECT LOGOUT WITH REDUX STATE
    const handleLogout = () => {
        logout(history)
    }

    return (
        <nav className="navbar">
            <ul className="navbar__itens">
                <li className="navbar__item">
                    <Link to="/">
                        <i className="fa fa-home" aria-hidden="true" /> Inicio
                    </Link>
                </li>
                <li className="navbar__item"><Link to="/new-sentence"><i className="fa fa-pencil" aria-hidden="true" /> Nova frase</Link></li>
                <li className="navbar__item">
                    {!user.isLoggedIn ?
                        <>
                            <Link to="/auth/login"> Login </Link>
                            <Link to="/auth/signup"> Sign up </Link>
                        </> 
                        : 
                        <>
                            <a onClick={()=>handleLogout()}>Logout</a>
                        </>
                    }
                
                </li>
            </ul> 
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: (history) => {
            dispatch(LogOutAuthAction(history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)