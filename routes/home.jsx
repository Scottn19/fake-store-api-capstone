const express = require('express')
const router = express.Router()
const home = require('../controller/home')

<p>"here is the home page"<p>
router.get('/',home.indexPage)
router.get('/docs',home.docsPage)

module.exports = router