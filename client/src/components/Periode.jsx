import propTypes from 'prop-types'

function Periode({
  titre,
  caracteristique,
  vecu,
  numImage,
  image,
  descriptionImage,
}) {
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
Periode.propTypes = {
  titre: propTypes.string,
  caracteristique: propTypes.string,
  vecu: propTypes.string,
  numImage: propTypes.number,
  image: propTypes.string,
  descriptionImage: propTypes.string,
}

export default Periode
