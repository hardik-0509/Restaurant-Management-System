import { useEffect } from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(()=>{
    document.title = 'Food Hub | Home'
  },[])

  return(
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome To Food Hub 🍔</h1>
        <p>Fresh Food • Fast Delivery • Great Taste</p>
        <Link to='/menu' className={styles.menuLink}>Explore Menu</Link>
      </div>
    </div>
  )
}

export default Home