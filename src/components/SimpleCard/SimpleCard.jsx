import { Link } from "react-router-dom"

import './SimpleCard.css'

export default ({ title, url })=>{
    return(
        <Link to={`/${url}`}>
            <div className="card">
                <p>{title}</p>
                <div className="card-arrow">
                    <div />
                    <div className="card-arrow-right"/>
                    <div />
                </div>
            </div>
        </Link>
    )
}