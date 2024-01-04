import { useState } from "react";
import { useGlobalContext } from "../../AppContext";
import "./SortResults.css";

function SortResults() {
	const { filteredCarsData, setSortBy, sortBy } = useGlobalContext();
	// const [sortBy, setSortBy] = useState("newest");

	function handleSort(e) {
		setSortBy(e.target.value);
	}

	return (
		<div className="results-sort-container">
			<div className="results-title">
				<h2>Wyniki Wyszukiwania</h2>
				<span>Liczba ogłoszeń: {filteredCarsData.length}</span>
			</div>
			<div className="sort-container">
				<label>Sortuj</label>
				<select id="sort" value={sortBy} onChange={(e) => handleSort(e)}>
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
