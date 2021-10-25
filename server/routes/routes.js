const express = require('express')
const router = express.Router()
const contactTemplateCopy = require('../models/ContactFormModels')

router.post('/signup', (request, response) =>{
    const contactUser = new contactTemplateCopy({
       fullName:request.body.fullName,
       email:request.body.email,
       number:request.body.number,
       country:request.body.country

    })
    contactUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
})
})

module.exports = router