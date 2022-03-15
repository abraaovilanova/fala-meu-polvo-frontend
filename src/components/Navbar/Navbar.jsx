import './Navbar.css'
import { Link } from "react-router-dom";

export default () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/"><i className="fa fa-home" aria-hidden="true" /> Inicio</Link></li>
                <li><Link to="/new-sentence">Nova frase</Link></li>
            </ul> 
        </nav>
    )
}