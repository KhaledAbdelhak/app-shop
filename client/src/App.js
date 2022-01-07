import './App.css'
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router ,Routes, Route, Navigate, useLocation} from "react-router-dom"
import { useEffect } from 'react';
import Success from './pages/Success';
import { useSelector } from 'react-redux';



const App = () => {
  const logged = useSelector(state => state.user.currentUser);

  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={!logged ? <Navigate to="/" /> : <Cart/>}/>
          <Route path="/login" element={logged ? <Navigate to="/" /> : <Login/>} />
          <Route path="/register" element={logged ? <Navigate to="/" /> : <Register/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
    </div>
  );
}

export default App;
