import React from 'react';
import { useAppContext } from '../context/Context';


const CardShop = ({ img, title, price }) => {
    const {addToCart} = useAppContext()
  return (

    <div className="group ">

      <div className="w-full h-[70vh] relative overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={title} />
        
    
        <div className="absolute  bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
          <button onClick={ () => addToCart({img , title , price})} className="bg-black text-white cursor-pointer px-6 py-2 rounded-full font-bold hover:bg-red-400 hover:text-white transition whitespace-nowrap">
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-black/70">{title}</p>
        <span className="text-black/70 font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default CardShop;
