import styles from "./AttackZone.module.scss";
import { useState } from "react";
import Speed from "./Speed";

const AttackZone = () => {
	const [zoneState, setZone] = useState("mid");

	const zoneHandler = (event) => {
		return setZone(event.target.id);
	};

	//hav e buttons have no display by default
	return (
		<section id="speed-zones" className={`${styles[`speed-zones`]}`}>
			<section>
				<div className={`${styles[`zone-arrow`]} ${styles[`${zoneState}`]}`}>
					<figure className={`${styles["speed"]}`}>
						<Speed />
					</figure>
					<div className={`${styles[`zone-btns`]}`}>
						<button
							className={`${styles[`high`]}`}
							onClick={zoneHandler}
							id="high"
						>
							High
						</button>
						<button
							className={`${styles[`mid`]}`}
							onClick={zoneHandler}
							id="mid"
						>
							Mid
						</button>
						<button
							className={`${styles[`low`]}`}
							onClick={zoneHandler}
							id="low"
						>
							Low
						</button>
					</div>
				</div>
			</section>
		</section>
	);
};

export default AttackZone;
