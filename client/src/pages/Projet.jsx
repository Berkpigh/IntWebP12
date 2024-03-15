import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Projet = () => {
  const pnum = useParams().id - 2
  const { currentProjet } = useSelector((state) => state.projet)
  const projects = { currentProjet }.currentProjet
  const proj = projects[pnum]

  return (
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px z-0 h-800px bg-projet object-cover bg-cover bg-no-repeat">
      <Link to="/formation">
        <div className="z-10">
          <p className="text-center text-grey-fff font-bold mb-2.5">
            Scénario du projet {proj.numProjet}
          </p>
          <p className="text-justify  p-10px border-2px border-grey-fff rounded-1.5rem mb-2.5">
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
