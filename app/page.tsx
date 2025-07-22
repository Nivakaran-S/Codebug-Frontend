'use client';

import StarBackground from "./components/StarBackground";

import Navigation from "./components/Navigation";
import { useState } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const [showContactModel, setShowContactModel] = useState(false);
  const [navSelection, setNavSelection] = useState('Home');
  const [showMessageSuccess, setShowMessageSuccess] = useState(false);


  
  const onContactClick = () => {
    console.log('Contact clicked');
  }


  return (
    <div className=" overflow-x-hidden w-[100vw]">
      <StarBackground/>
      <Hero/>
      <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
    </div>
  );
}
