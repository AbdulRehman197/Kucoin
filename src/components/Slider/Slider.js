import React, { Component } from 'react';
import sliderimage1 from './images/sliderimage1.jpg';
import sliderimage2 from './images/sliderimage2.jpg';
import sliderimage3 from './images/sliderimage3.jpg';
import sliderimage4 from './images/sliderimage4.jpg';

class Slider extends Component {
  render() {
    return (
      <div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={sliderimage1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={sliderimage2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={sliderimage3} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={sliderimage4} alt="Second slide" />
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>
    );
  }
}

export default Slider;