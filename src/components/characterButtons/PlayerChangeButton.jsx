import styles from "./PlayerChangeButton.module.scss";
import Button from "..//UI/Button";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";
import useActivePlayers from "../hooks/useActivePlayers";

const PlayerChangeButtons = (props) => {
	const [player, dispatchPlayer] = usePlayerStats();
	const { inactivePlayer } = useActivePlayers();

	const changePlayerHandler = () => {
		return dispatchPlayer(playerActions.changeActivePlayer());
	};

	return (
		<section
			id="player-change-button"
			className={`${styles["player-change-button"]}`}
		>
			<i
				onClick={props.selectScreenHandler}
				className="fa-solid fa-gear fa-2x"
			/>
			<Button onClick={changePlayerHandler}>
				<label>{player[inactivePlayer].name} </label>
				<span>{player[inactivePlayer].health}</span>
			</Button>
		</section>
	);
};

export default PlayerChangeButtons;
