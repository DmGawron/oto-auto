import styles from "./InputNewOffer.module.css";

function InputNewOffer({
	name,
	text,
	inputType,
	disabled,
	handleSelectListItem,
}) {
	function handleInput(e) {
		handleSelectListItem(name, e.target.value);
	}

	return (
		<div className={styles.input}>
			{!disabled && <label htmlFor={name}>{text}</label>}
			<input type={inputType} placeholder={text} onBlur={handleInput} />
		</div>
	);
}
export default InputNewOffer;
