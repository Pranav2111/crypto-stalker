import React, { createContext, useEffect, useState } from "react";

export const Coin = createContext();

const ContextCryto = ({ children }) => {


    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
        else setSymbol(selected);
        

    }, [currency,selected]);


    return (
        <Coin.Provider value={{ currency, setCurrency, symbol ,setSelected}}>
            {children}
        </Coin.Provider>
    )
}

export default ContextCryto;