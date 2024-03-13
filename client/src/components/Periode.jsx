import { useState } from 'react'
import propTypes from 'prop-types'

function Periode({
  titre,
  caracteristique,
  vecu,
  numImage,
  image,
  descriptionImage,
}) {
  const [detailVisible, setDetailVisible] = useState(false)
  const ima = { image }.image
  let dv = false
  //  console.log(ima)
  const detailFlipFlop = () => {
    dv = detailVisible
    setDetailVisible(!dv)
  }
  return (
    <div>
      <div className="flex justify-between items-center border-1px rounded-1.5rem p-5px">
        <p className="text-left">{titre}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="17"
          viewBox="0 0 14 17"
          onClick={detailFlipFlop}
        >
          <path
            id="ic_get_app_24px"
            d="M19,9H15V3H9V9H5l7,7ZM5,18v2H19V18Z"
            transform="translate(-5 -3)"
          />
        </svg>
      </div>
      {detailVisible ? (
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="w-150px">
              <img className="h-75px p-5px" src={ima} alt="pas image" />
              <p className="text-left text-0.9rem p-5px">{descriptionImage}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <p className="p-5px text-justify">{caracteristique}</p>
              <p className="p-5px text-justify">{vecu}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden">
          <div className="">
            <div className="">
              <p className="">{caracteristique}</p>
              <p className="">{vecu}</p>
            </div>
          </div>
          <div className="">
            <div className="">
              <img className="h-300px" src={ima} alt="pas image" />
              <p className="">{descriptionImage}</p>
            </div>
          </div>
        </div>
      )}
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
