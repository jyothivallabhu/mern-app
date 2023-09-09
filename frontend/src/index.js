import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Error from './components/Error';
import Login from './components/Login';
import App from './components/App'


import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'



import reportWebVitals from './reportWebVitals';

const AppLayout = () =>{
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )

}

const appRouter = createBrowserRouter([
  {
    "path" : "/",
    "element" : <AppLayout />,
    "errorElement" : <Error />,
    children : [
      {
        "path": "/",
        "element": <App />

      },
      {
        "path" : "Login",
        "element" : <Login />
      }
    ]

  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
 
reportWebVitals();
