const express = require('express')
const router = express.Router()
const visitController = require('../controller/bot.controller')

router.get('/',(req, res)=>{
    res.status(200).json({
        msg: 'Not here'
    })
})

router.post('/visit',visitController)


module.exports = router