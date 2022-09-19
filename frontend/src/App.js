import {useState, useMemo, useContext} from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar}  from './components/Layout/Navbar';
import { Home } from './views/Home';


// import { NavbarC } from './Router/NavbarC';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import AuthContext from './context/AuthProvider'
import {AuthProvider} from './context/AuthProvider'

function App() {
  const [{auth, setAuth}] = useState(AuthContext)
  const value = useContext({AuthProvider})

  // console.log('hello' + auth);
// const [user, setUser] = useState(null)
// const value = useMemo(()=>({user,setUser}),[user, setUser])

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Navbar/>
          <Home/>
        </AuthProvider>
      </Router>
    </div>
  );
}
{/* <NavbarC /> */}

export default App;
