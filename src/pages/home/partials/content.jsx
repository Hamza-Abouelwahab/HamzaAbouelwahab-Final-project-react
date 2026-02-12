import images from "../../../constant/images/images"
import { motion } from "motion/react"
import { Scale } from "../../../animations/animation"
import { Link } from "react-router-dom"
import Btn from "../../../components/button"


export const Moduls = () => {
    
    const card = [
        images.cards1 , images.cards2 , images.cards3 , images.cards4 , images.cards5 , images.cards6
    ]
    

    return (
        <>
            <div className="mt-10 px-5 grid grid-cols-3 grid-rows-2 gap-4 h-200">
  
  
  <motion.div  className="row-span-2 relative group overflow-hidden">
    <motion.img variants={Scale} initial="rest" whileHover="hover" src={card[0]} className="w-full h-full object-cover" alt="Dresses" />
    <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">DRESSES</Link>
  </motion.div>

  
  <div className="col-span-1 relative group overflow-hidden">
    <motion.img variants={Scale} initial="rest" whileHover="hover" src={card[1]} className="w-full h-full object-cover" alt="Watches" />
    <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">WATCHES</Link>
  </div>

  
  <div className="col-span-1 row-span-2 relative group overflow-hidden">
    <motion.img variants={Scale} initial="rest" whileHover="hover" src={card[2]} className="w-full h-full object-cover" alt="Shoes" />
    <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">FOOTWEAR</Link>
  </div>

  <div className="row-span-2 relative group overflow-hidden" >
    <motion.img variants={Scale} initial="rest" whileHover="hover" src={card[4]} className="w-full h-full object-cover" alt="FOOTERWEAR" />
        <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">FOOTERWEAR</Link>
  </div>

  <div className="row-span-1 relative group overflow-hidden">
    <motion.img variants={Scale} initial="rest" whileHover="hover" src={card[3]} className="w-full h-full object-cover" alt="SUNGLASSES" />
    <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">SUNGLASSES</Link>
  </div>

  <div className="row-span-1 relative group overflow-hidden" >
    <motion.img variants={Scale} initial="rest" whileHover="hover" src={card[5]} className="w-full h-full object-cover" alt="ACCESSORIES" />
        <Link to="/shop" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-red-400 transition-all duration-300 cursor-pointer px-8 py-2">ACCESSORIES</Link>
  </div>
            </div>
        
        </>
    )

}   
