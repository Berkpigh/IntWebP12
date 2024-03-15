import { useState } from 'react'
import propTypes from 'prop-types'

function Periode({ titre, caracteristique, vecu, image, descriptionImage }) {
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
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px ">
      <div className="z-10 flex justify-between items-center border-1px rounded-1.5rem p-5px mb-1.5">
        <p className="opacity-100 text-grey-fff bg-zero text-1.1rem text-left rounded-1.5rem p-5px">
          {titre}
        </p>
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
            <div className="bg-fff p-5px">
              <img
                // className="absolute left-0 top-0 hover:left-20pxhover:scale-x-125  hover:left-20px object-contain"
                className="object-contain w-250px h-200px"
                src={ima}
                alt="pas image"
              />
            </div>
            <div>
              <p className="text-center text-0.9rem p-5px bg-dark text-grey-fff rounded-1.5rem">
                {descriptionImage}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            <div className="mr-1.5">
              <div
                className="w-150px h-250px flex flex-col justify-around"
                onClick={handleClickDetail}
              >
                <div className="bg-fff p-5px h-100px rounded-1.5rem">
                  <img
                    // className="absolute left-0 top-0 hover:left-20pxhover:scale-x-125  hover:left-20px object-contain"
                    className="object-contain m-auto"
                    src={ima}
                    alt="pas image"
                  />
                </div>
                <div>
                  <p className="p-10px bg-dark text-grey-fff text-left text-0.9rem rounded-1.5rem">
                    {descriptionImage}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <p className="p-10px text-justify text-1.1rem italic bg-dark text-grey-fff rounded-1.5rem mb-1.5">
                  {caracteristique}
                </p>
                <p className="p-10px text-justify bg-dark text-grey-fff rounded-1.5rem">
                  {vecu}
                </p>
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
