


import Image from "next/image";
import Nivakaran from '../images/nivakaranText.png'

import React, {useEffect} from "react";
import StarBackground from "./StarBackground";
import RingOfFire from "./RingOfFire/RingOfFire";

const Hero = () => {

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.hero1', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 200,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.hero2', {
                origin: 'bottom',
                distance: '20px',
                duration: 800,
                delay: 500,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if(typeof window !== 'undefined'){
            import('scrollreveal').then((ScrollReveal) => { 
                ScrollReveal.default().reveal('.hero3', {
                origin: 'bottom',
                distance: '50px',
                duration: 800,
                delay: 800,
                easing: 'ease-in-out',
                reset: false
            })
        })
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
          import('scrollreveal').then((ScrollReveal) => {
            ScrollReveal.default().reveal('.hero4', {
              duration: 1000,
              delay: 1200,
              easing: 'ease-in-out',
              reset: false,
              opacity: 0, 
            });
          });
        }
      }, []);

       useEffect(() => {
        if (typeof window !== 'undefined') {
          import('scrollreveal').then((ScrollReveal) => {
            ScrollReveal.default().reveal('.hero5', {
              duration: 1000,
              delay: 1400,
              easing: 'ease-in-out',
              reset: false,
              opacity: 0, 
            });
          });
        }
      }, []);

    const onKnowClick = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
    
    return(
        <div className="  w-[100vw] pt-[5vh]  bg-contain bg-no-repeat bg-center overflow-x-hidden w-[100vw] min-h-[100vh] flex items-center justify-center">
            <StarBackground/>

            <div className="flex pb-[30px] flex-col text-center">
                        <div className="absolute pt-[5vh] top-0 left-0 w-full h-full flex items-center justify-center">
                <RingOfFire/>

            </div>
                <p className="hero1 select-none  text-[#41cad9] text-[50px]">Welcome to Codebug</p>
                <p className=" hero2 select-none  text-[34px]">Empowering Tomorrow with Innovation</p>
                
                <p className="text-[25px] select-none text-[#EFA130] w-[50vw] px-[25px] hero4">Building scalable, intelligent, and transformative software solutions for a digital first world</p>
                <div className="flex flex-col relative">
                    <div className="flex flex-row space-x-[20px] absolute top-[40px] bottom-[30%] right-[45%] left-[45%] items-center justify-center ">
                    
                        <div onClick={() => onKnowClick()} className="hero4 bg-[#fff]  transition-all duration-300 shadow-md hover:shadow-lg ring-[1px] hover:ring-[3px] ring-[#D9CDBB] text-black hover:text-white hover:bg-[#5E3828] text-[20px] px-[25px] py-[8px] rounded-[5px] cursor-pointer">
                            <p>Explore</p>
                        </div>
                        <div onClick={() => onKnowClick()} className="hero4 flex flex-row bg-[#EFA130] text-[20px]  transition-all duration-300 shadow-md hover:shadow-lg ring-[1px] hover:ring-[3px] ring-[#D9CDBB] text-black hover:text-white hover:bg-[#5E3828] px-[25px] py-[8px] rounded-[5px] cursor-pointer">
                            <p>GetStarted</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Hero;