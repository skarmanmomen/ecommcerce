
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';

import Account from './components/Account';
import Header from './components/Header';
import LatestProduct from './components/LatestProduct';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

function App() {

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />


        <Route path='/account' element={<Account />} />
        <Route path='/products' element={<LatestProduct />} />
        <Route path='/productsDetails' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<h1 style={{textAlign: "center"}}>About page </h1>} />
        <Route path='/contact' element={<h1 style={{textAlign: "center"}}>Contact page</h1>} />

      </Routes>
    </>



  );
}

export default App;
