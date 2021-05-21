import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Components/CheckoutComponent/Checkout/Checkout';
import Home from './Components/HomeComponent/Home/Home';
import Login from './Components/Login/Login/Login';
import { useEffect } from 'react';
import { auth } from './Components/Firebase/FirebaseConfig';
import { useStateValue } from './Components/Redux/StateProvider';
import CreateAccount from './Components/Login/CreateAccount/CreateAccount';

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);

      if (authUser) {
        // the user just logged in / the was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/createAccount'>
            <CreateAccount />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
