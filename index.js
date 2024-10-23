import express from 'express';

const app = express();
const port = 4000;

app.use(express.json())
import './Connection/Conn.js'; 


import AuthRoutes from './Routes/User.js'; 

app.use('/auth', AuthRoutes);

app.listen(port, () => {
    console.log("Running on port 4000");
});
