import { Link } from 'react-router-dom';
import styles from './NavButton.module.scss';

const NavButton = (props) => {
  return (
    <>
      <Link to={props.link} className={styles.button} onClick={props.onClick}>
        {props.children}
      </Link>
    </>
  );
};

export default NavButton;
