import express from "express"; 
import {signUp,signIn,logout} from "../Controllers/User.js"

const router = express.Router()

router.route("/signUp").post(signUp)
router.route("/login").post(signIn)
router.route("/logout").post(logout)

export default router;
