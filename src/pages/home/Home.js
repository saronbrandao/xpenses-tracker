import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import { TransactionList } from './TransactionList';

// components
import TransactionForm from './TransactionForm';

// styles
import styles from './Home.module.scss';

const Home = (props) => {
  const { user } = useAuthContext();
  const query = ['uid', '==', user.uid];
  const orderBy = ['createdAt', 'desc'];
  const { documents, error } = useCollection('transactions', query, orderBy);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && (
          <TransactionList
            transactions={documents}
            modalVisible={props.modalVisible}
          />
        )}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
