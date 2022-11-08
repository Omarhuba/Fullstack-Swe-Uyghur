import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {useState, useMemo, useContext} from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar }  from './components/Layout/Navbar';
import { Home } from './views/Home';
import { Album } from './views/Album';
import { Products } from './views/Products';
import { About } from './views/About';
import { LoginView } from './views/auth/LoginView';
import { RegisterView } from './views/auth/RegisterView';



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
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/album' element={<Album/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/register' element={<RegisterView/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
