import React, { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaRegUserCircle, FaTwitter } from 'react-icons/fa';
import { FaSquarePinterest } from 'react-icons/fa6';
import ImagesConstant from '../constant';
import { GrShop } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/Context';
import CartToAdd from '../components/cartToAdd';

const Header = () => {
    const { cart } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=""> 
            
            <div className="bg-black/5 py-2 px-10 flex items-center justify-between">
                <nav className='flex gap-3 items-center'>
                    <a href=""><FaFacebookF size={20} className='text-black/50 hover:text-red-400' /></a> 
                    <a href=""><FaTwitter size={20} className='text-black/50 hover:text-red-400' /></a>
                    <a href=""><FaSquarePinterest size={20} className='text-black/50 hover:text-red-400' /></a>
                    <a href=""><FaGooglePlusG size={26} className='text-black/50 hover:text-red-400' /></a>
                    <a href=""><FaInstagram size={20} className='text-black/50 hover:text-red-400' /></a>
                </nav>
                <p className='text-black/50 text-sm'>Free shipping for standard order over $100</p>
                <div className="flex items-center gap-3">
                    <p className='text-black/50 text-sm'>fashe@example.com</p>
                    <select className='text-black/50 text-[14px] outline-0 bg-transparent' name="" id="" >
                        <option value="">USD</option>
                        <option value="">EUR</option>
                        <option value="">GBP</option>
                    </select>
                </div>
            </div>

            
            <div className="py-6 w-full relative px-12 flex items-center justify-between border-b">
                <div>
                    <img src={ImagesConstant.logo} alt="Logo" />
                </div>
                <div className='flex gap-10 justify-center font-medium'>
                    <Link to="/" className='hover:text-red-400 transition'>Home</Link>
                    <Link to="/shop" className='hover:text-red-400 transition'>Shop</Link>
                    <Link to="/blog" className='hover:text-red-400 transition'>Blog</Link>
                    <Link to="/about" className='hover:text-red-400 transition'>About</Link>
                    <Link to="/contact" className='hover:text-red-400 transition'>Contact</Link>
                </div>
                <div className="flex items-center gap-4">
                    <FaRegUserCircle size={25} className='text-black/50 cursor-pointer hover:text-black transition' />
                    <p className='bg-black/30 w-px h-5 '></p>
                    
                    <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
                        <GrShop size={25} className='text-black/50 hover:text-black transition' />
                        <p className='bg-black absolute -top-1 -right-2 w-4 h-4 text-white rounded-full text-[10px] flex justify-center items-center font-bold'>
                            {cart.length}
                        </p>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0  z-999 flex justify-end">

                    <div className="relative w-80 bg-white h-100 shadow-2xl p-4 overflow-y-auto">
                        <div className="flex justify-end items-center mb-4 border-b pb-4">
                            <button 
                                onClick={() => setIsOpen(false)} 
                                className="text-2xl hover:rotate-90 cursor-pointer transition-transform duration-300"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="mt-4">
                            <CartToAdd />
                        </div>

                        {cart.length > 0 && (
                            <div className="mt-10 border-t pt-6">
                                <button className="w-full bg-black cursor-pointer text-white py-3 rounded hover:bg-gray-800 transition">
                                    VIEW CART & CHECKOUT
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;