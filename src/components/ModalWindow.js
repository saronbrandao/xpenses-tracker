import { useFirestore } from '../hooks/useFirestore';
// import { useCollection } from '../hooks/useCollection';

// styles
import styles from './ModalWindow.module.scss';

const ModalWindow = (props) => {
  const { deleteDocument } = useFirestore('transactions');
  // const { documents } = useCollection('transactions');

  const deleteAllHandler = () => {
    props.currentDocument.map((transaction) => deleteDocument(transaction.id));
    props.setModalVisible(false);
  };

  const closeModalHandler = () => {
    props.setModalVisible(false);
  };

  return (
    <div className={styles['modal-window']} onClick={closeModalHandler}>
      <div className={styles['modal-options']}>
        <h2>Are you sure?</h2>
        <div className={styles['modal-option']} onClick={deleteAllHandler}>
          <p>Yes</p>
        </div>
        <div className={styles['modal-option']} onClick={closeModalHandler}>
          <p>No</p>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
