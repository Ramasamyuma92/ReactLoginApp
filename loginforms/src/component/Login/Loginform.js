import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function LoginForm(props){

    let history = useHistory();

  const routeChange = () =>{ 
    let path = '/uploadDocument'; 
    history.push(path);
  }

  const space = {
    top: "256px", left: "780px", width: "538px", height: "66px"
  }
    
    return(
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-center" >
                    <h3> Welcome Back </h3>
                </div>
                <p>Email address </p>
                <div className="form-group text-left">                
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                
                </div>
                <div className="form-group text-left">
                    <p>Password </p>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary" style = {{ backgroundColor : "lightgreen"}}onClick = {routeChange}>
                    Login
                </button>
                <div className="form-group text-right">
                    
                    <Link to='/'>Forgot your password?</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;