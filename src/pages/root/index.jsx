import React from 'react';
import { NavLink, Outlet, useRouteLoaderData } from 'react-router-dom';
import '../../style/RootLayout.css';

function RootLayout() {
  const token = useRouteLoaderData('root');
  console.log(token);
  return (
    <>
      <div className="root-layout">
        <h1>todoEvent</h1>
        <nav className="nav-link">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                to="/"
                end
              >
                Home
              </NavLink>

            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                to="/event"
              >
                Event
              </NavLink>

            </li>
            <li>
              {!token && (
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                to="/login"
              >
                Login
              </NavLink>
              )}

            </li>
            <li>
              {!token && (
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                to="/register"
              >
                Register
              </NavLink>
              )}

            </li>
            <li>
              {token && (
              <NavLink to="/">
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('expiration');
                  }}
                >
                  Logout
                </button>
              </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
