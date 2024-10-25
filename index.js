import express from 'express';
import './Connection/Conn.js'; 
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const port = 4000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}))


import AuthRoutes from './Routes/User.js'; 
import VideoRoutes from './Routes/Video.js'
import CommentRoutes from './Routes/Comment.js'


app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);
app.use('/commentApi',CommentRoutes)

app.listen(port, () => {
    console.log("Running on port 4000");
});

