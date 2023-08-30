import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../style/RootLayout.css';

function RootLayout() {
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
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                to="/login"
              >
                Login
              </NavLink>

            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'nav-active' : undefined)}
                to="/register"
              >
                Register
              </NavLink>

            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
