import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="m-auto h-400px w-412px smpb:w-720px mdpb:w-920px text-0.75rem flex justify-between">
      <div className="m-auto my-16flex flex-col items-center justify-between">
        <p className=" text-1.2rem text-red-fonce">404</p>
        <p className="text-1.2rem text-red-fonce">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <div className="border-1px p-5px rounded-1.5rem">
          <Link to="/">
            <p className="p-10px">Retourner sur la page d&apos;accueil</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Error
