import express from "express";

const router = express.Router()

import UserController from '../Controllers/User.js'


router.post("/signUp",UserController.signUp)
router.post('/login',UserController.signIn);
router.post('/logout',UserController.logout);


export default router; 