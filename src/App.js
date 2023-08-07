import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import Friendslist from './components/Friendslist';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


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
            <Link to='/friendslist'>FRIENDS LIST</Link>
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
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/addfriend' element={
          <PrivateRoute>
            <AddFriend />
          </PrivateRoute>}/>
        <Route exact path='/friendslist' element={
          <PrivateRoute>
            <Friendslist />
          </PrivateRoute>}/>
        <Route exact path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
