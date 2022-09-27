import './Product.css';
import React from 'react';

const Product = (props) => {
    const { id, category, name, seller, price, stock, ratings, ratingsCount, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;