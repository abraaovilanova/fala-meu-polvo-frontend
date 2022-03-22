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

    const token = localStorage.getItem('token')

    const handleLogout = () => {
        logout(history)
    }

    return (
        <nav className="navbar">
            <ul className="navbar__itens">
                <li className="navbar__item">
                    <Link to="/">
                        <i className="fa fa-home" aria-hidden="true" />
                    </Link>
                </li>
                {user.isLoggedIn && 
                    <li className="navbar__item"><Link to="/new-sentence"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link></li>
                }
                <li className="navbar__item">
                    {!user.isLoggedIn ?
                        <>
                            {/* <Link to="/auth/signup"> sign up </Link> */}
                            <Link to="/auth/login"><i className="fa fa-sign-in" aria-hidden="true" /></Link>
                        </> 
                        : 
                        <>
                            <a onClick={()=>handleLogout()}><i className="fa fa-sign-out" aria-hidden="true"/></a>
                        </>
                    }
                
                </li>
                {/* <li className="navbar__item"><i className="fa fa-ellipsis-h" aria-hidden="true" /></li> */}
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