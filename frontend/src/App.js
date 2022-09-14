import {useState, useMemo, useContext} from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavbarC } from './Router/NavbarC';
import {Footer} from './components/Layout/Footer'

import AuthContext from './context/AuthProvider'
import {AuthProvider} from './context/AuthProvider'

function App() {
  const {auth, setAuth} = useContext(AuthContext)
  const value = useContext({AuthProvider})

  console.log('hello' + value);
// const [user, setUser] = useState(null)
// const value = useMemo(()=>({user,setUser}),[user, setUser])

  return (
    <div className="App">



      <NavbarC fixed="top"/>
      <Footer/>


    </div>
  );
}

export default App;
