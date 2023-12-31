import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContentSection from './ContentSection';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from './Carousel';
import History from './History';

const App = () => {
  return (
    <div className="app">
      <header>
        <nav>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">HEADER</h1>
        </nav>
      </header>
      <hr className="my-4 border-t-2 border-gray-400" />
      <ContentSection className="text-sm sm:text-base md:text-lg lg:text-xl" />
      <hr className="my-4 border-t-2 border-gray-400" />

      <Carousel />
      <hr className="my-4 border-t-2 border-gray-400" />
      <History className="text-sm sm:text-base md:text-lg lg:text-xl" />
      <footer>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">&copy; 2023 Serafini. All rights reserved. Made by EJEC</p>
      </footer>
    </div>
  );
};

export default App;
