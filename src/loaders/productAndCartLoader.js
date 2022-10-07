import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    // get Product
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get cart
    const savedCart = getStoredCart();
    const previousCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }
    return { products, previousCart };
};
