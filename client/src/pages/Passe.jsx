import { useSelector } from 'react-redux'
import Periode from '../components/Periode'

const Passe = () => {
  const { currentEpoque } = useSelector((state) => state.epoque)
  const ce = { currentEpoque }.currentEpoque

  const ceSorted = ce.sort((p1, p2) => p1.numImage - p2.numImage)
  //console.log('ceSorted : ', ceSorted)

  return (
    <div className="flex flex-col">
      <p>Hello mon passé</p>
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
  )
}
export default Passe
