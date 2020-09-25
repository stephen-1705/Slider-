import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow:true,
      autoplay:true,
      fade:true
    };
  return (
    <div className="App">
    <div className="slider">
         <Slider {...settings}>
          <div className="">
            <img width="100%" src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1447&q=80' alt="cars" /> 
          </div>
          <div className="">
            <img width="100%" src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt="cars" />
          </div>
          <div className="">
            <img width="100%" src='https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' alt="cars" />
          </div>
          {/*<span onclick={slickNext}>Next</span>
          <span onclick={slickPrev}>Prev</span>*/}
         </Slider>
    </div>    
    </div>
  );
}

export default App;
