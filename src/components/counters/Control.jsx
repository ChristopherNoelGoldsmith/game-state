import Value from "./incrimentors/Value";
import styles from "./Control.module.scss";

const Control = () => {
	return (
		<section className={`${styles[`control`]}`} id="control">
			<Value />
		</section>
	);
};

export default Control;
