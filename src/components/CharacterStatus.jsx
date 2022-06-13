import Health from "./counters/Health";
import HealthBar from "./counters/HealthBar";
import CharacterName from "./counters/CharacterName";
import { Fragment } from "react";
import usePlayerStats from "./hooks/usePlayerStats";
import useActivePlayers from "./hooks/useActivePlayers";

const CharacterStatus = (props) => {
	//props.player1.character / player2
	const [players] = usePlayerStats();
	const { activePlayer } = useActivePlayers();

	return (
		<Fragment>
			<CharacterName />
			<section id="health-bar">
				<HealthBar player={activePlayer} />
				<Health player={activePlayer} />
			</section>
		</Fragment>
	);
};

export default CharacterStatus;
