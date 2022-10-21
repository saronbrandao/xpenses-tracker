import styles from './Home.module.css';
import TransactionForm from './transactionForm';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>Transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
