'use client';
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { useState } from "react";


const Careers = () => {
    const [showContactModel, setShowContactModel] = useState(false);
      const [navSelection, setNavSelection] = useState('Careers');
      const [showMessageSuccess, setShowMessageSuccess] = useState(false);
    
    
      
      const onContactClick = () => {
        console.log('Contact clicked');
      }
    return (
        <div className=" overflow-x-hidden ">
            <Navigation navSelection={navSelection} onContactClick={onContactClick}/>
            <div className="flex flex-col items-center justify-center h-[100vh]">

            </div>
            <Footer/>
        </div>
    )
}

export default Careers;