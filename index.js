import express from 'express';
import './Connection/Conn.js'; 
import cookieParser from 'cookie-parser';


const app = express();
const port = 4000;

app.use(express.json())
app.use(cookieParser())



import AuthRoutes from './Routes/User.js'; 
import VideoRoutes from './Routes/Video.js'


app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);

app.listen(port, () => {
    console.log("Running on port 4000");
});

