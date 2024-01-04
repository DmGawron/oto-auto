import { useState } from "react";
import { useGlobalContext } from "../../AppContext";
import Result from "./Result";
import "./ResultsContainer.css";
import SortResults from "./SortResults";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../Pagination";
import Spinner from "../Loading/Spinner";

function ResultsContainer() {
	const { filteredCarsData, isLoading, sortBy } = useGlobalContext();

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	let sorted;
	if (sortBy === "lowestPrice")
		sorted = [...filteredCarsData].sort((a, b) => a.price - b.price);

	if (sortBy === "highestPrice")
		sorted = [...filteredCarsData].sort((a, b) => b.price - a.price);

	if (sortBy === "lowestPower")
		sorted = [...filteredCarsData].sort((a, b) => a.power - b.power);
	if (sortBy === "highestPower")
		sorted = [...filteredCarsData].sort((a, b) => b.power - a.power);

	if (sortBy === "newest") sorted = filteredCarsData;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentPaginateItemsData = sorted.slice(
		indexOfFirstItem,
		indexOfLastItem
	);

	function handlePaginate(number) {
		setCurrentPage(number);
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<section className="results-section">
			<SortResults />
			<ul>
				{currentPaginateItemsData.map((car) => (
					<Result key={uuidv4()} car={car} />
				))}
			</ul>

			<Pagination
				onPaginate={handlePaginate}
				itemsPerPage={itemsPerPage}
				dataLength={filteredCarsData.length}
				currentPage={currentPage}
			/>
		</section>
	);
}
export default ResultsContainer;
