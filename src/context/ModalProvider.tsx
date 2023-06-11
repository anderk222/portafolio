import { useState, createContext } from "react";
import { childProps, ModalContext } from "../models";

export const modalContext = createContext<null | ModalContext>(null);

const ModalProvider = ({ children }:childProps)=>{
    
    const [ open, setOpen] = useState(false);

    return(
        <modalContext.Provider
        value={{
            open,
            setOpen
        }}
        >
        {children}
        </modalContext.Provider>
    )
    
}

export default ModalProvider;