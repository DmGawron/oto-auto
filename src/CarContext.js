import { useContext, useState } from "react";
import { createContext } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
	return <CarContext.Provider value={{}}>{children}</CarContext.Provider>;
};

///custom hook
export const useCarContext = () => useContext(CarContext);
