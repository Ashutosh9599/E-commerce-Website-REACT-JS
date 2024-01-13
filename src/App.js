import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from './components/Context/ProductContextProvider';
import ProductList from './components/Products/ProductList';
import Header from './components/Layout/Header';


const App = () => {
  return (
    <ProductContextProvider>
      <Header/>
      <ProductList />
    </ProductContextProvider>
  );
};

export default App;