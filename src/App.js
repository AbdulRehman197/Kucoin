import React, { Component } from 'react';
import Header from './components/Header';
import Slider from './components/Slider/Slider';
import Products from './components/Addproduct/Products';
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
      <div >
        {/* <Header /> */}
        <Slider />
        <Products />
        <Footer />
      </div>
    );
  }
}
export default App;
