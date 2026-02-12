import React from 'react';
import images from '../../../constant/images/images';
import { motion } from 'motion/react';
import { Scale } from '../../../animations/animation';
import { FaAngleRight, FaArrowRightLong } from 'react-icons/fa6';

const Featured = () => {
    return (
        <div className='w-[70vw] '>
            <div className=" w-[70vw] flex justify-center ">
            <motion.img variants={Scale} initial="rest" whileHover="hover" src={images.blog01} alt="" />
            </div>
            <div className="my-10  space-y-3">
            <h1 className='text-2xl font-bold my-5'>Black Friday Guide: Best Sales & Discount Codes</h1>
            <span>by fashe-theme Admin | crafts, street style | 1 Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
            <div className="flex w-fit hover:cursor-pointer gap-3 items-center hover:text-red-400">
            <button className='hover:cursor-pointer'>Continue Reading</button>
            <FaArrowRightLong/>
            </div>
            </div>
            <div className=" w-[70vw] flex justify-center ">
            <motion.img variants={Scale} initial="rest" whileHover="hover" src={images.blog02} alt="" />
            </div>
            <div className="my-10  space-y-3">
            <h1 className='text-2xl font-bold my-5'>The White Sneakers Nearly Every Fashion Girls Own</h1>
            <span>by fashe-theme Admin | crafts, street style | 1 Comments</span>
            <p>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames</p>
            <div className="flex w-fit hover:cursor-pointer gap-3 items-center hover:text-red-400">
            <button className='hover:cursor-pointer'>Continue Reading</button>
            <FaArrowRightLong/>
            </div>
            </div>
            <div className="flex items-center gap-2">
                <p className='border w-8 h-8 rounded-full flex justify-center items-center text-xl border-white/30  text-white bg-black '>1</p>
                <p className='border w-8 h-8 rounded-full flex justify-center items-center text-xl border-black/30 '>2</p>
                <p className='border w-8 h-8 rounded-full flex justify-center items-center text-xl border-black/30 text-black/80 '><FaAngleRight/></p>
            </div>
        </div>
    );
};

export default Featured;