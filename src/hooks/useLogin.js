import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const history = useHistory();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign the user out
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      //dispatch logout action
      dispatch({ type: 'LOGIN', payload: res.user });

      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
      history.push('/');
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  //cleanup function
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { login, error, isPending };
};
