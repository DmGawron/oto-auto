import styles from "./Result.module.css";
import { FaRegHeart } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { PiRoadHorizonLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Result({ car }) {
	console.log(car.image);

	return (
		<li>
			<Link className={styles.listItem} to={`${car.id}`}>
				<img src={`http://localhost:3000/${car.image}`} alt={car.brand} />

				<div className={styles.carDetails}>
					<div className={styles.carEngineAndName}>
						<p>
							{car.brand} {car.model}
						</p>
						<div className={styles.engineInfo}>
							<span>{car.capacity} cm3</span>
							<span>{car.power} KM</span>
							<span>{car.carBody}</span>
						</div>
					</div>

					<div className={styles.carMoreInfo}>
						<span>
							<PiRoadHorizonLight className={styles.roadIcon} /> {car.mileage}{" "}
							km
						</span>
						<span>
							<BsFuelPump className={styles.fuelIcon} /> {car.fuel}
						</span>
						<span>
							<CiCalendarDate className={styles.calendarIcon} /> {car.year}
						</span>
					</div>

					<div className={styles.location}>
						<p>
							<FaMapLocationDot className={styles.locationIcon} /> {car.city}
						</p>
					</div>
					{/* </div> */}
				</div>
				<div className={styles.priceInfo}>
					<p>
						{car.price.toLocaleString()}
						<span className={styles.currency}>PLN</span>
					</p>
					<span className={styles.follow}>
						<FaRegHeart className={styles.heartIcon} />
					</span>
				</div>
			</Link>
		</li>
	);
}
export default Result;
