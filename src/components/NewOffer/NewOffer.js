import styles from "./NewOffer.module.css";
import {
	brandsArr,
	carsBodyType,
	yearArr,
	pricesArr,
	mileageArr,
	fuelTypeArr,
	allCarsData,
} from "../../data/carsData";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Input from "../Form/Input";
import { useGlobalContext } from "../../AppContext";
import InputNewOffer from "./InputForNewOffer/InputNewOffer";
function NewOffer() {
	const [selectedCarType, setSelectedCarType] = useState(carsBodyType[0]);
	const [openList, setOpenList] = useState(false);

	const { handleSelectListItemToNewOffer, selectedCarModelsToNewOffer } =
		useGlobalContext();

	function handleSelect(e) {
		console.log(e.target.textContent);
		setSelectedCarType(e.target.textContent);
		setOpenList(false);
	}

	return (
		<section className={styles.section}>
			<article>
				<h2>Stwórz ogłoszenie</h2>

				<button onClick={() => setOpenList(!openList)}>
					{selectedCarType}{" "}
					<IoIosArrowUp
						className={`${styles.arrow} ${openList ? styles.expand : ""}`}
					/>
				</button>
				{openList && (
					// <ul className={`${styles.ul} fadeIn ${openList ? "visible" : ""}`}>
					<div className={styles.carBodyNav}>
						<ul className={`${styles.ul}`}>
							{carsBodyType.map((carType) => (
								<li onClick={(e) => handleSelect(e)} key={carType}>
									{carType}
								</li>
							))}
						</ul>
					</div>
				)}

				<div className={styles.vehicleData}>
					<p>Dane Samochodu</p>

					<div className={styles.vehicleDataInputs}>
						<Input
							name="brand"
							text="Marka pojazdu"
							listData={brandsArr}
							handleSelectListItem={handleSelectListItemToNewOffer}
						/>
						<Input
							name="year"
							text="Rok produkcji"
							listData={yearArr}
							handleSelectListItem={handleSelectListItemToNewOffer}
						/>
						<Input
							name="model"
							text="Model pojazdu"
							listData={selectedCarModelsToNewOffer?.models.sort()}
							handleSelectListItem={handleSelectListItemToNewOffer}
							disableInput={!selectedCarModelsToNewOffer}
						/>
						<Input
							name="fuel"
							text="Rodzaj paliwa"
							listData={fuelTypeArr}
							handleSelectListItem={handleSelectListItemToNewOffer}
						/>

						<Input
							name="fuel"
							text="Rodzaj paliwa"
							listData={fuelTypeArr}
							handleSelectListItem={handleSelectListItemToNewOffer}
						/>

						<InputNewOffer name="mileage" text="Przebieg" inputType="number" />

						<InputNewOffer name="power" text="Moc" inputType="number" />
						<InputNewOffer
							name="capacity"
							text="Pojemność silnika"
							inputType="number"
						/>
						<InputNewOffer name="city" text="Miasto" inputType="text" />
					</div>

					<div className="price">
						<h4>Cena</h4>
						<InputNewOffer name="price" text="Cena" inputType="number" />
					</div>
				</div>
			</article>
		</section>
	);
}
export default NewOffer;
