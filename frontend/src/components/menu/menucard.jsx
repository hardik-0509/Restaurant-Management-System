import styles from './MenuCard.module.css'

const MenuCard = ({item}) => {

  const orderFood = () => {
    alert('Order Placed Successfully!')
  }

  return(
    <div className={styles.card}>

      <img src={item.image} alt={item.itemName} />

      <div className={styles.content}>
        <h3>{item.itemName}</h3>
        <p>{item.description}</p>
        <h4>₹{item.price}</h4>

        <button onClick={orderFood}>Order Now</button>
      </div>

    </div>
  )
}

export default MenuCard