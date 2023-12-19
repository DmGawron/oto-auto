import { useState } from "react";
import styles from "./Pagination.module.css";

function Pagination({ onPaginate, dataLength, itemsPerPage, currentPage }) {
	const pageNumbers = [];
	// const [isActive, setIsActive] = useState(false);

	for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className={styles.pagination}>
			{pageNumbers.map((number) => {
				const cssStyle =
					currentPage === number
						? `${styles.pageNum} ${styles.active}`
						: `${styles.pageNum}`;

				return (
					<li key={number} className={cssStyle}>
						<span
							onClick={() => {
								onPaginate(number);
							}}
							href="#"
							className={styles.btn}
						>
							{number}
						</span>
					</li>
				);
			})}
		</ul>
	);
}
export default Pagination;
