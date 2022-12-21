import styles from './FormButton.module.scss';

const NavButton = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default NavButton;
