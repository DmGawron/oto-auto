import { useEffect, useRef, useState } from "react";
import styles from "./Input.module.css";
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
	

	function handleOpenList(e) {
		// setOpenList(true);
		setOpenList(!openList);
	}

	console.log(openList);

	function handleCloseList() {
		setSearchTerms("");
		setOpenList(!openList);
	}

	return (
		// <div className={short ? "short" : "single-input"}>
		<div className={`${short ? styles.short : styles.singleInput}`}>
			<label htmlFor={name}>{text}</label>
			<input
				type="text"
				id={name}
				placeholder={text}
				onClick={(e) => handleOpenList(e)}
				value={searchTerms}
				onChange={(event) => {
					handleSearch(event);
				}}
				disabled={disableInput}
			/>
			<span className={styles.arrowBtn}>
				{/* <IoIosArrowUp className={`arrow-icon ${openList ? "expand" : ""}`} /> */}
				<IoIosArrowUp
					className={`${styles.arrowIcon} ${openList ? styles.expand : ""}`}
				/>
			</span>

			{openList && (
				<InputList
					listData={results}
					onSelectListValue={handleSelectListValue}
					onCloseList={handleCloseList}
					handleOpenList={handleOpenList}
				/>
			)}
		</div>
	);
}
export default Input;
