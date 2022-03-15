import { Link } from "react-router-dom";
import './Home.css'

import SimpleCard from "../../components/SimpleCard/SimpleCard";

export default ()=>{
    return (
    <>
      <p>Selecione um idioma...</p>
      <div className="cards-list">
          <SimpleCard title={"Inglês"} url={'english'} />
          <SimpleCard title={"Francês"} url={'french'} />
        </div>
    </>
    )
}