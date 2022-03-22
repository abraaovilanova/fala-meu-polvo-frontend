import { Link } from "react-router-dom"

import './SimpleCard.css'

export default ({ title, url })=>{
    return(
        <div className="card">
            <Link to={`/${url}`}>{title}</Link>
            <div className="card-arrow">
                <div />
                <div className="card-arrow-right"/>
                <div />
            </div>
        </div>
    )
}