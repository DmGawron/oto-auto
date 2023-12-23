import styles from "./InputNewOffer.module.css";

function InputNewOffer({ name, text, inputType }) {
	return (
		<div className={styles.input}>
			<label htmlFor={name}>{text}</label>
			<input type={inputType} placeholder={text} />
		</div>
	);
}
export default InputNewOffer;
