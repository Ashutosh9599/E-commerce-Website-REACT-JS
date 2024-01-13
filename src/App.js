import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from './components/Context/ProductContextProvider';
import ProductList from './components/Products/ProductList';


const App = () => {
  return (
    <ProductContextProvider>
      <ProductList />
    </ProductContextProvider>
  );
};

export default App;