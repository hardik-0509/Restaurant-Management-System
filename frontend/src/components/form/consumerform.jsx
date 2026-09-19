import { useState } from 'react'
import { addConsumer } from '../../services/api'
import styles from './ConsumerForm.module.css'

const ConsumerForm = () => {

  const [form, setForm] = useState({
    name:'',
    email:'',
    phone_number:''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addConsumer(form)

    alert('Registered Successfully')

    setForm({
      name:'',
      email:'',
      phone_number:''
    })
  }
  return(
    <form className={styles.form} onSubmit={handleSubmit}>

      <input
        type='text'
        placeholder='Enter Name'
        value={form.name}
        onChange={(e)=>setForm({...form, name:e.target.value})}
      />

      <input
        type='email'
        placeholder='Enter Email'
        value={form.email}
        onChange={(e)=>setForm({...form, email:e.target.value})}
      />

      <input
        type='text'
        placeholder='Enter Phone Number'
        value={form.phone}
        onChange={(e)=>setForm({...form, phone:e.target.value})}
      />

      <button type='submit'>Register</button>

    </form>
  )
}

export default ConsumerForm