import Video from '../Modals/Video.js'


const uploadVideo = async (req,res)=>{
    try{
        const { title, description, videoLink, videoType,thumbnail }  = req.body;
        
        const videoUpload = new Video({ user: req.user._id ,title, description, videoLink, videoType,thumbnail })
        await videoUpload.save()

        console.log(videoUpload);
        
        res.status(201).json({ sucess: "true", videoUpload });


    }catch (error){
        res.status(500).json({ error: 'Server error' });
        
        
    }
}


const getAllVideo = async(req,res)=>{
    try{
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
        


        res.status(201).json({ sucess: "true", "videos": videos });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

const getVideoById = async (req,res)=>{
    try{
        let {id} = req.params;
        
        const video = await Video.findById(id).populate('user','channelName profilePic userName createdAt');

        res.status(201).json({ sucess: "true", "video": video });
    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

const getAllVideoByUserID = async(req,res)=>{
    try{
        let {userId} = req.params;
        const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt about');
        res.status(201).json({ sucess: "true", "video": video });

    }catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}



export {
    uploadVideo,
    getAllVideo,
    getVideoById,
    getAllVideoByUserID
}