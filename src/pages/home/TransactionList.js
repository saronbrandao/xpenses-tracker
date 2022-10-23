import styles from './Home.module.css';

export const TransactionList = ({ transactions }) => {
  // console.log(transactions);

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => {
        console.log(transaction);
        return (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>$ {transaction.amount}</p>
          </li>
        );
      })}
    </ul>
  );
};
