import { Link } from "react-router-dom";
import './Home.css'

// redux
import { connect } from 'react-redux'

import SimpleCard from "../../components/SimpleCard/SimpleCard";
import Loader from "../../components/Loader/Loader";

const Home = (props)=>{
  const { user } = props
    const path = process.env.PUBLIC_URL
    return (
    <>
      <h1>Fala Meu Polvo</h1>
      <p>Aprender um pouquinho é melhor do que nada</p>
      <img src={path + "/octopus.png"} width="45%" alt="fala-meu-polvo-mascote" />
      <div className="cards-list" >
        { user.isLoggedIn && <>
          <SimpleCard title={"Comece a aprender Inglês"} url={'english'} />
          <SimpleCard title={"Comece a aprender Francês"} url={'french'} />
        </>
        }
        {
          !user.isLoggedIn && <p>Faça o <Link to="/auth/login">login</Link> para começar a aprender!</p>
        }
        </div>
    </>
    )
}

const mapStateToProps = (state) => {
  return {
      user: state,
  }
}

export default connect(mapStateToProps)(Home)