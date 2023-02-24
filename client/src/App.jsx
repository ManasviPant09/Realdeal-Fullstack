import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Success from './Pages/Success';

const App = () => {
  const user = false;
  const auth = false;
  return (
    <>
    <Router>
    <Routes>
      <Route exact path="/" element = {<Home />}>
      </Route >
      <Route path="/product/:id" element={<Product />}>
      </Route>
      <Route path="/products/:category" element={<ProductList />}>
      </Route>
      <Route path="/login" element = {
       auth ? (<Navigate to = {"/"} />) : (<Login/>)
       }>
      </Route>
      <Route path="/register" element = {
        user ? (<Navigate to = {"/"} />) : (<Register/>)
        }>
      </Route>
      <Route path="/cart" element={<Cart />}>
      </Route>
      <Route path="/success" element={<Success />}>
      </Route>
    </Routes>
    </Router>
    </>
    );
}
export default App;