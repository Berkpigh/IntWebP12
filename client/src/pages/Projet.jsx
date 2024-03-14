import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Projet = () => {
  const pnum = useParams().id - 2
  const { currentProjet } = useSelector((state) => state.projet)
  const projects = { currentProjet }.currentProjet
  const proj = projects[pnum]

  return (
    <div>
      <Link to="/formation">
        <div className="">
          <p className="text-center font-bold mb-2.5">
            Scénario du projet {proj.numProjet}
          </p>
          <p className="text-justify text-0.9rem p-10px  border-1px rounded-1.5rem mb-2.5">
            {proj.scenario}
          </p>
          <div className="">
            <img
              src={proj.resultat}
              alt="image projet"
              className="m-auto  hover:scale-150 w-250px h-250px object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}
export default Projet
