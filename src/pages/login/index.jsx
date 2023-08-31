import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../components/Authentication';

function Login() {
  const navigate = useNavigate();
  const haveToken = localStorage.getItem('token');
  // 已登入
  if (haveToken) {
    return <div className="login">已經登入</div>;
  }
  const loginEmail = useRef();
  const loginPassword = useRef();
  const handleLogin = () => {
    const mode = 'login';
    Authentication(loginEmail.current.value, loginPassword.current.value, mode, navigate);
  };
  const switchToRegister = () => {
    navigate('/register');
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label htmlFor="account">
          E-mail :
          <input type="email" id="account" ref={loginEmail} />
        </label>
        <label htmlFor="password">
          Password :
          <input type="password" id="password" ref={loginPassword} />
        </label>
      </form>
      <div className="button-wrap">
        <button type="button" onClick={switchToRegister}>Go to Register</button>
        <button type="button" onClick={handleLogin} className="btn-light">Login</button>
      </div>
    </div>
  );
}

export default Login;
