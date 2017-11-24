import React, { Component } from 'react'; 
import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div className="Slider">  
           <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="img-fluid w-100" src="https://c402277.ssl.cf1.rackcdn.com/photos/5330/images/magazine_large/wild_dogs-web.jpg?1381854919" alt="First slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h3>Test</h3>
                    <p>Test</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="http://www.modernhdwallpaper.com/image/5/Elephant%20wallpaper%2037%201920x1200.jpg" alt="Second slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h3>Test</h3>
                    <p>Test</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5240561220001_5212917445001-vs.jpg?pubId=5104226627001&videoId=5212917445001" alt="Third slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h3>Test</h3>
                    <p>Test</p>
                </div>
                </div>
           </div>
         </div>
      </div>
    );
  }
}

export default Slider;