import Button from "../UI/Button";
import styles from "./HitBlockButtons.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";
import useActivePlayers from "../hooks/useActivePlayers";

const HitBlockButtons = () => {
	const [player, dispatchPlayer] = usePlayerStats();
	const { activePlayer } = useActivePlayers();

	const damage = player[activePlayer].damage;

	const blockHandler = () => {
		return dispatchPlayer(playerActions.setDefault({ type: "" }));
	};

	const halfBlockHandler = () => {
		dispatchPlayer(
			playerActions.changePlayerHealth({
				health: Math.ceil(damage / 2) * -1,
				player: activePlayer,
			})
		);
		return dispatchPlayer(playerActions.setDefault({ type: "" }));
	};

	const hitHandler = () => {
		dispatchPlayer(
			playerActions.changePlayerHealth({
				health: damage * -1,
				player: activePlayer,
			})
		);
		return dispatchPlayer(playerActions.setDefault({ type: "" }));
	};

	//fix buttons
	return (
		<section
			id="hit-block-buttons"
			className={`${styles["hit-block-buttons"]}`}
		>
			<Button onClick={blockHandler}>
				<i class="fa-solid fa-shield fa-2x"></i>
			</Button>
			<Button onClick={halfBlockHandler}>
				<i class="fa-solid fa-shield-halved fa-2x"></i>{" "}
			</Button>
			<Button onClick={hitHandler}>
				<p>
					<i class="fa-solid fa-hand-fist fa-2x"></i>
				</p>
			</Button>
		</section>
	);
};

export default HitBlockButtons;
