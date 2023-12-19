import { useEffect, useState } from "react";

import "./InputList.css";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../../AppContext";
function InputList({ listData, onSelectListValue, onCloseList }) {
	const { filterCars } = useGlobalContext();

	function handleSelectListValue(item) {
		onSelectListValue(item);
		filterCars();
		// setSelectedValue(item);
		if (!item) onCloseList();
	}

	function handleClickOutside(e) {
		if (!e.target.closest(".list")) onCloseList();
	}

	//nasłuchiwanie na kliknięcie nie w ten element co trzeba czyli poza wybraną listą
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<ul className="list">
			{listData.map((dataItem) => (
				<li
					key={dataItem}
					onClick={() => {
						handleSelectListValue(dataItem);
					}}
				>
					{dataItem}
				</li>
			))}
		</ul>
	);
}
export default InputList;
