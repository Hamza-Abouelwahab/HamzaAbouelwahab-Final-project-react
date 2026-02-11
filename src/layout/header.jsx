import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaRegUserCircle, FaTwitter } from 'react-icons/fa';
import { FaSquarePinterest } from 'react-icons/fa6';
import ImagesConstant from '../constant';
import { GrShop } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="bg-black/5 py-2 px-10   flex items-center  justify-between">
                <nav className='flex gap-3 items-center'>
                    <a href=""><FaFacebookF size={20} className='text-black/50 hover:text-red-400' /></a> 
                    <a href=""><FaTwitter size={20} className='text-black/50 hover:text-red-400' /></a>
                    <a href=""><FaSquarePinterest size={20} className='text-black/50 hover:text-red-400' /></a>
                    <a href=""><FaGooglePlusG size={26} className='text-black/50 hover:text-red-400' /></a>
                    <a href=""><FaInstagram size={20} className='text-black/50 hover:text-red-400' /></a>
                </nav>
                <p className='text-black/50'>Free shipping for standard order over $100</p>
                <div className="flex items-center gap-3">
                    <p className='text-black/50'>fashe@example.com</p>
                    <select className='text-black/50 text-[14px] outline-0 ' name="" id="" >
                        <option className=' hover:text-amber-500'  value="">USD</option>
                        <option className=' hover:text-amber-500'  value="">EUP</option>
                        <option className=' hover:text-amber-500'  value="">GBP</option>
                        <option className=' hover:text-amber-500'  value="">CAD</option>
                        <option className=' hover:text-amber-500'  value="">JPY</option>
                    </select>
                </div>
            </div>
            {/* footer of Header */}
            <div className="py-6  w-full bg-amber-100 px-12 flex items-center  justify-between ">
                <div className="">
                    <img src={ImagesConstant.logo} alt="" />
                </div>
                <div className=' flex gap-15 w-150 justify-center'>
                    <Link to="/" className='hover:border-b' >Home</Link>
                    <Link to="/shop" className='hover:border-b' >Shop</Link>
                    <Link to="/blog" className='hover:border-b' >Blog</Link>
                    <Link to="/about" className='hover:border-b' >About</Link>
                    <Link to="/contact" className='hover:border-b' >Contact</Link>
                </div>
                <div className="flex items-center gap-4">
                    <FaRegUserCircle size={25} className='text-black/50' />
                    <p className='bg-black/30 px-[0.4px] h-5 '></p>
                    <div className="relative">
                    <GrShop size={25} className='text-black/50' />
                        <p className='bg-black absolute top-0 -right-1.5 w-4 h-4 text-white rounded-4xl text-xs flex justify-center items-center'>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;