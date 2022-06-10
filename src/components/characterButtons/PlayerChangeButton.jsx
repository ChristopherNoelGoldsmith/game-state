import styles from "./PlayerChangeButton.module.scss";
import Button from "..//UI/Button";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";
import { globals } from "../standardVariables";

const PlayerChangeButtons = (props) => {
	const [player, dispatchPlayer] = usePlayerStats();

	const activePlayer = player.player1.active ? "player1" : "player2";
	const inactivePlayer = player.player2.active ? "player1" : "player2";

	const changePlayerHandler = () => {
		return dispatchPlayer(playerActions.changeActivePlayer());
	};

	return (
		<section
			id="player-change-button"
			className={`${styles["player-change-button"]}`}
		>
			<Button onClick={changePlayerHandler}>
				{player[inactivePlayer].name}
			</Button>
		</section>
	);
};

export default PlayerChangeButtons;
