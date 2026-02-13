import  { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext()

const Context = ({children}) => {

    const [cart , setCart ] = useState([])
    

    const addToCart = (product) => {
        
        setCart( (prev) => [...prev , product])

    }
    
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

