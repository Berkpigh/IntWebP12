import propTypes from 'prop-types'

const Unprojet = ({ numProjet, scenario, resultat }) => {
  const ima = { resultat }.resultat
  //console.log('scenario : ', scenario)
  return (
    <div className="h-400px flex flex-col items-center justify-between">
      <p className="text-center font-bold">Scénario du projet {numProjet}</p>
      <p className="text-justify text-0.75rem">{scenario}</p>
      <div className="">
        <img
          src={ima}
          alt="image projet"
          className="hover:scale-150 w-250px h-250px object-contain"
        />
      </div>
    </div>
  )
}
Unprojet.propTypes = {
  numProjet: propTypes.number,
  nom: propTypes.string,
  scenario: propTypes.string,
  resultat: propTypes.string,
}
export default Unprojet
