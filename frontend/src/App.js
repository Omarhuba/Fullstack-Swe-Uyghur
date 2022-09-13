import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavbarC } from './Router/NavbarC';
import {Footer} from './components/Layout/Footer'
function App() {
  return (
    <div className="App">
      <NavbarC/>
      <Footer/>
    </div>
  );
}

export default App;
