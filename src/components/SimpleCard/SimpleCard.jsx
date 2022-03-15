import { Link } from "react-router-dom"

import './SimpleCard.css'

export default ({ title, url })=>{
    return(
        <div className="card">
            <Link to={`/${url}`}>{title}</Link>
        </div>
    )
}