import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import LoginForm from './component/Login/Loginform';
import UploadDocument from './component/Doument/Uploaddocument';

function App() {
  return (
    
    <div className="App">
      <Router>
      <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <LoginForm />
            </Route>
            <Route path="/uploadDocument">
              <UploadDocument />
            </Route>
          </Switch>
       </div>
       </Router>
   </div>
  );
}

export default App;
