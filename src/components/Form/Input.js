import { useEffect, useRef, useState } from "react";
import "./Input.css";
import { IoIosArrowUp } from "react-icons/io";
import InputList from "./InputList";
import { useGlobalContext } from "../../AppContext";

function Input({
	name,
	text,
	short,
	id,
	listData,
	handleSelectListItem,
	disableInput,
}) {
	const [openList, setOpenList] = useState(false);
	const [searchTerms, setSearchTerms] = useState("");
	const [results, setResults] = useState(listData);

	//filtrowanie elementów z tablic w których są stringi i numbery
	useEffect(() => {
		if (listData) {
			const searchResults = listData.filter((item) => {
				if (typeof item === "string") {
					return item.toLowerCase().includes(searchTerms.toLowerCase());
				} else if (typeof item === "number") {
					return item
						.toString()
						.toLowerCase()
						.includes(searchTerms.toString().toLowerCase());
				}
				return false;
			});

			setResults(searchResults);
		}
	}, [listData, searchTerms]);

	function handleSearch(event) {
		const term = event.target.value;
		setSearchTerms(term);
	}

	//update kryteriów szukanego obiektu
	function handleSelectListValue(value) {
		setSearchTerms(value);
		setOpenList(false);
		handleSelectListItem(name, value);
	}

	function handleOpenList() {
		setOpenList(!openList);
	}

	function handleCloseList() {
		setSearchTerms("");
		setOpenList(false);
	}

	return (
		<div className={short ? "short" : "single-input"}>
			<label htmlFor={name}>{text}</label>
			<input
				type="text"
				id={name}
				placeholder={text}
				onClick={() => handleOpenList()}
				value={searchTerms}
				onChange={(event) => {
					handleSearch(event);
				}}
				disabled={disableInput}
			/>
			<span className="arrow-btn">
				<IoIosArrowUp className={`arrow-icon ${openList ? "expand" : ""}`} />
			</span>

			{openList && (
				<InputList
					listData={results}
					onSelectListValue={handleSelectListValue}
					onCloseList={handleCloseList}
				/>
			)}
		</div>
	);
}
export default Input;
