import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import RootLayout from './pages/root';
import AllEventPage from './pages/all-event-page';
import ErrorPage from './pages/error-page/ErrorPage';
import CreateEvent from './pages/create-event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/event', element: <AllEventPage /> },
      { path: '/newEvent', element: <CreateEvent /> },
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
