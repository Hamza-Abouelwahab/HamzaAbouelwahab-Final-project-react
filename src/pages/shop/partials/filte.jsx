import React from 'react';
import { FaSearch, FaSearchDollar } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

const Filte = () => {
    return (
        <div className='w-[25vw] space-y-2.5 '>
            <div className="space-y-1">
                <h1 className='text-xl font-extrabold'>Categories</h1>
                <p className='text-black/80'>Best Seller (8 items)</p>
                <p className='text-black/80'>Featured (8 items)</p>
                <p className='text-black/80'>Men (8 items)</p>
                <p className='text-black/80'>Women (8 items)</p>
            </div>
            <div className="space-y-1">
                <h1 className='text-xl font-extrabold'>Price</h1>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className='w-3.25 h-3.25 border border-black/80 rounded cursor-pointer ' />
                    <label htmlFor="" className='text-[17px] text-black/80'>0-20</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className='w-3.25 h-3.25 border border-black/80 rounded cursor-pointer ' />
                    <label htmlFor="" className='text-[17px] text-black/80'>20-40</label>
                </div>
            </div>
            <div className="space-y-1">
                <h1 className='text-xl font-extrabold'>Size</h1>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className='w-3.25 h-3.25 border border-black/80 rounded cursor-pointer ' />
                    <label htmlFor="" className='text-[17px] text-black/80'>S</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className='w-3.25 h-3.25 border border-black/80 rounded cursor-pointer ' />
                    <label htmlFor="" className='text-[17px] text-black/80'>M</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className='w-3.25 h-3.25 border border-black/80 rounded cursor-pointer ' />
                    <label htmlFor="" className='text-[17px] text-black/80'>L</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" className='w-3.25 h-3.25 border border-black/80 rounded cursor-pointer ' />
                    <label htmlFor="" className='text-[17px] text-black/80'>XL</label>
                </div>
                <div className="mt-6 relative border w-55">
                    <input className='outline-0 border w-full border-black/20 px-2 py-4' type="search" placeholder='Search...' />
                    <IoIosSearch className='text-black/80 absolute right-0 top-1/2 -translate-1/2'/>
                </div>
            </div>

        </div>
    );
};

export default Filte;