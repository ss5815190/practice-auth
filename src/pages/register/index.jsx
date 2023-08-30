import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const handleRegister = () => {

  };
  const switchToLogin = () => {
    navigate('/login');
  };
  return (
    <div className="register">
      <h1>Create an Account</h1>
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
        <button type="button" onClick={switchToLogin} className="register-button">Go to Login</button>
        <button type="button" onClick={handleRegister} className="login-button"> Register</button>
      </div>
    </div>
  );
}

export default Register;
