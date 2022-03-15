import { Routes, Route, Link } from "react-router-dom";

export default ()=>{
    return (
    <>
      <p>Selecione um idioma...</p>
      <div className="cards-list">
          <div className="card">
            <Link to="/english">Inglês</Link>
          </div>
          <div className="card">
            <Link to="/french">Francês</Link>
          </div>
        </div>
    </>
    )
}