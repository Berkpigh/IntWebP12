import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Unprojet = ({ numProjet, nom }) => {
  const navigate = useNavigate()
  const np = { numProjet }.numProjet
  const lien = `/projet/${np}`
  const handleNavigation = () => {
    navigate(lien)
  }
  return (
    <div className="">
      <div>
        <div
          className="p-10px h-125px border-1px rounded-1.5rem m-auto mb-2.5"
          onClick={handleNavigation}
        >
          <p className="text-center font-bold">Projet {numProjet}</p>
          <p className="text-center">{nom}</p>
        </div>
      </div>
    </div>
  )
}
Unprojet.propTypes = {
  numProjet: propTypes.number,
  nom: propTypes.string,
}
export default Unprojet
