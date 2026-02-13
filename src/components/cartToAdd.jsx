import React from 'react';
import { useAppContext } from '../context/Context';
import { FaTrashAlt } from 'react-icons/fa'; // زدت ليك أيقونة المسح

const CartToAdd = () => {
    const { cart, setCart } = useAppContext(); 

    const removeFromCart = (indexToRemove) => {
        setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    if (cart.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-400">Your cart is empty</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {cart.map((item, index) => (
                <div key={index} className="flex gap-4 items-center pb-2 group">
                    <div className="w-20 h-24 bg-gray-100 overflow-hidden rounded">
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition"
                        />
                    </div>

                    <div className="flex-1">
                        <h4 className="font-medium text-sm text-gray-800 line-clamp-1">{item.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">1 x {item.price}</p>
                    <button 
                        key={index}
                        onClick={() => removeFromCart(index)}
                        className="text-black/80 pl-5 pt-1  hover:text-red-500 cursor-pointer transition"
                    >
                        X 
                    </button>
                    </div>

                </div>
            ))}

            
            <div className="mt-4">
                <div className="flex justify-end items-center gap-1.5 text-black/60  text-lg">
                    <span>Subtotal :</span>
                    <span>
                        ${cart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartToAdd;