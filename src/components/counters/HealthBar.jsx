import styles from "./HealthBar.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";

const healthBarStyles = (healthPercentage) => {
	if (healthPercentage === 100) {
		return {
			height: `${healthPercentage}%`,
			background: "blue",
			animation: "none",
		};
	}
	if (healthPercentage > 50) {
		return {
			height: `${healthPercentage}%`,
			background: "green",
			animation: "none",
		};
	}
	if (healthPercentage > 25) {
		return {
			height: `${healthPercentage}%`,
			background: "orange",
			animation: "none",
		};
	}
	if (healthPercentage > 0) {
		return {
			height: `${healthPercentage}%`,
		};
	}
};
const HealthBar = (props) => {
	const [players] = usePlayerStats();

	const activePlayer = players.player1.active ? "player1" : "player2";

	const health = (player) => {
		const maxHealthPercentage = Math.floor(
			(players[player].health / players[player].maxHealth) * 100
		);
		return healthBarStyles(maxHealthPercentage);
	};
	return (
		<div className={`${styles["health-bar"]}`}>
			<span style={health(activePlayer)}></span>
		</div>
	);
};

export default HealthBar;
