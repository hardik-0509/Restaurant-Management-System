import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {connectDB} from './src/config/database.js';
import menuRoutes from './src/routes/menuRoutes.js';
import consumerRoutes from './src/routes/consumerRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import searchMenuRoutes from './src/routes/searchMenu.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/menu',menuRoutes);
app.use('/api/consumers',consumerRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/menu',searchMenuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
})


