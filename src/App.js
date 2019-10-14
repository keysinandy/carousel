import React from 'react';
import Carousel from './carousel'
import './App.css';
import img0 from './imgs/01.png';
import img1 from './imgs/02.png';
import img2 from './imgs/03.png';
import img3 from './imgs/04.png';
function App() {
  return (
    <div className="App">
      <Carousel imgList={[img0,img1,img2,img3]} bgW={600} bgH={400} intervalTime = {5000}/>
    </div>
  );
}

export default App;
