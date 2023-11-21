
import './App.css';
import React, { Component } from 'react'
import Header from './component/Header'
import ProductListing from './component/ProductListing'
import ProductDetails from './component/ProductDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact Component={ProductListing} />
            <Route path="/product/:productId" exact Component={ProductDetails} />
            <Route >404 Not Found</Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
