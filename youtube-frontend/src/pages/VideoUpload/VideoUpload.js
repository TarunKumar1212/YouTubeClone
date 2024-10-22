import React, { useState,useEffect } from 'react'
import './VideoUpload.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const VideoUpload = () => {

    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })
    const [loader ,setLoader] = useState(false);
    const navigate = useNavigate()

    const handleOnChangeInput = (event, name) => {

        setInputField({
            ...inputField, [name]: event.target.value
        })
    }

    const uploadImage = async (e, type) => {
        setLoader(true)
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
             // cloudName="dkatbsarb"
            

             const response = await axios.post(`https://api.cloudinary.com/v1_1/dkatbsarb/${type}/upload`, data)
             const Url = response.data.url;
             setLoader(false)
             let val = type==="image"?"thumbnail":"videoLink"
             setInputField({
                ...inputField,[val]:Url
             })
            
             
        } catch (err) {
            setLoader(false)
            console.log(err)
        }


    }
    
    useEffect(()=>{
        let isLogin = localStorage.getItem("userId");
        if(isLogin===null){
            navigate('/')
        }
    },[])
    
    console.log(inputField)
    const handleSubmitFunc = async()=>{
        // {/* Please watch the video for the code} */}

    }

    

    return (
        <div className='videoUpload'>
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>

                <div className="uploadForm">
                    {/* Please watch the video for the code} */}

                    {
                    loader && <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                    }
                </div>

                
                

                <div className="uploadBtns">
                    <div className="uploadBtn-form" onClick={handleSubmitFunc}>Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>

            </div>
        </div>
    )
}

export default VideoUpload