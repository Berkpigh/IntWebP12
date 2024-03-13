import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FetchGetEpoques from '../api/FetchGetEpoques'
import photobibi from '/WIN_20240307_16_16_30_Pro.jpg'
import { getepoqueStart, getepoqueSuccess } from '../redux/epoque/epoqueSlice'

const Home = () => {
  const { loaded } = useSelector((state) => state.epoque)
  const dispatch = useDispatch()
  //  console.log('loaded : ', { loaded })
  const loadEpoques = async () => {
    dispatch(getepoqueStart())
    const data = await FetchGetEpoques('epoques')
    //console.log('data : ', data)
    dispatch(getepoqueSuccess(data))
  }
  const loa = { loaded }.loaded
  !loa ? loadEpoques() : ''
  return (
    <div className="">
      <div className="object-contain h-300px rounded-1.5rem">
        <img
          className="object-contain  rounded-1.5rem"
          src={photobibi}
          alt="Photo informaticien"
        />
      </div>
      <p className="text-1.5rem p-5px my-2">
        Portefeuille d&apos;informaticien
      </p>
      <div className="border-1px p-5px rounded-1.5rem">
        <p className="p-5px">
          Plus des trois quarts de ma carrière font partie du passé !<br />
          Le reste je le répartis en 10% d&apos;activité
          <br />
          post-professionnelle et un avenir estimé à … 15%
        </p>
      </div>
      <div className="mt-1.5 border-1px p-5px rounded-1.5rem">
        <p className="p-5px">
          Ce n&apos;est de pas ma carrière elle-même dont je veux parler.
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
        <div className="m-auto w-90px mt-1.5 border-1px p-5px rounded-1.5rem">
          <Link to="/passe" className="">
            Passé
          </Link>
        </div>
        <div className="m-auto w-100px mt-1.5 border-1px p-5px rounded-1.5rem">
          <Link to="/present" className="">
            Présent
          </Link>
        </div>
        <div className="mt-1.5 border-1px p-5px rounded-1.5rem">
          <Link to="/avenir" className="">
            Avenir
          </Link>
        </div>
        <p className="my-5 italic">
          Les poportions sont intentionnellement inversées
        </p>
      </div>
    </div>
  )
}

export default Home
