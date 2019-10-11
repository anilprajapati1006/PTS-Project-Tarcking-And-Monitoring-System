const Router = require('express').Router();

Router.get('/',(req,res,next)=>{
    res.render('soft/home',{title: 'PTS-Project Tracking & Monitoring System'})
})
Router.get('/admin',(req,res,next)=>{
    res.render('admin/admin',{title: 'Admin Panel'})
})

module.exports = Router;