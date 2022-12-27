import { useState, useEffect, useRef } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

// components
import FormButton from '../../components/UI/FormButton';

// styles
import styles from './TransactionForm.module.scss';

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { addDocument, response } = useFirestore('transactions');
  const nameInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
      nameInput.current.focus();
    }
  }, [response.success]);

  return (
    <>
      <h3>Add a transaction</h3>
      <form className={styles['transaction-form']} onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            ref={nameInput}
          />
        </label>
        <label>
          <span>Amount $:</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <FormButton>Add Transaction</FormButton>
      </form>
    </>
  );
};

export default TransactionForm;
