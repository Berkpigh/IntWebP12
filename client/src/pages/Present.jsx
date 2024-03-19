import { Link } from 'react-router-dom'

const Present = () => {
  return (
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px z-0 opacity-50 bg-present object-cover bg-cover bg-no-repeat">
      <div className="z-10 p-5px  bg-dark opacity-70 border-2px border-grey-fff rounded-1.5rem mb-1.5">
        <p className="text-center text-grey-fff">
          J&apos;hérite d&apos;une <strong>vigne</strong>.
          <br />
          On se met à la cultiver avec des amis.
          <br />
          Le vin produit il faut le vendre.
          <br />
          Tout naturellement je me forme (avec OpenClassrooms et ses cours
          gratuits dans un premier temps)
          <br />
          et me lance dans l&apos;écriture d&apos;une App Service, hébergée sur
          Azure.
          <br />
          Je choisis le modèle MVC en c#, .Net Core 6, EF 6 et SQLServer.
        </p>
      </div>
      <div className="z-10 p-5px bg-dark opacity-70 border-2px border-grey-fff rounded-1.5rem mb-1.5 w-200px m-auto">
        <p className="text-center text-grey-fff">
          Le résultat c&apos;est çela :
        </p>
      </div>
      <div className="p-5px bg-fff border-1px rounded-1.5rem mb-1.5 w-300px m-auto">
        <a
          className="text-center text-1.1rem"
          href="https://www.clopico.shop/Accueil"
          target="_blank"
        >
          https://www.clopico.shop/Accueil
        </a>
      </div>
      <div className="z-10 p-5px bg-dark opacity-70 border-2px border-grey-fff rounded-1.5rem mb-1.5 w-300px m-auto">
        <p className="text-center text-grey-fff">
          Mais il y a encore bien des progrès à faire ! Je vous invite à le voir
          en ouvrant la page d&apos;
        </p>
      </div>
      <div className="z-10 p-5px bg-dark opacity-70 border-2px border-grey-fff rounded-1.5rem mb-1.5 w-300px m-auto">
        <Link to="/avenir" className="text-center text-1.2rem text-grey-fff">
          Avenir
        </Link>
      </div>
      <div className="z-10 p-5px bg-dark opacity-70 border-2px border-grey-fff rounded-1.5rem mb-1.5 w-300px m-auto">
        <p className="text-center text-grey-fff">
          Et voilà ce qui m&apos;a conduit à entamer une formation
          d&apos;Intégrateur Web chez OpenClassRooms
        </p>
      </div>
      <div className="z-10 p-5px bg-dark opacity-70 border-2px border-grey-fff rounded-1.5rem mb-1.5 w-300px m-auto">
        <Link to="/formation" className="text-center text-1.2rem text-grey-fff">
          Formation OpenClassrooms
        </Link>
      </div>
    </div>
  )
}
export default Present
