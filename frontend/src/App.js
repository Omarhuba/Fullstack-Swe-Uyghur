import {useState, useMemo, useContext} from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar}  from './components/Layout/Navbar';
import { Home } from './views/Home';


// import { NavbarC } from './Router/NavbarC';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import AuthContext from './store/auth-context'


function App() {
  const [{auth, setAuth}] = useState(AuthContext)
  const ctx = useContext(AuthContext)

  // console.log('hello' + auth);
// const [user, setUser] = useState(null)
// const value = useMemo(()=>({user,setUser}),[user, setUser])

  return (
    <div className="App">
      <Router>
        { ctx.auth && <Navbar />}
          <Home/>
      </Router>
    </div>
  );
}
{/* <NavbarC /> */}

export default App;
