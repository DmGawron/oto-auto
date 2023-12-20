import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../AppContext";
import styles from "./OfferContent.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function OfferContent() {
	const { carsData } = useGlobalContext();

	const { id } = useParams();
	const foundCarById = carsData.find((car) => car.id === id);

	return (
		<article className={styles.offer}>
			<div className={styles.follow}>
				<div className={styles.line}>
					<FaRegHeart /> <p>Obserwuj</p>
				</div>
			</div>

			<div className={styles.offerDetails}>
				<img
					src={`http://localhost:3000/${foundCarById.image}`}
					alt={foundCarById.brand}
				/>

				<div className={styles.offerCarStats}>
					<div className={styles.offerInfo}>
						<p>
							{foundCarById.brand} {foundCarById.model}
						</p>
						<p className={styles.price}>
							{foundCarById.price.toLocaleString()} <span>PLN</span>{" "}
						</p>
					</div>
					<div className={styles.offerMoreInfo}>
						<div>
							<p>Rocznik</p>
							<p>{foundCarById.year}</p>
						</div>
						<div>
							<p>Przebieg</p>
							<p>{foundCarById.mileage} km</p>
						</div>
						<div>
							<p>Pojemność</p>
							<p>{foundCarById.capacity} cm3</p>
						</div>
						<div>
							<p>Rodzaj paliwa</p>
							<p>{foundCarById.fuel}</p>
						</div>
						<div>
							<p>Moc silnika</p>
							<p>{foundCarById.power} km</p>
						</div>
						<div>
							<p>Typ nadwozia</p>
							<p>{foundCarById.carBody}</p>
						</div>
					</div>

					<div className={styles.location}>
						<FaMapLocationDot className={styles.locationIcon} />
						<p>{foundCarById.city}</p>
					</div>
				</div>
			</div>
		</article>
	);
}
export default OfferContent;
