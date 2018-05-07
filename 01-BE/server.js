
// Basing code from my code: 
// https://github.com/Edxael/Gral-03-18/blob/master/04-API/02-XML-Singers/01-Node-API-BE/server.js


// ===[ DEPENDENCIES ]========================================================================
const express    = require('express')
const app        = express()
const router     = express.Router()
const bodyParser = require('body-parser')



// ===[ MIDLEWARE ]==========================================================================
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./headers'))




// ===[ ROUTES ]==============================================================================
app.use('/api', router)      // all of our routes will be prefixed with /api
router.route('/email')     // create a singer (accessed at POST http://localhost:5000/api/singers)


.post( (req, res) => {
    console.log( 'Request:\n', req.body.xml )

    // parseString(req.body.xml, (err, result) => { oneSinger.name = result.SingerProfile.name[0] } )

    
})