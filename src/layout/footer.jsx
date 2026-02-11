import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] pt-16 pb-8 px-4 md:px-15 font-sans text-[#666]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        
        <div>
          <h4 className="text-black font-bold mb-6 tracking-wider">GET IN TOUCH</h4>
          <p className="leading-relaxed mb-6 text-sm">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="hover:text-red-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-red-400 cursor-pointer transition" />
            <FaPinterestP className="hover:text-red-400 cursor-pointer transition" />
            <FaGooglePlusG className="hover:text-red-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-red-400 cursor-pointer transition" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-1">
          <div>
            <h4 className="text-black font-bold mb-6 tracking-wider">CATEGORIES</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-red-400  cursor-pointer">Men</li>
              <li className="hover:text-red-400  cursor-pointer">Women</li>
              <li className="hover:text-red-400  cursor-pointer">Dresses</li>
              <li className="hover:text-red-400  cursor-pointer">Sunglasses</li>
            </ul>
          </div>
          <div>
            <h4 className="text-black font-bold mb-6 tracking-wider">LINKS</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-red-400  cursor-pointer">Search</li>
              <li className="hover:text-red-400  cursor-pointer">About Us</li>
              <li className="hover:text-red-400  cursor-pointer">Contact Us</li>
              <li className="hover:text-red-400  cursor-pointer">Returns</li>
            </ul>
          </div>
        </div>

       
        <div>
          <h4 className="text-black font-bold mb-6 tracking-wider">HELP</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-red-400  cursor-pointer">Track Order</li>
            <li className="hover:text-red-400  cursor-pointer">Returns</li>
            <li className="hover:text-red-400  cursor-pointer">Shipping</li>
            <li className="hover:text-red-400  cursor-pointer">FAQs</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-black font-bold mb-6 tracking-wider">NEWSLETTER</h4>
          <div className="relative mb-6">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-transparent border-b border-[#ccc] py-2 focus:outline-none focus:border-red-400 transition"
            />
          </div>
          <button className="bg-[#222] text-white px-10 py-3 rounded-full font-bold hover:bg-red-400 transition uppercase text-sm tracking-widest">
            Subscribe
          </button>
        </div>
      </div>

      
      <div className="mt-20 text-center text-sm border-t border-[#ddd] pt-8">
        <p>Copyright © 2022 <span className="font-semibold">Shopify Theme Developed by MassTechnologist</span> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;