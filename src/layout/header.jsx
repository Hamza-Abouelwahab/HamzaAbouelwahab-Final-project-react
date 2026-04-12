import React, { useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaRegUserCircle,
  FaTwitter,
} from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import ImagesConstant from "../constant";
import { GrShop } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../context/Context";
import CartToAdd from "../components/cartToAdd";

const Header = () => {
  const { cart } = useAppContext();

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="bg-black/5 py-2 px-10 hidden lg:flex items-center justify-between">
        <nav className="flex gap-3 items-center">
          <a href="">
            <FaFacebookF
              size={20}
              className="text-black/50 hover:text-red-400"
            />
          </a>
          <a href="">
            <FaTwitter size={20} className="text-black/50 hover:text-red-400" />
          </a>
          <a href="">
            <FaSquarePinterest
              size={20}
              className="text-black/50 hover:text-red-400"
            />
          </a>
          <a href="">
            <FaGooglePlusG
              size={26}
              className="text-black/50 hover:text-red-400"
            />
          </a>
          <a href="">
            <FaInstagram
              size={20}
              className="text-black/50 hover:text-red-400"
            />
          </a>
        </nav>
        <p className="text-black/50 text-sm">
          Free shipping for standard order over $100
        </p>
        <div className="flex items-center gap-3">
          <p className="text-black/50 text-sm">fashe@example.com</p>
          <select
            className="text-black/50 text-[14px] outline-0 bg-transparent"
            name=""
            id=""
          >
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
          </select>
        </div>
      </div>

      <div className="py-4 w-full relative px-5 md:px-12 flex items-center justify-between border-b">
        <div>
          <img src={ImagesConstant.logo} alt="Logo" />
        </div>
        <div className="hidden lg:flex gap-10 justify-center font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b"
                : "text-black/50  hover:text-red-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b"
                : "text-black/50  hover:text-red-400"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b"
                : "text-black/50  hover:text-red-400"
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b"
                : "text-black/50  hover:text-red-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b"
                : "text-black/50  hover:text-red-400"
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-black/50 hover:text-black" onClick={() => setMenuOpen(o => !o)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <Link to="/account" className="">
            <FaRegUserCircle
              size={25}
              className="text-black/50 cursor-pointer hover:text-black transition"
            />
          </Link>
          <p className="bg-black/30 w-px h-5 "></p>

          <div
            className="relative cursor-pointer"
            onClick={() => { setIsOpen(true); setMenuOpen(false); }}
          >
            <GrShop
              size={25}
              className="text-black/50 hover:text-black transition"
            />
            <p className="bg-black absolute -top-1 -right-2 w-4 h-4 text-white rounded-full text-[10px] flex justify-center items-center font-bold">
              {cart.length}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 font-medium">
          {[["/","Home"],["/shop","Shop"],["/blog","Blog"],["/about","About"],["/contact","Contact"]].map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "text-red-500" : "text-black/50 hover:text-red-400"}>
              {label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Cart drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-999 flex justify-end" onClick={() => setIsOpen(false)}>
          <div className="relative w-80 bg-white h-full max-h-screen shadow-2xl p-4 overflow-y-auto" onClick={e => e.stopPropagation()}>
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
