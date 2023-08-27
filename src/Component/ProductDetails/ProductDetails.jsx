import React from 'react';
import './ProductDetails.css';
import Category from '../Category/Category';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductName from './ProductName/ProductName';
import RelatedProduct from './RelatedProduct/RelatedProduct';

const ProductDetails = () => {
    return(
        <div className="ProductDetails">
            <div className='ProductInfo'>
                <ProductName/>
                <ProductDescription/>
                <RelatedProduct/>
            </div>
            <div className='Category'>
                <Category/>
            </div>
        </div>
    );
}

export default ProductDetails;