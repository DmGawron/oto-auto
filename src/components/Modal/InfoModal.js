import { createPortal } from "react-dom";
import styles from "./InfoModal.module.css";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function InfoModal({ text }) {
	const [close, setClose] = useState(false);

	return (
		<div className={`${close ? styles.close : ""}`}>
			<div className={styles.backdrop}></div>
			<section className={styles.modal}>
				<p>{text}</p>
				<IoMdClose
					className={styles.closeIcon}
					onClick={() => setClose(true)}
				/>
			</section>
		</div>
	);
}
export default InfoModal;
