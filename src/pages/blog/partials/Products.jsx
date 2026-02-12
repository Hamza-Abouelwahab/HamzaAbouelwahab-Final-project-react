import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import images from '../../../constant/images/images';

const Products = () => {
    return (
        <div className='space-y-8'>
            <div className=" w-65 relative">
                <input className='border  w-full outline-0 rounded-4xl px-3 py-4' type="search" placeholder='Search All Articles...' />
                <IoIosSearch className='absolute top-1/2 right-2 -translate-1/2'/>
            </div>
                <h1 className='text-2xl font-extrabold'>Featured Products</h1>

             <div className="">
                <div className="flex gap-3  w-25">
                    <img src={images.shopy8} alt="" />
                    <div className="">
                    <p className='text-xl w-35 font-light'>Boxy7 T-Shirt with Roll Sleeve</p>
                    <span className='font-light text-xs'>$20.00 </span>
                    </div>
                </div>
            </div>

             <div className="">
                <div className="flex gap-3  w-25">
                    <img src={images.shopy7} alt="" />
                    <div className="">
                    <p className='text-xl w-35 font-light'>Boxy7 T-Shirt with Roll Sleeve</p>
                    <span className='font-light text-xs'>$20.00 </span>
                    </div>
                </div>
            </div>

             <div className="">
                <div className="flex gap-3  w-25">
                    <img src={images.shopy6} alt="" />
                    <div className="">
                    <p className='text-xl w-35 font-light'>Boxy7 T-Shirt with Roll Sleeve</p>
                    <span className='font-light text-xs'>$20.00 </span>
                    </div>
                </div>
            </div>

             <div className="">
                <div className="flex gap-3  w-25">
                    <img src={images.shopy5} alt="" />
                    <div className="">
                    <p className='text-xl w-35 font-light'>Boxy7 T-Shirt with Roll Sleeve</p>
                    <span className='font-light text-xs'>$20.00 </span>
                    </div>
                </div>
            </div>

             <div className="">
                <div className="flex gap-3  w-25">
                    <img src={images.shopy4} alt="" />
                    <div className="">
                    <p className='text-xl w-35 font-light'>Boxy7 T-Shirt with Roll Sleeve</p>
                    <span className='font-light text-xs'>$20.00 </span>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl font-extrabold'>Tags Cloud</h1>
            <div className="flex gap-0.5">
                <button className='border border-black/30 text-black/50 cursor-pointer rounded-4xl px-4 py-1' >crafts</button> ,
                <button className='border border-black/30 text-black/50 cursor-pointer rounded-4xl px-4 py-1' >street style</button>
            </div>
        </div>
    );
};

export default Products;