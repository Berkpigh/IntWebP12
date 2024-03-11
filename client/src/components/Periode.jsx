import PropTypes from 'prop-types'
import ima1 from '/1bitMageticCoreMemory.png'
import ima2 from '/2TimeSharing.png'
import ima3 from '/3features-of-c.png'
import ima4 from '/4thm_IntroToVAXVMS.jpg'
import ima5 from '/5MacIntosh.jpeg'
import ima6 from '/WIN_20240307_16_16_30_Pro.jpg'
import ima7 from '/7NexusBrowser.jpeg'
import ima8 from '/8SimCity.jpg'
import ima9 from '/9OpenSource.jpg'

const propTypes = {
  titre: PropTypes.string,
  caracteristique: PropTypes.string,
  vecu: PropTypes.string,
  numImage: PropTypes.number,
  image: PropTypes.string,
  descriptionImage: PropTypes.string,
}
const defaultProps = { String }

function Periode({
  titre,
  caracteristique,
  vecu,
  numImage,
  image,
  descriptionImage,
}) {
  const imaArray = [ima1, ima2, ima3, ima4, ima5, ima6, ima7, ima8, ima9]
  const nuim = numImage
  //const ima = imaArray[nuim]
  const ima = { image }.image
  console.log(ima)
  return (
    <div>
      <p className="">{titre}</p>
      <p className="">{caracteristique}</p>
      <p className="">{vecu}</p>
      <img className="h-300px" src={ima} alt="pas image" />
      <p className="">{descriptionImage}</p>
    </div>
  )
}
Periode.propTypes = propTypes
Periode.defaultProps = defaultProps
export default Periode
