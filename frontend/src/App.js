import './App.css';
import {Header} from './components/Header.js'
import {Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link> |
      <Link to="/album">Album</Link> |
      <Link to="/register">Resigter</Link> |
     <Header />
    </div>
  );
}

export default App;
