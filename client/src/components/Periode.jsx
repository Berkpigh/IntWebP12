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
      <div className="flex justify-between items-center border-1px rounded-1.5rem p-5px">
        <p className=" text-left">{titre}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="17"
          viewBox="0 0 14 17"
        >
          <path
            id="ic_get_app_24px"
            d="M19,9H15V3H9V9H5l7,7ZM5,18v2H19V18Z"
            transform="translate(-5 -3)"
          />
        </svg>
      </div>
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
