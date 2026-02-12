import React from 'react';
import CardShop from '../../../components/cardShop';
import images from '../../../constant/images/images';
import Btn from '../../../components/button';
import { FaAngleRight } from 'react-icons/fa6';

const Products = () => {
    return (
        <div className="grid grid-cols-1 space-y-8 ">
                
                    <div className="space-x-3 flex">
                        <select name="" id="" className='outline-0 border w-51 border-black/30 pl-2 pr-10 py-2'>
                            <option value="">Featured</option>
                            <option value="">Best Selling</option>
                            <option value="" selected>Alphabetically, A-Z</option>
                            <option value="">Alphabetically, Z-A</option>
                            <option value="">Price, low to high</option>
                            <option value="">Price, high to low</option>
                            <option value="">Date, new to old</option>
                            <option value="">Date, new to new</option>
                        </select>
                        
                        <select name="" id="" className='outline-0 border w-51 border-black/30 pl-2 pr-10 py-2'>
                            <option value="" selected>10</option>
                            <option value="">20</option>
                            <option value="" >30</option>
                            <option value="">All</option>
                        </select>
                    </div>
                
        <div className='grid grid-cols-3 gap-5'>
            <CardShop img={images.shopi2} title="Boxy T-Shirt with Roll Sleeve Detail" price="$20.00" />
            <CardShop img={images.shopy3} title="Boxy1 T-Shirt with Roll Sleeve Detail" price="$20.00" />
            <CardShop img={images.shopy4} title="Boxy2 T-Shirt with Roll Sleeve Detail" price="$20.00" />
            <CardShop img={images.shopy6} title="Boxy3 T-Shirt with Roll Sleeve Detail" price="$20.00" />
            <CardShop img={images.shopy5} title="Boxy4 T-Shirt with Roll Sleeve Detail" price="$20.00" />
            <CardShop img={images.shopy7} title="Boxy5 T-Shirt with Roll Sleeve Detail" price="$20.00" />
        </div>
                    <div className="flex items-center gap-2">
                        <p className='border w-8 h-8 rounded-full flex justify-center items-center text-xl border-white/30  text-white bg-black '>1</p>
                        <p className='border w-8 h-8 rounded-full flex justify-center items-center text-xl border-black/30 '>2</p>
                        <p className='border w-8 h-8 rounded-full flex justify-center items-center text-xl border-black/30 text-black/80 '><FaAngleRight/></p>
                    </div>
        </div>
    );
};

export default Products;