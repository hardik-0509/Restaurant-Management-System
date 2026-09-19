import {useState} from 'react';
import styles from './Login.module.css';
import {login} from '../../services/api';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Login = ()=>{
    const navigate = useNavigate();
    const [form,setForm] = useState({
        email:'',
        password:''
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        const res = await login(form);


        if(res.token){
            localStorage.setItem('token',res.token);
            alert('Login Successful');
            navigate('/home');
        }
        else{
            alert('Login Failed');
        }
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.name}>Food Hub</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.head}>Login</h1>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type='email' onChange={(e)=>setForm({...form,email:e.target.value})}/>
                <label className={styles.label}>Password</label>
                <input className={styles.input} type='password' onChange={(e)=>setForm({...form,password:e.target.value})}/>
                <button className={styles.button1} type='submit'>Login</button>
                <p className={styles.text}>Don't have an account? 
                    <Link to='/signup'>Sign up</Link>
                    </p>
            </form>
        </div>
    )
}

export default Login;