import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../components/Authentication';

function Register() {
  const haveToken = localStorage.getItem('token');
  // 已登入
  if (haveToken) {
    return <div className="register">已經登入</div>;
  }
  const registerEmail = useRef();
  const registerPassword = useRef();
  const navigate = useNavigate();
  const handleRegister = () => {
    const mode = 'signup';
    Authentication({
      email: registerEmail.current.value,
      password: registerPassword.current.value,
      mode,
      navigate,
    });
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
          <input type="email" id="account" ref={registerEmail} />
        </label>
        <label htmlFor="password">
          Password :
          <input type="password" id="password" ref={registerPassword} />
        </label>
      </form>
      <div className="button-wrap">
        <button type="button" onClick={switchToLogin}>Go to Login</button>
        <button type="button" onClick={handleRegister} className="btn-light"> Register</button>
      </div>
    </div>
  );
}

export default Register;
