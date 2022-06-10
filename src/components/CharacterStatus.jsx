import Health from "./counters/Health";
import HealthBar from "./counters/HealthBar";
import CharacterName from "./counters/CharacterName";
import { Fragment } from "react";
import usePlayerStats from "./hooks/usePlayerStats";
import { useEffect } from "react";
import { playerActions } from "../store/players";

const CharacterStatus = (props) => {
	//props.player1.character / player2
	const [players, dispatchPlayers] = usePlayerStats();

	const setStats = () => {
		dispatchPlayers(
			playerActions.setPlayersHealth({
				player1: { name: "CHUNGUS", health: 50, maxHealth: 50 },
				player2: { health: 19, maxHealth: 19 },
			})
		);
	};

	useEffect(() => {
		setStats();
	}, []);

	const activePlayer = players.player1.active ? "player1" : "player2";

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
