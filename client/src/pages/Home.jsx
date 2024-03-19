import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FetchGetEpoques from '../api/FetchGetEpoques'
import FetchGetProjets from '../api/FetchGetProjets'
import photobibi from '/WIN_20240307_16_16_30_Pro.jpg'
import { getepoqueStart, getepoqueSuccess } from '../redux/epoque/epoqueSlice'
import { getprojetStart, getprojetSuccess } from '../redux/projet/projetSlice'
import { useEffect } from 'react'

const Home = () => {
  const { eloaded } = useSelector((state) => state.epoque)
  const { ploaded } = useSelector((state) => state.projet)
  //console.log('eloaded : ', eloaded, 'ploaded : ', ploaded)
  const dispatch = useDispatch()

  const loadEpoques = async () => {
    dispatch(getepoqueStart())
    const edata = await FetchGetEpoques('epoques')
    //console.log('edata : ', edata)
    dispatch(getepoqueSuccess(edata))
  }
  const eloa = { eloaded }.eloaded

  const loadProjets = async () => {
    dispatch(getprojetStart())
    const pdata = await FetchGetProjets('projets')
    //console.log('pdata : ', pdata)
    dispatch(getprojetSuccess(pdata))
  }
  const ploa = { ploaded }.ploaded

  useEffect(() => {
    !eloa ? loadEpoques() : ''
    !ploa ? loadProjets() : ''
  }, [])

  const handleDataReload = () => {
    loadEpoques()
    loadProjets()
  }

  return (
    <div className="m-auto w-412px smpb:w-720px smpb:h-1010px mdpb:h-1170px mdpb:w-920px z-0 bg-home object-cover bg-cover bg-no-repeat">
      <div className="z-10">
        <div className="opacity-90 object-cover h-300px smpb:h-550px mdpb:h-700px rounded-1.5rem">
          <img
            className="object-contain  rounded-1.5rem"
            src={photobibi}
            alt="Photo informaticien"
          />
        </div>
        <p className="z-10 text-grey-fff bg-yellow w-300px text-red text-1.5rem p-5px my-2 m-auto rounded-1.5rem">
          Portefeuille d&apos;informaticien
        </p>
        <div className="opacity-90 bg-grey border-1px p-5px rounded-1.5rem">
          <p className="p-5px">
            Plus des trois quarts de ma carrière font partie du passé !<br />
            Le reste je le répartis en 10% d&apos;activité
            <br />
            post-professionnelle et un avenir estimé à … 15%
          </p>
        </div>
        <div className="opacity-90 bg-grey mt-1.5 border-1px p-5px rounded-1.5rem">
          <p className="p-5px">
            Ce n&apos;est pas de ma carrière elle-même dont je veux parler.
            <br />
            Les avancées technologiques rencontrées depuis 1970 peuvent en
            revanche présenter un intérêt
            <br /> (pour les jeunes?).
            <br />
            Concernant présent et avenir, j&apos;aimerais exposer ce qui
            représente un <span className="">défi</span> pour moi !
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-1.1rem opacity-90 bg-grey m-auto w-90px mt-1.5 border-1px p-5px rounded-1.5rem">
            <Link to="/passe" className="">
              Passé
            </Link>
          </div>
          <div className="text-1.1rem opacity-90 bg-grey m-auto w-100px mt-1.5 border-1px p-5px rounded-1.5rem">
            <Link to="/present" className="">
              Présent
            </Link>
          </div>
          <div className="text-1.1rem opacity-90 bg-grey mt-1.5 border-1px p-5px rounded-1.5rem">
            <Link to="/avenir" className="">
              Avenir
            </Link>
          </div>
          <button
            type="button"
            onClick={handleDataReload}
            className="text-0.9rem text-grey-fff my-5 italic bg-dark mt-1.5 border-1px p-5px rounded-1.5rem"
          >
            Les proportions sont intentionnellement inversées
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
/* 
const loadEpoques = async () => {
  dispatch(getepoqueStart())
  const edata = await FetchGetEpoques('epoques')
  //console.log('edata : ', edata)
  dispatch(getepoqueSuccess(edata))
}
const eloa = { eloaded }.eloaded

const loadProjets = async () => {
  dispatch(getprojetStart())
  const pdata = await FetchGetProjets('projets')
  //console.log('pdata : ', pdata)
  dispatch(getprojetSuccess(pdata))
}
const ploa = { ploaded }.ploaded
!ploa ? loadProjets() : ''

useEffect(() => {
  !eloa ? loadEpoques() : ''
  !ploa ? loadProjets() : ''
}, [])
 */
