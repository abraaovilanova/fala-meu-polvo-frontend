import { Link } from "react-router-dom";
import './Home.css'

import SimpleCard from "../../components/SimpleCard/SimpleCard";

export default ()=>{
    const path = process.env.PUBLIC_URL
    return (
    <>
      <h1>Fala Meu Polvo</h1>
      <p>aprender um pouquinho é melhor do que nada</p>
      <img src={path + "/octopus.png"} width="45%" alt="fala-meu-polvo-mascote" />
      <div className="cards-list" >
          <SimpleCard title={"Comece a aprender Inglês"} url={'english'} />
          <SimpleCard title={"Comece a aprender Francês"} url={'french'} />
        </div>
    </>
    )
}