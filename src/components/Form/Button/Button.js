import { useEffect } from "react";
import { useGlobalContext } from "../../../AppContext";
import "./Button.css";

function Button({ ...props }) {
	const { filteredCarsData, carsData } = useGlobalContext();

	// useEffect(() => {
	// 	onClick();
	// }, [onClick]);

	return (
		<button type="button" className="search-btn" {...props}>
			Pokaż {filteredCarsData.length} Ogłoszeń
			{/* {carsData.length === 0 ? 0 : carsData.length} */}
		</button>
	);
}
export default Button;
