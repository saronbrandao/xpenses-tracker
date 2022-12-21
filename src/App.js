import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NavBar from './components/NavBar';
import Background from './components/UI/Background';
import FormContainer from './components/UI/FormContainer';

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <Router>
          <NavBar />
          <Background />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (!user ? <Redirect to="/login" /> : <Home />)}
            />
            <Route
              path="/login"
              render={(props) => (user ? <Redirect to="/" /> : <Login />)}
            />
            <Route
              path="/signup"
              render={(props) => (user ? <Redirect to="/" /> : <Signup />)}
            />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;

{
  /* <Switch>
<Route path="/" exact>
  {!user && <Redirect to="/login" />}
  {user && <Home />}
</Route>
<Route path="/login">
  <FormContainer>
    {user && <Redirect to="/" />}
    {!user && <Login />}
  </FormContainer>
</Route>
<Route path="/signup" component={Signup}>
  <FormContainer>
    {user && <Redirect to="/" />}
    {!user && <Signup />}
  </FormContainer>
</Route>
</Switch> */
}
