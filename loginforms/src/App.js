import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom';
import LoginForm from './component/Login/Loginform';
import PageContainer from './component/PageContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <LoginForm />
          </Route>
          <Route path="/:page?">
            <PageContainer/>
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
