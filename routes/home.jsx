const express = require('express')
const router = express.Router()
const home = require('../controller/home')

<p>"This is the home page"<p>
<p>"added code for commit</p>
router.get('/',home.indexPage)
router.get('/docs',home.docsPage)

module.exports = router