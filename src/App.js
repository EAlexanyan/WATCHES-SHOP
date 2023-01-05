
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Slider from './Components/Slider/Slider';
import Descript from './Components/Descript/Descript';
import { useState } from 'react';
import Products from './Components/Products/Products';
import Popular from './Components/Popular/Popular';
import Footer from './Components/Footer/Footer';


function App() {
 const [itemInfo, setItemInfo] = useState([])

  return (
    <div className="App">
          <NavBar />
          <Slider>
              <div className='item item-1'>
                <img alt='' src='https://cdn.shopify.com/s/files/1/2277/8165/files/slide_03_670x465_crop_center.jpg?v=1613675413' />
              </div>
              <div className='item item-2'>
                <img alt='' src='https://cdn.shopify.com/s/files/1/2277/8165/files/slide_01_670x465_crop_center.jpg?v=1613675413' />
              </div>
              <div className='item item-3'>
                <img alt='' src='https://cdn.shopify.com/s/files/1/2277/8165/files/slide_02_670x465_crop_center.jpg?v=1613675413' />
              </div>
          </Slider>
          <Descript />
          <Products setItemInfo={setItemInfo} itemInfo={itemInfo}/>
          <Popular />
          <Footer />
    </div>
  );
}

export default App;
