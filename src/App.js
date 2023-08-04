import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';


function App() {

  return (
    <div className="App">
      <header>
        <h2>FRIENDS DATABASE</h2>
        <ul>
          <li>
            <Link to='/login'>LOGIN.</Link>
          </li>
          <li>
            <Link to='/friendlist'>FRIENDS LIST</Link>
          </li>
          <li>
            <Link to='/addfriend'>ADD FRIEND</Link>
          </li>
          <li>
            <Link to='/logout'>LOGOUT</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
