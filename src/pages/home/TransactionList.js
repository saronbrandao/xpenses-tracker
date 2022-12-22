import { useFirestore } from '../../hooks/useFirestore';

import styles from './TransactionList.module.scss';

export const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore('transactions');
  const total = transactions
    .map((transaction) => +transaction.amount)
    .reduce((pv, cv) => pv + cv, 0);

  return (
    <ul className={styles.transactions}>
      <div className={styles.totalExpenses}>
        <p>Total expenses: ${total}</p>
      </div>
      {transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>$ {transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};
