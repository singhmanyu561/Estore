import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Wishlist from './Pages/Wishlist/Wishlist';
import LoginRegister from './Pages/LoginRegister/LoginRegister';
import ContactUs from './Pages/ContactUs/ContactUs';
import ProductDetails from './Component/ProductDetails/ProductDetails';

const Navigation = () => {
    return(
        <div className="Navigation">
           <Router>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/product/productDetails" element={<ProductDetails/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route path="/login" element={<LoginRegister/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
           </Router>
        </div>
    );
}

export default Navigation;