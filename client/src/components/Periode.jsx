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
  const [detailClicked, setDetailClicked] = useState(false)
  const ima = { image }.image
  let dv = false
  let dc = false
  //  console.log(ima)
  const detailFlipFlop = () => {
    dv = detailVisible
    setDetailVisible(!dv)
  }
  const handleClickDetail = () => {
    dc = detailClicked
    setDetailClicked(!dc)
  }
  return (
    <div>
      <div className="flex justify-between items-center border-1px rounded-1.5rem p-5px mb-1.5">
        <p className="text-left">{titre}</p>
        {detailVisible ? (
          <div className="rotate-180 pr-5px">
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
        ) : (
          <div className="pr-5px">
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
        )}
      </div>
      {detailVisible ? (
        detailClicked ? (
          <div
            className="w-412px h-250px flex flex-col justify-around items-center"
            onClick={handleClickDetail}
          >
            <div className="p-5px">
              <img
                // className="absolute left-0 top-0 hover:left-20pxhover:scale-x-125  hover:left-20px object-contain"
                className="object-contain w-250px h-200px"
                src={ima}
                alt="pas image"
              />
            </div>
            <div>
              <p className="text-center text-1.1rem p-5px">
                {descriptionImage}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="">
              <div
                className="w-150px h-250px flex flex-col justify-around"
                onClick={handleClickDetail}
              >
                <div className="p-5px h-100px">
                  <img
                    // className="absolute left-0 top-0 hover:left-20pxhover:scale-x-125  hover:left-20px object-contain"
                    className="object-contain"
                    src={ima}
                    alt="pas image"
                  />
                </div>
                <div>
                  <p className="text-left text-0.9rem p-5px">
                    {descriptionImage}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <p className="p-5px text-justify">{caracteristique}</p>
                <p className="p-5px text-justify">{vecu}</p>
              </div>
            </div>
          </div>
        )
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
