import { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
	brandsArr,
	carsBodyType,
	yearArr,
	pricesArr,
	mileageArr,
	fuelTypeArr,
	allCarsData,
} from "./data/carsData";

const carsArrayData = [
	{
		carBody: "Coupe",
		brand: "Audi",
		model: "A5",
		fuel: "Benzyna",
		price: 55000,
		mileage: 154400,
		year: 2014,
	},
	{
		carBody: "Coupe",
		brand: "BMW",
		model: "M3",
		fuel: "Benzyna",
		price: 255000,
		mileage: 24400,
		year: 2021,
	},
	{
		carBody: "Sedan",
		brand: "Reanult",
		model: "laguna",
		fuel: "Diesel",
		price: 15000,
		mileage: 324400,
		year: 2006,
	},
	{
		carBody: "Sedan",
		brand: "BMW",
		model: "M6",
		fuel: "Benzyna",
		price: 151000,
		mileage: 3400,
		year: 2020,
	},
];

const AppContext = createContext();
// let carsData;

export const AppProvider = ({ children }) => {
	const [selectedCarData, setSelectedCarData] = useState({
		carBody: "",
		brand: "",
		model: "",
		fuel: "",
		priceFrom: "",
		priceTo: "",
		yearFrom: "",
		yearTo: "",
		mileageFrom: "",
		mileageTo: "",
	});

	const [carsData, setCarsData] = useState([]);
	const [filteredCarsData, setFilteredCarsData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchCars() {
			try {
				setIsLoading(true);
				const response = await fetch("http://localhost:3000/cars");
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				console.log(data);
				// setCarsData(data);
				// carsData = data;
				setCarsData(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCars();
	}, []);

	//tymczasowe testowanie funkcji filtrowania

	const filterCars = useCallback(
		function filterCars() {
			const newArr = carsData.filter((car) => {
				const searchedBrand =
					selectedCarData.brand === "" || car.brand === selectedCarData.brand;

				const searchedModel =
					selectedCarData.model === "" || car.model === selectedCarData.model;

				const searchedBody =
					selectedCarData.carBody === "" ||
					car.carBody === selectedCarData.carBody;
				const searchedFuel =
					selectedCarData.fuel === "" || car.fuel === selectedCarData.fuel;

				const notSearchedPriceFrom = selectedCarData.priceFrom === "";
				const notSearchedPriceTo = selectedCarData.priceTo === "";
				const searchedPriceFrom =
					notSearchedPriceFrom || car.price >= selectedCarData.priceFrom;
				const searchedPriceTo =
					notSearchedPriceTo || car.price <= selectedCarData.priceTo;

				const notSearchedYearFrom = selectedCarData.yearFrom === "";
				const notSearchedYearTo = selectedCarData.yearTo === "";

				const searchedYearFrom =
					notSearchedYearFrom || car.year >= selectedCarData.yearFrom;
				const searchedYearTo =
					notSearchedYearTo || car.year <= selectedCarData.yearTo;

				const notSearchedMileageFrom = selectedCarData.mileageFrom === "";
				const notSearchedMileageTo = selectedCarData.mileageTo === "";

				const searchedMileageFrom =
					notSearchedMileageFrom || car.mileage >= selectedCarData.mileageFrom;
				const searchedMileageTo =
					notSearchedMileageTo || car.mileage <= selectedCarData.mileageTo;

				if (
					searchedBrand &&
					searchedBody &&
					searchedFuel &&
					searchedPriceTo &&
					searchedPriceFrom &&
					searchedYearFrom &&
					searchedYearTo &&
					searchedMileageFrom &&
					searchedMileageTo &&
					searchedModel
				) {
					return car;
				} else {
					return null;
				}
			});

			setFilteredCarsData(newArr);
		},
		[carsData, selectedCarData]
	);

	useEffect(() => {
		filterCars();
	}, [filterCars]);

	function handleSelectListItem(name, event) {
		setSelectedCarData((prevData) => {
			return {
				...prevData,
				[name]: event,
			};
		});
	}

	const selectedCarModels = allCarsData.find(
		(car) => car?.brand === selectedCarData?.brand
	);

	function handleModels() {}

	const dataCtx = {
		brandsArr: brandsArr.sort(),
		carsBodyType: carsBodyType.sort(),
		yearArr,
		pricesArr,
		mileageArr,
		fuelTypeArr: fuelTypeArr.sort(),
		handleSelectListItem,
		selectedCarData,
		filterCars, // tymczasowo
		filteredCarsData,
		carsData,
		isLoading,
		selectedCarModels,
	};

	return <AppContext.Provider value={dataCtx}>{children}</AppContext.Provider>;
};

///custom hook
export const useGlobalContext = () => useContext(AppContext);
