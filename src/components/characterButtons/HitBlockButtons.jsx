import Button from "../UI/Button";
import styles from "./HitBlockButtons.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";

const HitBlockButtons = () => {
	const [player, dispatchPlayer] = usePlayerStats();

	const blockHandler = () => {
		return dispatchPlayer(
			playerActions.changePlayerHealth({ health: 4, player: "player1" })
		);
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
			<Button onClick={blockHandler}>
				<p>HALF-BLOCK</p>
			</Button>
			<Button onClick={blockHandler}>
				<p>HIT</p>
			</Button>
		</section>
	);
};

export default HitBlockButtons;
