import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Topbar from './jsx/pages/header/Topbar';
import Header from './jsx/pages/header/Header';
import SliderSection from './jsx/components/dashboard/Slider';
import About from './jsx/components/dashboard/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import InfoSection from './jsx/components/dashboard/InfoSection';
import Home from './jsx/components/dashboard/Home';
import FooterSection from './jsx/pages/footer/FooterSection';
import Contact from './jsx/components/dashboard/Contact';
import AboutUs from './jsx/components/dashboard/AboutUs';
import Services from './jsx/components/dashboard/Services';
import Gallery from './jsx/components/dashboard/Gallery';
import FoodProducts from './jsx/components/dashboard/categories/FoodProducts';
import BuildingMaterials from './jsx/components/dashboard/categories/BuildingMaterials';
import Fertilisers from './jsx/components/dashboard/categories/Fertilisers';
import ScrollToTop from './jsx/pages/ScrollToTop';
import OnionPowder from './jsx/components/dashboard/sub-categories/OnionPowder';
import EggPowder from './jsx/components/dashboard/sub-categories/EggPowder';
import MoringaPowder from './jsx/components/dashboard/sub-categories/MoringaPowder';
import GarlicPowder from './jsx/components/dashboard/sub-categories/GarlicPowder';
import PotatoPowder from './jsx/components/dashboard/sub-categories/PotatoPowder';
import ZincSalfateMonohydrate from './jsx/components/dashboard/sub-categories/ZincSalfateMonohydrate';
import ZincSulphateHeptahydrate from './jsx/components/dashboard/sub-categories/ZincSulphateHeptahydrate';
import CopperSulphate from './jsx/components/dashboard/sub-categories/CopperSulphate';
import CowDungs from './jsx/components/dashboard/sub-categories/CowDungs';
import LaminatedSheets from './jsx/components/dashboard/sub-categories/LaminatedSheets';
import WoodenDoors from './jsx/components/dashboard/sub-categories/WoodenDoors';
import Tiles from './jsx/components/dashboard/sub-categories/Tiles';
import Basin from './jsx/components/dashboard/sub-categories/Basin';
import Toilets from './jsx/components/dashboard/sub-categories/Toilets';
import PVCDoors from './jsx/components/dashboard/sub-categories/PVCDoors';

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      offset: 120,
      once: false,
      mirror: false
    });

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      <ScrollToTop/>
      {showArrow && (
        <div className="aero-container">
          <div className="aero-main">
            <a className="aero-part" href="#home">⬆</a>
          </div>
        </div>
      )}

      <Topbar />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/service" exact element={<Services />} />
        <Route path="/products/food/products" exact element={<FoodProducts />} />
        <Route path="/products/building/materials" exact element={<BuildingMaterials />} />
        <Route path="/products/fertilisers" exact element={<Fertilisers />} />
        <Route path="/products/onion-powder" exact element={<OnionPowder />} />
        <Route path="/products/egg-powder" exact element={<EggPowder />} />
        <Route path="/products/moringa-powder" exact element={<MoringaPowder />} />
        <Route path="/products/garlic-powder" exact element={<GarlicPowder />} />
        <Route path="/products/potato-powder" exact element={<PotatoPowder />} />
        <Route path="/products/zinc-sulphate" exact element={<ZincSalfateMonohydrate />} />
        <Route path="/products/zinc-heptahydrate" exact element={<ZincSulphateHeptahydrate />} />
        <Route path="/products/copper-sulphate" exact element={<CopperSulphate />} />
        <Route path="/products/cow-dung" exact element={<CowDungs />} />
        <Route path="/products/laminated-sheets" exact element={<LaminatedSheets />} />
        <Route path="/products/wooden-door" exact element={<WoodenDoors />} />
        <Route path="/products/tiles" exact element={<Tiles />} />
        <Route path="/products/basin" exact element={<Basin />} />
        <Route path="/products/toilets" exact element={<Toilets />} />
        <Route path="/products/PVCDoors" exact element={<PVCDoors />} />
      </Routes>
      <FooterSection />
    </div>
  );
};

export default App;
