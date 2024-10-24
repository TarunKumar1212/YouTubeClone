import express from 'express';
import {auth} from '../middleware/auth.js'
import {
    uploadVideo,
    getAllVideo,
    getVideoById,
    getAllVideoByUserID
    
} from '../Controllers/Video.js'


const router = express.Router();



router.route('/video').post(auth,uploadVideo)
router.route('/allVideo').get(getAllVideo)
router.route('/getVideoByID/:id').get(getVideoById)
router.route('/:userId/channel').get(getAllVideoByUserID)


export default router;
