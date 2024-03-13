import { useSelector } from 'react-redux'
import Projet from '../components/Projet'

const Present = () => {
  const { currentProjet } = useSelector((state) => state.projet)
  const cp = { currentProjet }.currentProjet

  return (
    // <div className="grid grid-cols-2 gap-0.75rem">
    <div>
      {cp
        .sort((p1, p2) => p1.numProjet - p2.numProjet)
        .map(({ _id, numProjet, nom, scenario, resultat }) => (
          <div key={_id}>
            <Projet
              numProjet={numProjet}
              nom={nom}
              scenario={scenario}
              resultat={resultat}
            />
          </div>
        ))}
    </div>
  )
}
export default Present
