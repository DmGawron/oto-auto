import { useContext, useState } from "react";
import { createContext } from "react";
import { allCarsData } from "./data/carsData";
const CarContext = createContext();

export const CarProvider = ({ children }) => {
	const [newCar, setNewCar] = useState({
		carBody: "",
		brand: "",
		model: "",
		fuel: "",
		price: "",
		year: "",
		mileage: "",
		capacity: "",
		city: "",
		power: "",
		image: "",
	});

	//update obiektu tworzonego ogloszenia
	function handleSelectListItemToNewOffer(name, event) {
		setNewCar((prevData) => {
			return {
				...prevData,
				[name]: event,
			};
		});
	}

	const selectedCarModelsToNewOffer = allCarsData.find(
		(car) => car?.brand === newCar?.brand
	);

	return (
		<CarContext.Provider
			value={{
				selectedCarModelsToNewOffer,
				handleSelectListItemToNewOffer,
				newCar,
			}}
		>
			{children}
		</CarContext.Provider>
	);
};

///custom hook
export const useNewCarContext = () => useContext(CarContext);
