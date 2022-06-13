import Value from "./incrimentors/Value";
import styles from "./Speed.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";
import useActivePlayers from "../hooks/useActivePlayers";

const Speed = () => {
	const [player, dispatchSpeed] = usePlayerStats();

	const { activePlayer } = useActivePlayers();

	const speedIncreaseHanlder = () => {
		dispatchSpeed(
			playerActions.increaseSpeedOrDamage({
				player: activePlayer,
				type: "speed",
			})
		);
	};

	const speedDecreaseHanlder = () => {
		dispatchSpeed(
			playerActions.decreaseSpeedOrDamage({
				player: activePlayer,
				type: "speed",
			})
		);
	};

	return (
		<div className={`${styles["speed"]}`}>
			<Value
				incriment={speedIncreaseHanlder}
				decriment={speedDecreaseHanlder}
				default={player[activePlayer].speed}
			/>
		</div>
	);
};

export default Speed;
