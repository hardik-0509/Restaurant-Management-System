import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../services/api";
import styles from './Signup.module.css';

function Signup() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await signup(form);

            alert(data.message);

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Signup Failed");

        }
    };

    return (
        <div className={styles.container}>

            <h1 className={styles.header}>Create Account</h1>

    <form className={styles.form} onSubmit={handleSubmit}>
<label className={styles.label}>Name</label>
<input className={styles.input} type="text" placeholder="Name" value={form.name} required onChange={(e) =>setForm({...form,name: e.target.value})}/>
<label className={styles.label}>Email</label>
<input className={styles.input} type="email" placeholder="Email" value={form.email} required onChange={(e) =>setForm({...form,email: e.target.value})}/>
<label className={styles.label}>Password</label>
<input className={styles.input} type="password" placeholder="Password" value={form.password} required onChange={(e) => setForm({ ...form,password: e.target.value})}/>
            <button className={styles.button}type="submit">Signup</button>
             <p className={styles.text}>Already have an account?{" "}
        <Link to="/">Login</Link>
            </p>
    </form>
        </div>
    );
}

export default Signup;