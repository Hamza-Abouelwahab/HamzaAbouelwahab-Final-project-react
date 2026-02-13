import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const GreatAccont = () => {
    return (
        <div className=''>
            <div className="flex gap-2 text-xs px-12 py-8 text-black/80   items-center ">
                <div className="hover:text-red-400 transition duration-300 flex items-center gap-2">
                <Link  className='' to="/">Home</Link>
                <p>&gt;</p>
                </div>
                <a className='hover:text-red-400 transition duration-300' href='/account/register'>Greate Account</a>
            </div>
            <div className="px-5 pb-8">
                <h1 className='text-5xl'>Greate Account</h1>
                <p className='text-black/70 text-xl pt-2'>Your Personal Details</p>
                
                <div className="flex flex-col space-y-2 py-5 pl-4 w-220">
                    <label htmlFor="">First Name</label>
                    <input className='outline-0 border border-black/20 p-2' type="text" placeholder='First Name' />
                    <label htmlFor="">Last Name</label>
                    <input className='outline-0 border border-black/20 p-2' type="text" placeholder='Last Name' />
                    <label htmlFor="">Email</label>
                    <input className='outline-0 border border-black/20 p-2' type="Email" placeholder='Email' />
                    <label htmlFor="">Password</label>
                    <input className='outline-0 border border-black/20 p-2' type="password" placeholder='Password' />
                    <div className="flex gap-1 items-center py-5">
                    <button className='flex items-center gap-1 bg-black text-white px-6 cursor-pointer py-2'><IoPerson/> GREATE </button> 
                    <span className='text-black/50 pl-4'>Or</span> 
                    <Link to="/" className='hover:text-red-400 text-black/50'>Return to Store</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreatAccont;