import Button from "../UI/Button";
import styles from "./HitBlockButtons.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";

const HitBlockButtons = () => {
	const [player, dispatchPlayer] = usePlayerStats();
	console.log(player);
	const activePlayer = player.player1.active ? "player1" : "player2";

	const damage = player[activePlayer].damage;

	const blockHandler = () => {
		return dispatchPlayer(playerActions.setDefault({ type: "" }));
	};

	const halfBlockHandler = () => {
		dispatchPlayer(
			playerActions.changePlayerHealth({
				health: Math.ceil(damage / 2) * -1,
				player: "player1",
			})
		);
		return dispatchPlayer(playerActions.setDefault({ type: "" }));
	};

	const hitHandler = () => {
		dispatchPlayer(
			playerActions.changePlayerHealth({
				health: damage * -1,
				player: "player1",
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
				<p>BLOCK</p>
			</Button>
			<Button onClick={halfBlockHandler}>
				<p>HALF-BLOCK</p>
			</Button>
			<Button onClick={hitHandler}>
				<p>HIT</p>
			</Button>
		</section>
	);
};

export default HitBlockButtons;
