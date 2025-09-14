import express from 'express'; 
import dotenv from 'dotenv';
import path from 'path';// does not need installation because it is a core module of nodejs

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'; 

dotenv.config();  

const app = express();
const __dirname = path.resolve();

const PORT =process.env.PORT || 3000;

app.use("/api/auth" , authRoutes); // all routes in authRoutes will be prefixed with /api/auth
app.use("/api/messages", messageRoutes);

// to make ready for deployement
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist ')));// to get dist folder of frontend to serve static assets
    app.get('*', (_, res) => { 
        res.sendFile(path.join(__dirname, '../frontend','dist',' index.html'));// for any route send index.html file
    })
} 

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT );
} )
