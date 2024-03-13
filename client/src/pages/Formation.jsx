import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Present = () => {
  const { currentProjet } = useSelector((state) => state.projet)
  const cp = { currentProjet }.currentProjet
  const cpSorted = cp.sort((p1, p2) => p1.numProjet - p2.numProjet)
  //console.log('cpSorted[0].nom : ', cpSorted[0].nom)
  return (
    <div className="grid grid-cols-2 gap-0.75rem">
      <Link to="/projet/2">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[0].nom}</p>
        </div>
      </Link>
      <Link to="/projet/3">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[1].nom}</p>
        </div>
      </Link>
      <Link to="/projet/4">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[2].nom}</p>
        </div>
      </Link>
      <Link to="/projet/5">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[3].nom}</p>
        </div>
      </Link>
      <Link to="/projet/6">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[4].nom}</p>
        </div>
      </Link>
      <Link to="/projet/7">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[5].nom}</p>
        </div>
      </Link>
      <Link to="/projet/8">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[6].nom}</p>
        </div>
      </Link>
      <Link to="/projet/9">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[7].nom}</p>
        </div>
      </Link>
      <Link to="/projet/10">
        <div className="p-5px border-1px rounded-1.5rem">
          <p className="text-center">{cpSorted[8].nom}</p>
        </div>
      </Link>
      <Link to="/projet/11">
        <div className="p-5px border-1px rounded-1.5rem mb-1.5 ">
          <p className="text-center">{cpSorted[9].nom}</p>
        </div>
      </Link>
    </div>
  )
}
export default Present
