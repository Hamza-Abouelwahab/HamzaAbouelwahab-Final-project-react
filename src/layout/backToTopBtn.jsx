import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { animate } from "framer-motion";

const BackToTopBtn = () => {
        const[isVisible , setIsVisible] = useState(false)

        const CheckScroll = () => {
            window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
        }


        const goUp = () => {
        const scrollElement = window.scrollY; 
        
        animate(scrollElement, 0, {
            type: "tween",
            duration: 0.8, 
            ease: "easeInOut",
            onUpdate: (latest) => window.scrollTo(0, latest),
        });
        };

        useEffect(()=>{
            window.addEventListener("scroll" , CheckScroll)
            return () => window.removeEventListener("scroll" , CheckScroll)
        },[])
        
    return (
        <>
            {
                isVisible && ( <button 
                onClick={goUp}
                className='fixed bottom-10 right-10 bg-black/50 hover:bg-red-400 transition-all duration-300 flex items-center justify-center rounded z-100 text-white cursor-pointer text-2xl w-10 h-10'>
                <MdKeyboardDoubleArrowUp/>
                </button> )
            }
            
        </>
    );
};

export default BackToTopBtn;