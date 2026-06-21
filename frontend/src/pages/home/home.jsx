import { useEffect } from 'react'
import styles from './Home.module.css'

const Home = () => {

  useEffect(()=>{
    document.title = 'Food Hub | Home'
  },[])

  return(
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome To Food Hub 🍔</h1>
        <p>Fresh Food • Fast Delivery • Great Taste</p>

        <button>Explore Menu</button>
      </div>
    </div>
  )
}

export default Home