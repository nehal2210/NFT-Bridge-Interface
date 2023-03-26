import { createContext, useEffect, useState } from "react";

export const ChainContext = createContext(null);


function Context({ children }:any) {
    const [departureChain, setDepartureChain] = useState();
    const [destinationChain, setDestinationChain] = useState();

  
    return (
      <ChainContext.Provider value={{ departureChain, setDepartureChain,destinationChain, setDestinationChain }}>
        {children}
      </ChainContext.Provider>
    );
  }


export default Context;