import './Product.css';
import React from 'react';

const Product = (props) => {
    const { id, category, name, seller, price, stock, ratings, ratingsCount, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;