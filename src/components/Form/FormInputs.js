import Input from "./Input";
import "./FormInputs.css";
import Button from "./Button/Button";
import { useGlobalContext } from "../../AppContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FormInputs() {
	const {
		brandsArr,
		carsBodyType,
		fuelTypeArr,
		yearArr,
		pricesArr,
		mileageArr,
		selectedCarData,
		handleSelectListItem,
		filterCars, //tymczasowo
		filteredCarsData,
		selectedCarModels,
	} = useGlobalContext();

	const navigate = useNavigate();

	console.log(selectedCarData);
	// console.log(filteredCarsData);
	console.log(selectedCarModels);
	// function handleClick(e) {
	// 	// e.preventDefault();
	// 	filterCars(); //tymczasowo
	// 	// navigate("wyniki");
	// }

	return (
		<div className="inputs-container">
			<form className="inputs-form">
				<Input
					name="carBody"
					text="Typ nadwozia"
					listData={carsBodyType}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="brand"
					text="Marka pojazdu"
					listData={brandsArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="model"
					text="Model pojazdu"
					id="model"
					listData={selectedCarModels?.models.sort()}
					handleSelectListItem={handleSelectListItem}
					disableInput={!selectedCarModels}
				/>
				<Input
					name="fuel"
					text="Rodzaj paliwa"
					id="fuel"
					listData={fuelTypeArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="priceFrom"
					text="Cena od"
					short
					listData={pricesArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="priceTo"
					text="Cena do"
					short
					listData={pricesArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="yearFrom"
					text="Rok produkcji od"
					short
					listData={yearArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="yearTo"
					text="Rok produkcji do"
					short
					listData={yearArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="mileageFrom"
					text="Przebieg od"
					short
					listData={mileageArr}
					handleSelectListItem={handleSelectListItem}
				/>
				<Input
					name="mileageTo"
					text="Przebieg do"
					short
					listData={mileageArr}
					handleSelectListItem={handleSelectListItem}
				/>
				{/* <Link to="wyniki" className="search-btn">
					Pokaż 10000 Ogłoszeń
				</Link> */}
				<Button
					onClick={(e) => {
						e.preventDefault();
						filterCars(); //tymczasowo
						navigate("wyniki");
					}}

					// onClick={handleClick}
				/>
			</form>
		</div>
	);
}
export default FormInputs;
