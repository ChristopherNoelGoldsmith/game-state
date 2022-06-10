import styles from "./Value.module.scss";
import { useEffect } from "react";
import IncrimentButton from "../../UI/IncrimentButton";
import useIncriment from "../../hooks/useIncriment";

const Value = (props) => {
	return (
		<section className={`${styles["value"]}`}>
			<IncrimentButton
				className={`${styles[`left`]}`}
				onClick={props.decriment || null}
			/>
			<p>{props.default || 0}</p>
			<IncrimentButton
				className={`${styles[`right`]}`}
				onClick={props.incriment || null}
			/>
		</section>
	);
};

export default Value;
