import React from 'react';
import './Product.css';
import ProductDetailsControl from './ProductDetailsControl/ProductDetailsControl';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductList from './ProductList/ProductList';
import Pagination from './Pagination/Pagination';

const Product = () => {
    return(
        <div className="Product">
            <div className='products'>
                <ProductDetailsControl/>
                <ProductList/>
                <Pagination/>
            </div>
            <div className='productCategory'>
                <ProductCategory/>
            </div>
        </div>
    );
}

export default Product;