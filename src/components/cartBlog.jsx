import React from 'react';
import { motion } from 'motion/react';
import { Scale } from '../animations/animation';

const CartBlog = ({img , title , p , span}) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className="overflow-hidden">
                <motion.img variants={Scale} initial="rest" whileHover="hover" transition="tramsition" src={img} alt="" />
            </div>
            <h1 className='font-bold'>{title}</h1>
            <span className='text-black/50 font-light'>{span}</span>
            <p className='text-black/50 font-light'>{p}</p>
        </div>
    );
};

export default CartBlog;