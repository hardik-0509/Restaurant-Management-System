import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import {searchMenu} from '../../services/api.js'

const Navbar = () => {
  return(
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Food Hub 🍔</h1>

      <div className={styles.links}>
        
        <Link to='/home'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/register'>Register</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar;