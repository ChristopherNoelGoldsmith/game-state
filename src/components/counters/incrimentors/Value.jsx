import styles from "./Value.module.scss";
import { useState } from "react";
import IncrimentButton from "../../UI/IncrimentButton";
import useIncriment from "../../hooks/useIncriment";

const Value = (props) => {
	const [valueState, incriment, decriment] = useIncriment(props.default || 0);

	return (
		<section className={`${styles["value"]}`}>
			<IncrimentButton
				className={`${styles[`left`]}`}
				onClick={decriment}
				type={decriment}
			/>
			<p>{valueState}</p>
			<IncrimentButton
				className={`${styles[`right`]}`}
				onClick={incriment}
				type={incriment}
			/>
		</section>
	);
};

export default Value;
