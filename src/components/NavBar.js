import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import NavButton from './UI/NavButton';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        {user && window.innerWidth >= 400 && (
          <li className={styles.title}>XPENSES</li>
        )}
        {!user && window.innerWidth >= 300 && (
          <li className={styles.title}>XPENSES</li>
        )}

        {!user && (
          <div className={styles.btnContainers}>
            <li className={styles.loginBtn}>
              <NavButton link={'/login'}>Login</NavButton>
            </li>
            <li className={styles.signupBtn}>
              <NavButton link={'/signup'}>Signup</NavButton>
            </li>
          </div>
        )}
        {user && (
          <>
            <li className={styles.navUserName}>
              Welcome, {user.displayName}! 😁
            </li>
            <NavButton link={'/login'} onClick={logout}>
              LOGOUT
            </NavButton>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

// <li className="btn" onClick={logout}>
// Logout
// </li>
