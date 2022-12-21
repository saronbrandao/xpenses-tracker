import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// components
import FormButton from '../../components/UI/FormButton';
import LoadSpinner from '../../components/UI/LoadSpinner';
import FormContainer from '../../components/UI/FormContainer';

import styles from './Signup.module.scss';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password, displayName);
    signup(email, password, displayName);
  };

  return (
    <FormContainer>
      <form className={styles['signup-form']} onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </label>
        <label>
          <span>display name:</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        {isPending && <LoadSpinner />}
        {!isPending && <FormButton>SIGNUP</FormButton>}
        {error && <p>{error}</p>}
      </form>
    </FormContainer>
  );
};

export default Signup;
