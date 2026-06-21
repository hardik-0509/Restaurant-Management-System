import { Menu } from '../models/menu.js';


export const addMenuItem = async (req, res) => {

    try {

        const { itemName, description, price, image } = req.body;

        const menuItem = new Menu({
            itemName,
            description,
            price,
            image
        });
        console.log(menuItem);
        await menuItem.save();
        console.log('Menu item saved successfully');

        res.status(201).json({
            message: 'Menu item added successfully',
            menuItem
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to add menu item',
            error: error.message
        });

    }
};



export const getMenuItems = async (req, res) => {

    try {

        const menuItems = await Menu.find();

        res.json(menuItems);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to get menu items',
            error: error.message
        });

    }
};


// Filter Menu
export const filterMenu = async (req, res) => {

    try {

        const { min, max } = req.query;

        let filter = {};

        if (min && max) {

            filter.price = {
                $gte: Number(min),
                $lte: Number(max)
            };

        } else if (max) {

            filter.price = {
                $lt: Number(max)
            };

        }

        const items = await Menu.find(filter);

        res.json(items);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to filter menu',
            error: error.message
        });

    }
};