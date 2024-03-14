import { useSelector } from 'react-redux'
import Projet from '../components/Projet'

const Formation = () => {
  const { currentProjet } = useSelector((state) => state.projet)
  const cp = { currentProjet }.currentProjet

  return (
    <div className="grid grid-cols-2 gap-0.75rem">
      {cp
        .sort((p1, p2) => p1.numProjet - p2.numProjet)
        .map(({ _id, numProjet, nom }) => (
          <div key={_id}>
            <Projet numProjet={numProjet} nom={nom} />
          </div>
        ))}
    </div>
  )
}
export default Formation
