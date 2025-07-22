'use client';
import Image from "next/image";
import StarBackground from "./components/StarBackground";
import RingOfFire from "./components/RingOfFire/RingOfFire";
import ShootingStars from "./components/ShootingStars";
import Navigation from "./components/Navigation";
import { useState } from "react";
import Hero from "./components/Hero";

export default function Home() {
  const [showContactModel, setShowContactModel] = useState(false);
  const [navSelection, setNavSelection] = useState('Home');
  const [showMessageSuccess, setShowMessageSuccess] = useState(false);

   const onMessageSuccess = () => {
    setShowMessageSuccess(true);
    setTimeout(() => {
      setShowMessageSuccess(false);
    }, 3000);
  };
  
  const onContactClick = () => {
    setShowContactModel(!showContactModel);
  }

  const [loading, setLoading] = useState(false);

  return (
    <div className=" overflow-x-hidden w-[100vw">
      <StarBackground/>
      <Hero/>
      <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
    </div>
  );
}
