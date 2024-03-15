import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Unprojet = ({ numProjet, nom }) => {
  const np = { numProjet }.numProjet
  const lien = `/projet/${np}`
  return (
    <div className="">
      <Link to={lien}>
        <div className="p-10px h-125px border-1px rounded-1.5rem m-auto mb-2.5">
          <p className="text-center font-bold">Projet {numProjet}</p>
          <p className="text-center">{nom}</p>
        </div>
      </Link>
    </div>
  )
}
Unprojet.propTypes = {
  numProjet: propTypes.number,
  nom: propTypes.string,
}
export default Unprojet
