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

	const [isLoading, setIsLoading] = useState(false);

	async function createNewOffer(newOffer) {
		try {
			setIsLoading(true);
			const res = await fetch("http://localhost:3000/cars", {
				method: "POST",
				body: JSON.stringify(newOffer),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log("data new offer" + data);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}

	//update obiektu tworzonego ogloszenia
	function handleSelectListItemToNewOffer(name, event) {
		setNewCar((prevData) => {
			return {
				...prevData,
				[name]: event,
			};
		});
	}

	function handleNewOffer() {}

	const selectedCarModelsToNewOffer = allCarsData.find(
		(car) => car?.brand === newCar?.brand
	);

	return (
		<CarContext.Provider
			value={{
				selectedCarModelsToNewOffer,
				handleSelectListItemToNewOffer,
				newCar,
				createNewOffer,
				handleNewOffer,
			}}
		>
			{children}
		</CarContext.Provider>
	);
};

///custom hook
export const useNewCarContext = () => useContext(CarContext);
