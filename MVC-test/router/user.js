const router = require('express').Router()
const {getUser, createUser, deleteUser, login} = require('../controllers/user')
const authentication = require('../middlewares/authentication')
router.post('/login',login)
router.get('/',authentication, getUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)

module.exports = router