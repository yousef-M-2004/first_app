const express = require('express');
const router = require("express").Router();
const bcrypt = require ('bcrypt');
router.use(express.json());
const {sign_up , users,login} = require("./auth_controller.js");

const {jwt_auth} = require("./auth_middleware.js");
//jwt_auth = auth.jwt_auth ;
//home page
router.get("/",(req,res)=>{
    res.send("home page")
})
//const users = []
//login route
router.get("/login",(req,res)=>{
    res.send("login page ")
})
router.post("/login",login ,async(req,res)=>{
    res.send("hello")
})
// sign up route
router.get("/sign_up ",(req,res)=>{
    res.send("sign up page")
})


router.post("/sign_up", sign_up ,async (req,res)=>{
  
    console.log (users);
})

// profile 
router.get("/profile", jwt_auth , async (req,res , next)=>{  // use the jwt auth function from middlle ware

    res.send(req.user);
})

module.exports = {
    router,
    jwt_auth
};