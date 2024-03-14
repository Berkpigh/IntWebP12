import { useSelector } from 'react-redux'
import Unprojet from '../components/Unprojet'
import { Link } from 'react-router-dom'

const Formation = () => {
  const { currentProjet } = useSelector((state) => state.projet)
  const cp = { currentProjet }.currentProjet

  return (
    <div className="z-0 opacity-50 bg-formation object-cover bg-cover bg-no-repeat">
      <Link to="/present">
        <div className="grid grid-cols-2 gap-0.75rem">
          {cp
            .sort((p1, p2) => p1.numProjet - p2.numProjet)
            .map(({ _id, numProjet, nom }) => (
              <div key={_id}>
                <Unprojet numProjet={numProjet} nom={nom} />
              </div>
            ))}
        </div>
      </Link>
    </div>
  )
}
export default Formation
