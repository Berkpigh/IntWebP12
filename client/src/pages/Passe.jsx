import { useSelector } from 'react-redux'
import Periode from '../components/Periode'

const Passe = () => {
  const { currentEpoque } = useSelector((state) => state.epoque)
  const ce = { currentEpoque }.currentEpoque

  return (
    <div className="z-0 opacity-30 bg-passe object-cover bg-cover bg-no-repeat">
      <div className="z-10 flex flex-col my-2.5">
        {ce
          .sort((p1, p2) => p1.numImage - p2.numImage)
          .map(
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
