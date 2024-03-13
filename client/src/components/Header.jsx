import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="p-5px flex justify-between">
      <p className="text-0.9rem">
        Créez et publiez votre portfolio de développeur
      </p>
      <Link to="/" className="">
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
    </div>
  )
}
export default Header
