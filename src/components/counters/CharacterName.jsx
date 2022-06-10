import styles from "./CharacterName.module.scss";
import Health from "./Health";
import usePlayerStats from "../hooks/usePlayerStats";

const CharacterName = (props) => {
	const [players] = usePlayerStats();

	const activePlayer = players.player1.active ? "player1" : "player2";

	return (
		<p className={`${styles["character-name"]}`}>
			{players[activePlayer].name}
		</p>
	);
};

export default CharacterName;
