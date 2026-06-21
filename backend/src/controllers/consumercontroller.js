import {Consumer} from '../models/consumer.js';

export const addConsumer = async (req,res)=>{
try{
    
        const consumer = new Consumer(req.body);
        await consumer.save();
         
        res.json({message:'Consumer added successfully',consumer});
    }
    catch(error){
        res.json({message:'Failed to add consumer',error});
        }
}

export const getConsumers = async(req,res)=>{
try{
         const consumers = await Consumer.find();
         res.json(consumers);
    }
    catch(error){
        res.json({message:'Failed to get consumer',error});
    }
}
