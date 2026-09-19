import { useEffect, useState } from 'react'
import { getMenu, searchMenu } from '../../services/api'
import MenuCard from '../../components/menu/menucard'
import styles from './menu.module.css'

const Menu = () => {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    document.title = 'Food Hub | Menu'

    getMenu()
      .then(data => setItems(data))
      .catch(err => console.log(err))

  }, [])

  const handleSearch = async () => {

    try {

      if(search.trim() === '') {

        const data = await getMenu()
        setItems(data)

        return
      }

      const data = await searchMenu(search)

      setItems(data)

    }
    catch(error) {

      console.log(error)

    }

  }

  return (

    <div className={styles.container}>

      <h1>Our Menu</h1>

      <div className={styles.searchBox}>

        <input 
          type="text"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      <div className={styles.grid}>

        {
          items.map(item => (
            <MenuCard
              key={item._id}
              item={item}
            />
          ))
        }

      </div>

    </div>

  )
}

export default Menu