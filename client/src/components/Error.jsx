import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <React.Fragment>
      <div className="">
        <div className="">
          <p className="my-16 text-1.2rem text-red-fonce">404</p>
          <p className="text-1.2rem text-red-fonce">
            Oups! La page que vous demandez n&apos;existe pas.
          </p>
          <div className="border-1px p-5px rounded-1.5rem">
            <Link to="/">
              <p className="p-24px">Retourner sur la page d&apos;accueil</p>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Error
