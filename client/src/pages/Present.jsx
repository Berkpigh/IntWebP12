import { Link } from 'react-router-dom'

const Present = () => {
  return (
    <div>
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 ">
        <p className="text-center">
          J&apos;hérite d&apos;une vigne.
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
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 w-200px m-auto">
        <p className="text-center">Le résultat c&apos;est çela :</p>
      </div>
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 w-300px m-auto">
        <a className="text-center" href="https://www.clopico.shop/Accueil">
          https://www.clopico.shop/Accueil
        </a>
      </div>
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 w-300px m-auto">
        <p className="text-center">
          Mais il y a encore bien des progrès à faire ! Je vous invite à le voir
          en ouvrant la page d&apos;
        </p>
      </div>
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 w-300px m-auto">
        <Link to="/avenir" className="text-center">
          Avenir
        </Link>
      </div>
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 w-300px m-auto">
        <p className="text-center">
          Et voilà ce qui m&apos;a conduit à entamer une formation d'Intégrateur
          Web chez OpenClassRooms
        </p>
      </div>
      <div className="p-5px border-1px rounded-1.5rem mb-1.5 w-300px m-auto">
        <Link to="/formation" className="text-center">
          Formation OpenClassrooms
        </Link>
      </div>
    </div>
  )
}
export default Present
