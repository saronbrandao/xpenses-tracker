import styles from './NavButton.module.css';

console.log(styles.container);

const NavButton = () => {
  return (
    <>
      <div className={styles.container}>
        <a className={styles.button}>Hover me!</a>
      </div>
    </>
  );
};

// const NavButton = (props) => {
//   return (
//     <>
//       <div class="container">
//         <h1>Pure Css Button Hover effect</h1>

//         <a href="#" class="button">
//           Hover me
//         </a>
//       </div>
//     </>
//   );
// };

export default NavButton;
