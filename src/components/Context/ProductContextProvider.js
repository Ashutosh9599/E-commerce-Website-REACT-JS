import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png'],
    reviews: ['Great product!', 'Highly recommended.'],
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png'],
    reviews: ['Great product!', 'Highly recommended.'],
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png'],
    reviews: ['Great product!', 'Highly recommended.'],
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: ['https://prasadyash2411.github.io/ecom-website/img/Album%204.png'],
    reviews: ['Great product!', 'Highly recommended.'],
  },
];

const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.title === product.title);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ProductContext.Provider value={{ productsArr, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
