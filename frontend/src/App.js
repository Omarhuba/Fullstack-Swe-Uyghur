import './App.css';
import {Header} from './components/Header.js'
import img from './assets/images/header.jpg'
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Header />
     <img src={img} alt=""  style={{withd: '1440px', height: '600px'}}/>
    </div>
  );
}

export default App;
