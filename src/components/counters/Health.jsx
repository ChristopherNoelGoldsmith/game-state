import Value from "./incrimentors/Value";
import styles from "./Health.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";

const Health = (props) => {
	//props will pass the player to the values below
	const [players, dispatchPlayer] = usePlayerStats();

	const incrimentHealthHandler = (type) => {
		if (type === "inc")
			return dispatchPlayer(
				playerActions.changePlayerHealth({ player: props.player, health: 1 })
			);
		if (type === "dec")
			return dispatchPlayer(
				playerActions.changePlayerHealth({ player: props.player, health: -1 })
			);
	};

	return (
		<div className={`${styles["health"]} ${styles[props.className]}`}>
			<Value
				incriment={() => incrimentHealthHandler("inc")}
				decriment={() => incrimentHealthHandler("dec")}
				default={players[props.player].health}
			/>
		</div>
	);
};

export default Health;
