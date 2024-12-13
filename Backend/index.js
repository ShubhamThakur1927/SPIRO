import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app = express()

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);

app.get('/',(req,res) => {
    res.send({
        message:'welcome to Spiro'
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
});

