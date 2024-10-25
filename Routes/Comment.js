import express from 'express';
import  {
    addComment,
    getCommentByVideoId
    } from '../Controllers/Comment.js'
import {auth} from '../middleware/auth.js';

const router = express.Router();


router.route('/comment').post(auth,addComment)
router.route('/comment/:videoId').get(getCommentByVideoId)



export default router