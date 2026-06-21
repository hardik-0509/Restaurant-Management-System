import mongoose from 'mongoose';

export function connectDB(){

const URL= 'mongodb://localhost:27017/restaurant';

mongoose.connection.on('open',()=>{
    console.log('Database is connected successfully');
})
    const connection=mongoose.connect(URL);
    return connection;
}