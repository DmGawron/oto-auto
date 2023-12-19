import { useGlobalContext } from "../../AppContext";
import "./SortResults.css";

function SortResults() {
	const { filteredCarsData } = useGlobalContext();

	return (
		<div className="results-sort-container">
			<div className="results-title">
				<h2>Wyniki Wyszukiwania</h2>
				<span>Liczba ogłoszeń: X</span>
			</div>
			<div className="sort-container">
				<label>Sortuj</label>
				<select id="sort">
					<option value="newest">Najnowsze</option>
					<option value="lowestPrice">Cena: od najniższej</option>
					<option value="highestPrice">Cena: od najwyższej</option>
					<option value="lowestPower">Najniższa moc</option>
					<option value="highestPower">Najwyższa moc</option>
				</select>
			</div>
		</div>
	);
}
export default SortResults;
