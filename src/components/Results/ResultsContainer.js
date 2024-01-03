import { useState } from "react";
import { useGlobalContext } from "../../AppContext";
import Result from "./Result";
import "./ResultsContainer.css";
import SortResults from "./SortResults";
import { v4 as uuidv4 } from "uuid";
import Pagination from "../Pagination";
import Spinner from "../Loading/Spinner";

function ResultsContainer() {
	const { filteredCarsData, isLoading } = useGlobalContext();

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentPaginateItemsData = filteredCarsData.slice(
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
