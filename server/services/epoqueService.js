const Epoque = require('../database/models/epoqueModel')

module.exports.addEpoque = async serviceData => {
  console.log(serviceData)
  try {
    const epoque = await Epoque.findOne({ email: serviceData.titre })
    if (epoque) {
      throw new Error('Epoque deja existante')
    }

    const newEpoque = new Epoque({
      titre: serviceData.titre,
      caracteristique: serviceData.caracteristique,
      vecu: serviceData.vecu,
      image: serviceData.image,
      descriptionImage: serviceData.descriptionImage
    })
  console.log(newEpoque)
    let result = await newEpoque.save()

    return result
  } catch (error) {
    console.error('Error in epoqueService.js', error)
    throw new Error(error)
  }
}

/* module.exports.getUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOne({ _id: decodedJwtToken.id })

    if (!user) {
      throw new Error('User not found!')
    }

    return user.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.loginUser = async serviceData => {
  try {
    const user = await User.findOne({ email: serviceData.email })

    if (!user) {
      throw new Error('User not found!')
    }

    const isValid = await bcrypt.compare(serviceData.password, user.password)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    )

    return { token }
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.updateUserProfile = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
    const decodedJwtToken = jwt.decode(jwtToken)
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        userName: serviceData.body.userName
      },
      { new: true }
    )

    if (!user) {
      throw new Error('User not found!')
    }

    return user.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
 */