import mongoose,{Schema} from 'mongoose';

const consumerSchema = new Schema({

  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true }
    
},
{timestamps:true})

export const Consumer = mongoose.model('Consumer',consumerSchema);