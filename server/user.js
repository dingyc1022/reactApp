const express = require('express')
const Router = express.Router()

Router.get('/info',function(req,res){
    // yonghu youmeiyou Cookie
    return res.json({code:1})
})

module.exports = Router