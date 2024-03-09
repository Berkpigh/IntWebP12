import { Link } from 'react-router-dom'
//import { useDispatch } from 'react-redux'
import photobibi from '../assets/img/WIN_20240307_16_16_30_Pro.jpg'

const Home = () => {
  return (
    <div className="">
      <div className="">
        <img src={photobibi} alt="Photo informaticien" />
      </div>
      <p className="">Portefeuille d&aposinformaticien</p>
      <div className="">
        <p className="">
          Plus des trois quarts de ma carrière font partie du passé !<br />
          Le reste je le répartis en 10% d&aposactivité
          <br />
          post-professionnelle et un avenir estimé à … 15%
        </p>
      </div>
      <div className="">
        <p className="">
          Ce n&aposest de pas ma carrière elle-même dont je veux parler.
          <br />
          Les avancées technologiques rencontrées depuis 1970 peuvent en
          revanche présenter un intérêt (pour les jeunes?).
          <br />
          Concernant présent et avenir, j&aposaimerais exposer ce qui représente
          un défi pour moi !
        </p>
      </div>
      <Link to="/passe" className="">
        Passé
      </Link>
      <Link to="/present" className="">
        Présent
      </Link>
      <Link to="/avenir" className="">
        Avenir
      </Link>
      <p className="">Les poportions sont intentionnellement inversées</p>
    </div>
  )
}

export default Home
