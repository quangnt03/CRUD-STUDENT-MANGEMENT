const { Router } = require('express')

const {
  Home, Profile, Search,
  Create, Update, Remove
} = require('../controllers')

const router = Router()

router.get('/', Home)

router.get('/profile/:id', Profile)

router.get('/search/', Search)

router.get('/create/', Create.get)
router.post('/create/', Create.post)

router.get('/update/:id', Update.get)
router.post('/update/:id', Update.put)

router.post('/delete/:id', Remove)

module.exports = router
