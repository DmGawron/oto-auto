import { useContext, useState } from "react";
import { createContext } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
	// const [selectedCarData, setSelectedCarData] = useState({
	// 	carBody: "",
	// 	brand: "",
	// 	model: "",
	// 	fuel: "",
	// 	priceFrom: "",
	// 	priceTo: "",
	// 	yearFrom: "",
	// 	yearTo: "",
	// 	mileageFrom: "",
	// 	mileageTo: "",
	// });

	return <CarContext.Provider value={{}}>{children}</CarContext.Provider>;
};

///custom hook
export const useCarContext = () => useContext(CarContext);
