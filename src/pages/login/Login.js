import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

// components
import FormButton from '../../components/UI/FormButton';
import FormContainer from '../../components/UI/FormContainer';
import LoadSpinner from '../../components/UI/LoadSpinner';

// styles
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <FormContainer>
      <form className={styles['login-form']} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>email:</span>
          <input
            className="login-input"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {isPending && <LoadSpinner />}
        {!isPending && <FormButton>Login</FormButton>}
        {error && <p>{error}</p>}
      </form>
    </FormContainer>
  );
};

export default Login;
