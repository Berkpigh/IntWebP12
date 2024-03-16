import { useSelector } from 'react-redux'
import Unprojet from '../components/Unprojet'

const Formation = () => {
  const { currentProjet } = useSelector((state) => state.projet)
  const pr = { currentProjet }.currentProjet
  let newPr = []
  for (let i = 0; i < pr.length; i++) {
    newPr[i] = pr[i]
  }
  return (
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px z-0 opacity-50 bg-formation object-cover bg-cover bg-no-repeat">
      <div className="grid grid-cols-2 smpb:grid-cols-3 mdpb:grid-cols-4 gap-0.75rem">
        {newPr
          .sort((p1, p2) => p1.numProjet - p2.numProjet)
          .map(({ _id, numProjet, nom }) => (
            <div key={_id}>
              <Unprojet numProjet={numProjet} nom={nom} />
            </div>
          ))}
      </div>
    </div>
  )
}
export default Formation
