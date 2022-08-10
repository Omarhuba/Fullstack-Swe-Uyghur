import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {About} from './views/About';
import {Album} from './views/Album';
import {Register} from './views/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/album' element={<Album/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

