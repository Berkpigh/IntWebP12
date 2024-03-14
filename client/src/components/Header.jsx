import { Link } from 'react-router-dom'

const Header = () => {
  let format = false
  let projet = false
  const cn = ''
  switch (cn) {
    case 'format':
      format = true
      break
    case 'proj':
      projet = true
      break
    default:
  }

  return (
    <div className="p-5px flex justify-between">
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
      {format ? (
        <Link to="/present" className="pr-5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
          >
            <path
              id="ic_backspace_24px"
              d="M22,3H7a1.882,1.882,0,0,0-1.59.88L0,12l5.41,8.11A1.891,1.891,0,0,0,7,21H22a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,22,3ZM19,15.59,17.59,17,14,13.41,10.41,17,9,15.59,12.59,12,9,8.41,10.41,7,14,10.59,17.59,7,19,8.41,15.41,12Z"
              transform="translate(0 -3)"
            />
          </svg>
        </Link>
      ) : projet ? (
        <Link to="/formation" className="pr-5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
          >
            <path
              id="ic_backspace_24px"
              d="M22,3H7a1.882,1.882,0,0,0-1.59.88L0,12l5.41,8.11A1.891,1.891,0,0,0,7,21H22a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,22,3ZM19,15.59,17.59,17,14,13.41,10.41,17,9,15.59,12.59,12,9,8.41,10.41,7,14,10.59,17.59,7,19,8.41,15.41,12Z"
              transform="translate(0 -3)"
            />
          </svg>
        </Link>
      ) : (
        <nav>
          <Link to="/passe" className="margin-right">
            Passé
          </Link>
          <Link to="/present" className="margin-right">
            Présent
          </Link>
          <Link to="/avenir" className="margin-right">
            Avenir
          </Link>
        </nav>
      )}
    </div>
  )
}
export default Header
