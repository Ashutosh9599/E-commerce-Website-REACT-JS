import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from './components/Context/ProductContextProvider';
import ProductList from './components/Products/ProductList';
import Header from './components/Layout/Header';
import About from './components/Layout/About';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <Router>
      <ProductContextProvider>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/store" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
          <Footer/>
        </Fragment>
      </ProductContextProvider>
    </Router>
  );
};

export default App;