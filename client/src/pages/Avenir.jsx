const Avenir = () => {
  return (
    <div className="m-auto w-412px smpb:w-720px mdpb:w-920px z-0 h-800px opacity-80 bg-avenir object-cover bg-cover bg-no-repeat">
      <p className="bg-rgrey p-24px text-1.1rem text-grey-fff">
        Je dois maintenant mettre en oeuvre les connaissances aquises pour des
      </p>
      <p className="p-10px bg-dark text-left text-grey-fff text-1.2rem">
        - Améliorations de fonctionalité
      </p>
      <div className="bg-dark opacity-60">
        <p className="text-justify text-grey-fff border-2px border-grey-fff p-10px rounded-1.5rem">
          Pour passer commande, l&apos;utilisateur simplement choisit ses
          produits, indique son adresse de livraison et le moyen de paiement
          (CC, facture). L&apos;administrateur doit pouvoir gérer les commandes
          en consignation.
        </p>
      </div>
      <p className="p-10px bg-dark text-left text-grey-fff text-1.2rem">
        - Améliorations de l&apos;interface (UIX)
      </p>
      <div className="bg-dark opacity-60">
        <ul className="list-disc text-justify text-grey-fff border-2px border-grey-fff p-10px rounded-1.5rem">
          <li className="mx-4">Composants React</li>
          <li className="mx-4">Responsivness</li>
          <li className="mx-4">Simplicité</li>
        </ul>
      </div>
      <p className="p-10px bg-dark text-left text-grey-fff text-1.2rem">
        - Améliorations de la visibilité
      </p>
      <div className="bg-dark opacity-60">
        <ul className="list-disc text-justify text-grey-fff border-2px border-grey-fff p-10px rounded-1.5rem">
          <li className="mx-4">Présence sur les réseaux sociaux</li>
          <li className="mx-4">SEO</li>
          <li className="mx-4">
            Cartes de visites avec QR code pointant sur le site
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Avenir
