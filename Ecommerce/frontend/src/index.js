import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from './page/homepage';
import Login from './page/login';
import Signup from './page/signup';
import ProductDetails from './page/productDetails';
import AuthProvider from './context/AuthContext';
import CartProvider from './context/cartContext';
import CartPage from './page/cartpage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'login',
//         element: <Login />
//       }
//     ]

//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route  path='product/:productid' element={<ProductDetails />} />
      <Route path='signup' element={<Signup />} />
      <Route path='cart' element={<CartPage />} />
      </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <AuthProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
