const Projet = require('../database/models/projetModel')

module.exports.addProjet = async serviceData => {
  console.log(serviceData)
  try {
    const projet = await Projet.findOne({ email: serviceData.titre })
    if (projet) {
      throw new Error('Projet deja existante')
    }

    const newProjet = new Projet({
      numProjet: serviceData.numProjet,
      scenario: serviceData.scenario,
      resultat: serviceData.resultat
    })
  console.log(newProjet)
    let result = await newProjet.save()

    return result
  } catch (error) {
    console.error('Error in projetService.js', error)
    throw new Error(error)
  }
}

module.exports.readProjets = async serviceData => {
  try {
    const projets = await Projet.find()

    return projets
  } catch (error) {
    console.error('Error in projetService.js', error)
    throw new Error(error)
  }
}

module.exports.updateProjet = async serviceData => {
  try {
    console.log('serviceData :',serviceData)
    const projet = await Projet.findOneAndUpdate(
      { _id: serviceData.body._id },
      {
        numProjet: serviceData.body.numProjet,
        scenario: serviceData.body.scenario,
        resultat: serviceData.body.resultat
      },
      { new: true }
    )
    return projet.toObject()
  } catch (error) {
    console.error('Error in projetService.js', error)
    throw new Error(error)
  }
}