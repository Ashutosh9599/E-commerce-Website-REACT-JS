import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContextProvider from './components/Context/ProductContextProvider';
import ProductList from './components/Products/ProductList';
import Header from './components/Layout/Header';
import About from './components/Layout/About';
import Footer from './components/Layout/Footer';
import Home from './components/Layout/Home';
import Contact from './components/Layout/Contact';
import ProductDetail from './components/Products/ProductDetail';
import Login from './components/Layout/Login';

const App = () => {
  return (
    <Router>
      <ProductContextProvider>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/store" element={<ProductList />} />
            <Route path="/store/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Fragment>
      </ProductContextProvider>
    </Router>
  );
};

export default App;