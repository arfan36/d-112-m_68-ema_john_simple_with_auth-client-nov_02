import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log('Product load first before fetch');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log('Products loaded');
            });
    }, []);

    useEffect(() => {
        // console.log('Local stroge first line', products);
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct, quantity);
                savedCart.push(addedProduct);
            }
            // console.log('Local storage finished');
        }
        setCart(savedCart);
        console.log(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;