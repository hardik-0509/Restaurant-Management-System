import { useEffect, useState } from 'react'
import { getConsumers, getMenu, addMenuItem } from '../../services/api'
import styles from './dashboard.module.css'

const Dashboard = () => {

  const [consumers, setConsumers] = useState([])
  const [menu, setMenu] = useState([])

  const [item, setItem] = useState({
    itemName:'',
    description:'',
    price:'',
    image:''
  })

  useEffect(()=>{
    document.title = 'Food Hub | Dashboard'
    loadData()
  },[])

  const loadData = async () => {
    const consumerData = await getConsumers()
    const menuData = await getMenu()

    setConsumers(consumerData)
    setMenu(menuData)
  }
   const handleAdd = async (e) => {
    e.preventDefault()

    try {
      const response = await addMenuItem(item)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to add menu item')
      }

      alert('Menu Item Added')

      setItem({
        itemName:'',
        description:'',
        price:'',
        image:''
      })

      loadData()
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }

  return(
    <div className={styles.container}>

      <h1>Dashboard</h1>

      <div className={styles.sections}>

        <div className={styles.left}>

          <h2>Add Menu Item</h2>
           <form className={styles.form} onSubmit={handleAdd}>

            <input
              type='text'
              placeholder='Item Name'
              value={item.itemName}
              onChange={(e)=>setItem({...item, itemName:e.target.value})}
            />

            <textarea
              placeholder='Description'
              value={item.description}
              onChange={(e)=>setItem({...item, description:e.target.value})}
            />

            <input
              type='text'
              placeholder='Price'
              value={item.price}
              onChange={(e)=>setItem({...item, price:e.target.value})}
            />

            <input
              type='text'
              placeholder='Image URL'
              value={item.image}
              onChange={(e)=>setItem({...item, image:e.target.value})}
            />

            <button type='submit'>Add Item</button>
          </form>
        </div>

        <div className={styles.right}>
          <h2>Consumers</h2>
          <ul>
            {consumers.map((consumer) => (
              <li key={consumer.id || consumer._id}>{consumer.name || consumer.email}</li>
            ))}
          </ul>

          <h2>Menu</h2>
          <ul>
            {menu.map((menuItem) => (
              <li key={menuItem.id || menuItem._id}>
                {menuItem.itemName} - {menuItem.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
