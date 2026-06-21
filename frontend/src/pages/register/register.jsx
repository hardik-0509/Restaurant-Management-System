import { useEffect } from 'react';
import ConsumerForm from '../../components/form/consumerform';
import styles from './Register.module.css';

const Register = () => {
  useEffect(() => {
    document.title = 'Food Hub | Register';
  }, []);

  return (
    <div className={styles.container}>
      <h1>Consumer Registration</h1>
      <ConsumerForm />
    </div>
  );
};

export default Register;