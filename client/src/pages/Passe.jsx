import { useSelector } from 'react-redux'
import Periode from '../components/Periode'

const Passe = () => {
  const { currentEpoque } = useSelector((state) => state.epoque)
  console.log({ currentEpoque })
  return (
    <div className="flex flex-col">
      <p>Hello mon passé</p>
      {currentEpoque.map(
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
