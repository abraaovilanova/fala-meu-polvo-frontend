import './Navbar.css'
import { Link } from "react-router-dom";

export default () => {
    return (
        <nav className="navbar">
            <ul className="navbar__itens">
                <li className="navbar__item"><Link to="/"><i className="fa fa-home" aria-hidden="true" /> Inicio</Link></li>
                <li className="navbar__item"><Link to="/new-sentence"><i className="fa fa-pencil" aria-hidden="true" /> Nova frase</Link></li>
            </ul> 
        </nav>
    )
}