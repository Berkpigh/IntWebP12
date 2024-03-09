const express = require('express')
const router = express.Router()
const epoqueController = require('../controllers/epoqueController')
//const tokenValidation = require('../middleware/tokenValidation')

router.post('/epoque', epoqueController.addEpoque)

router.get('/epoques', epoqueController.readEpoques)

module.exports = router
/* 
router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

router.get('/signout', userController.signOut)
 */