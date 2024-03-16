import { useSelector } from 'react-redux'
import Periode from '../components/Periode'

const Passe = () => {
  const { currentEpoque } = useSelector((state) => state.epoque)
  const ce = { currentEpoque }.currentEpoque
  let newCe = []
  for (let i = 0; i < ce.length; i++) {
    newCe[i] = ce[i]
  }
  let ceSorted = newCe.sort((p1, p2) => p1.numImage - p2.numImage)
  console.log('ceSorted : ', ceSorted)
  return (
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px z-0 opacity-50 bg-passe object-cover bg-cover bg-no-repeat">
      <div className="z-10 flex flex-col my-2.5">
        {ceSorted.map(
          ({
            _id,
            titre,
            caracteristique,
            vecu,
            numImage,
            image,
            descriptionImage,
          }) => (
            <div key={_id}>
              <Periode
                titre={titre}
                caracteristique={caracteristique}
                vecu={vecu}
                numImage={numImage}
                image={image}
                descriptionImage={descriptionImage}
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default Passe
