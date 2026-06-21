import { useEffect, useState } from 'react'
import { getMenu } from '../../services/api'
import MenuCard from '../../components/menu/menucard'
import styles from './menu.module.css'

const Menu = () => {

  const [items, setItems] = useState([])

  useEffect(()=>{

    document.title = 'Food Hub | Menu'

    getMenu()
      .then(data => setItems(data))
      .catch(err => console.log(err))

  },[])

  return(
    <div className={styles.container}>

      <h1>Our Menu</h1>
 <div className={styles.grid}>
        {
          items.map(item => (
            <MenuCard key={item._id} item={item} />
          ))
        }
      </div>

    </div>
  )
}

export default Menu