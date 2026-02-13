import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='px-12 py-8'>
            <div className="flex gap-2 text-xs pb-8 text-black/80   items-center ">
                <div className="hover:text-red-400 transition duration-300 flex items-center gap-2">
                <Link  className='' to="/">Home</Link>
                <p>&gt;</p>
                </div>
                <a className='hover:text-red-400 transition duration-300' href='/login'>Account</a>
            </div>
            <div className="w-full flex gap-5">
                <div className=" border border-black/20 h-fit  w-[50vw] p-4">
                    <h1 className='text-3xl'>New Customer</h1>
                    <span className=' text-black/50 font-bold'>Register Account</span>
                    <p className='w-120 py-4 text-black/50'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    <div className="">
                        <button className='bg-black text-white px-8 cursor-pointer py-2'>CONTINUE</button>
                    </div>
                </div>
                {/* right side */}
                <div className="border border-black/20 w-[55vw]  h-fit p-4">
                    <h1 className='text-3xl'>Returning Customer</h1>
                    <span className='text-black/50 font-bold'>I am a returning customer</span>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="">Email</label>
                        <input className='outline-0 border border-black/20 p-2' type="email" placeholder='Email' />
                        <label htmlFor="">Password</label>
                        <input className='outline-0 border border-black/20 p-2' type="password" placeholder='Password' />
                    </div>
                        <Link to="" className='hover:text-red-400 transition duration-300' >Forgot your Password?</Link>
                    <div className="flex gap-1 items-center py-5">
                        <button className='bg-black text-white px-6 cursor-pointer py-2'>SING IN</button> 
                        <span className='text-black/50'>Or</span> 
                        <Link to="/" className='hover:text-red-400 text-black/50'>Return to Store</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;