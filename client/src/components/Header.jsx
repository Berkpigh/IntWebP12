import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px bg-yellow p-5px flex justify-between">
      <Link to="/" className="pr-5px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
        >
          <path
            id="ic_home_24px"
            d="M10,20V14h4v6h5V12h3L12,3,2,12H5v8Z"
            transform="translate(-2 -3)"
          />
        </svg>
      </Link>
      <p className="text-0.9rem">Votre portfolio de développeur</p>
      <nav>
        <Link to="/passe" className="text-0.9rem p-r5px">
          Passé
        </Link>
        <Link to="/present" className="text-0.9rem p-r5px">
          Présent
        </Link>
        <Link to="/avenir" className="text-0.9rem p-r5px">
          Avenir
        </Link>
      </nav>
    </div>
  )
}
export default Header
