import styles from "./CharacterName.module.scss";
import Health from "./Health";
import usePlayerStats from "../hooks/usePlayerStats";
import useActivePlayers from "../hooks/useActivePlayers";

const CharacterName = (props) => {
	const [players] = usePlayerStats();

	const { activePlayer } = useActivePlayers();

	const playerName = players[activePlayer].name;
	//Needs fix
	const name = () => {
		if (playerName.length > 14) {
			return {
				"font-size": "1.5rem",
			};
		}
		if (playerName.length > 7) {
			return {
				"font-size": "2rem",
			};
		}
		return;
	};

	return (
		<p className={`${styles["character-name"]}`} style={name()}>
			{playerName}
		</p>
	);
};

export default CharacterName;
