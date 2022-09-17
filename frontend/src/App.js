import {useState, useMemo, useContext} from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavbarC } from './Router/NavbarC';
// import {Footer} from './components/Layout/Footer'

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
      <AuthProvider>



      <NavbarC fixed="top"/>

      </AuthProvider>

      {/* <Footer/> */}
    </div>
  );
}

export default App;
