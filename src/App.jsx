import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import RootLayout from './pages/root';
import AllEventPage from './pages/all-event';
import ErrorPage from './pages/error-page/ErrorPage';
import CreateEvent from './pages/create-event';
import Login from './pages/login';
import Register from './pages/register';
import Event from './components/Events';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'event', element: <AllEventPage />, loader: Event },
      { path: 'newEvent', element: <CreateEvent /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
