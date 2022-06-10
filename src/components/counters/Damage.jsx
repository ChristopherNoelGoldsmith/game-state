import styles from "./Damage.module.scss";
import Value from "./incrimentors/Value";

const Damage = () => {
	return (
		<section id="damage" className={`${styles["damage"]}`}>
			<Value default={4} />
		</section>
	);
};

export default Damage;
