import React from 'react';
import './App.css';
import GetPost from '../src/components/getpost'
import Get from '../src/components/get'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Button} from "@material-ui/core"

function App() {
  return (
    <div className="App">
      <Router>

      
      <h1>Users</h1>
      <div>
      <Route exact path='/'><Get/></Route>
      </div>
      <div>
        <Link to='/users'><Button variant="contained" className="addUser" color='secondary'>add user</Button></Link>
      <Route exact path='/users'><GetPost/></Route>
      </div>
      </Router>
    </div>
  );
}

export default App;
