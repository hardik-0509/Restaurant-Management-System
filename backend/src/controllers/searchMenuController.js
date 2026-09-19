import {Menu} from '../models/menu.js';

export const searchMenu = async (req,res) =>{
    try{
        const {name} = req.query;
        const menuItems = await Menu.find({
            itemName: {$regex: name, $options: 'i'}
        })

        res.json(menuItems);
    }
    catch(error){
        res.status(500).json({
            message: 'Failed to search menu',
            error: error.message
        });
    }
}