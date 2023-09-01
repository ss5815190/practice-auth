import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from '../../components/Authentication';

function Login() {
  const navigate = useNavigate();
  const haveToken = localStorage.getItem('token');
  // 已登入
  if (haveToken && haveToken !== 'undefined') {
    return <div className="login">已經登入</div>;
  }
  const [error, setError] = useState({});
  const loginEmail = useRef();
  const loginPassword = useRef();
  // 驗證登入資訊 有錯誤回傳
  const handleLogin = async () => {
    const mode = 'login';
    try {
      const response = await Authentication({
        email: loginEmail.current.value,
        password: loginPassword.current.value,
        mode,
        navigate,
      });
      setError(response);
    } catch (errorMessage) {
      setError(errorMessage);
    }
  };
  const switchToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login">
      <h1>Login</h1>
      {error && Object.values(error).map((e) => (<div key={e}>{e}</div>))}
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
