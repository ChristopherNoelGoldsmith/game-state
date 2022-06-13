import styles from "./HealthBar.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import useActivePlayers from "../hooks/useActivePlayers";

const healthBarStyles = (healthPercentage) => {
	if (healthPercentage === 100) {
		return {
			height: `${healthPercentage}%`,
			background: "blue",
			animation: "none",
		};
	}
	if (healthPercentage > 49) {
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

	const { activePlayer } = useActivePlayers();

	const health = (player) => {
		const maxHealthPercentage = Math.floor(
			(players[player].health / players[player].maxHealth) * 100
		);
		return healthBarStyles(maxHealthPercentage);
	};
	return (
		<div className={`${styles["health-bar"]}`}>
			<span className={`${styles["health"]}`} style={health(activePlayer)}>
				<span id="shine"></span>
			</span>
		</div>
	);
};

export default HealthBar;
