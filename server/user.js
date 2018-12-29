const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model =  require('./model')
const User = model.getName('user') 

Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
    // User.remove({},function(e,d){})
})
Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或者密码错误'})
        } 
        res.cookie('userid',doc._id)
        return  res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res){
    const {user,pwd,type} = req.body
    User.findOne({user:user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,type,pwd:md5Pwd(pwd)},function(e,d){
            if(e){
                return res.json({code:0,msg:'后端出错'})
            }
            return res.json({code:0})
        })
    })
})
Router.get('/info',function(req,res){
    const { userid }  = req.cookies
    if(!userid){
        return res.json({code:1})
    }
})
function md5Pwd(pwd){
    let salt = 'imooc_is_good_3957x8yza6!@IUHJh~~'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router