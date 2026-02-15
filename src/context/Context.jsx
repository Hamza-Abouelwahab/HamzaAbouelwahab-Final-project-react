import  { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext()

const Context = ({children}) => {

    const [cart , setCart ] = useState([])
    

    const addToCart = (product) => {

    setCart((prevCart) => {
    const isProductInCart = prevCart.find((item) => item.title === product.title);

    if (isProductInCart) {
      return prevCart.map((item) =>
        item.title === product.title 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
};
    
    useEffect(()=>{
       console.log(addToCart);
       
    },[cart])

    const value = {
        cart  , setCart , addToCart
    }

    return (

        <>
            <MyContext.Provider value={value}>
                {children}
            </MyContext.Provider>
        </>
    );
};
export  {Context};
export const useAppContext = () => useContext(MyContext)

