'use client';

import StarBackground from "./components/StarBackground";

import Navigation from "./components/Navigation";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Max from "./components/Max";

export default function Home() {
  const [showContactModel, setShowContactModel] = useState(false);
  const [navSelection, setNavSelection] = useState('Home');
  const [showMessageSuccess, setShowMessageSuccess] = useState(false);


  
  const onContactClick = () => {
    console.log('Contact clicked');
  }


  return (
    <div className=" overflow-x-hidden ">
      <StarBackground/>
      <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
      
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <Portfolio/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
      
    </div>
  );
}
