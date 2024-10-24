import Comment from '../Modals/Comment'



const addComment = async(req,res)=>{
    try{
        // please watch the video for the code

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}


const getCommentByVideoId = async(req,res)=>{
    try{
         // please watch the video for the code

    } catch (error){
        res.status(500).json({ error: 'Server error' });
    }
}

export {
    addComment,
    getCommentByVideoId
}