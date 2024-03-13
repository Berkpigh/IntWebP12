import propTypes from 'prop-types'
import { useState } from 'react'
import Unprojet from '../components/Unprojet'

const Projet = ({ numProjet, nom, scenario, resultat }) => {
  const [projetVisible, setProjetVisible] = useState(false)
  const pvFlipFlop = () => {
    setProjetVisible(!projetVisible)
  }
  //console.log('scenario : ', scenario)

  return (
    <div className="" onClick={pvFlipFlop}>
      {projetVisible ? (
        <Unprojet
          numProjet={numProjet}
          scenario={scenario}
          resultat={resultat}
        />
      ) : (
        <div className="p-10px w-300px h-100px border-1px rounded-1.5rem m-auto mb-2.5">
          <p className="text-center font-bold">Projet {numProjet}</p>
          <p className="text-center">{nom}</p>
        </div>
      )}
    </div>
  )
}
Projet.propTypes = {
  numProjet: propTypes.number,
  nom: propTypes.string,
  scenario: propTypes.string,
  resultat: propTypes.string,
}
export default Projet
