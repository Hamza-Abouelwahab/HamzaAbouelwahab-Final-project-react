import images from "../../../constant/images/images"
import { motion } from "motion/react"
import { Scale } from "../../../animations/animation"
import { Link } from "react-router-dom"
import Btn from "../../../components/button"
import Carousel2 from "../../../components/Carousel2"


export const Moduls = () => {
    
    const card = [
        images.cards1 , images.cards2 , images.cards3 , images.cards4 , images.cards5 , images.cards6
    ]
    

    return (
        <>
            <div className="my-10 px-5 grid grid-cols-3 grid-rows-2 gap-4 h-200">
  
  
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
    <Carousel2/>
            {/* section */}

            <div className="flex gap-8 py-15 px-5 bg-[#f2f2f2]">
              <div className="relative">
                <motion.img variants={Scale} initial="rest" whileHover="hover"  src={images.banner08} alt="" />
                <div className="absolute top-1/2 left-1/2 -translate-1/2 space-y-2 text-white text-center">
                <p className=""> <span className="text-4xl font-bold">The Beauty</span> <br /><span className="font-bold text-7xl">Lookbook</span></p>
                <a href="" className="uppercase text-xl ">View Collection</a>
                </div>
              </div>
              <div className="relative">
                <motion.img variants={Scale} initial="rest" whileHover="hover"  src={images.shopItem09} alt="" />
                <div className="absolute flex flex-col justify-center items-center bottom-3 left-1/2 -translate-x-1/2 space-y-2 text-black/70 text-center">
                  <p className="text-xl w-90 font-light ">Boxy2 T-Shirt with Roll Sleeve </p>
                  <p>$20.00</p>
                <div className="flex gap-4 mt-5">
                    <div className="border w-15 h-15 p-1">
                      <p>-2600</p>
                      <span>days</span>
                    </div>
                    <div className="border w-15 h-15 p-1">
                      <p>-15</p>
                      <span>hrs</span>
                    </div>
                    <div className="border w-15 h-15 p-1">
                      <p>-21</p>
                      <span>mins</span>
                    </div>
                    <div className="border w-15 h-15 p-1">
                      <p>-33</p>
                      <span>secs</span>
                    </div>
                </div>
                </div>
              </div>
            </div>
        
        </>
    )

}   
