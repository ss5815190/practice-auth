import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {

  };
  const switchToRegister = () => {
    navigate('/register');
  };
  return (
    <div className="login">
      <form>
        <label htmlFor="account">
          E-mail :
          <input type="email" id="account" />
        </label>
        <label htmlFor="password">
          Password :
          <input type="password" id="password" />
        </label>
      </form>
      <div className="button-wrap">
        <button type="button" onClick={switchToRegister} className="register-button">Go to Register</button>
        <button type="button" onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  );
}

export default Login;
