import styles from "./Damage.module.scss";
import Value from "./incrimentors/Value";
import usePlayerStats from "../hooks/usePlayerStats";
import { playerActions } from "../../store/players";
import useActivePlayers from "../hooks/useActivePlayers";

const Damage = () => {
	const [player, dispatchDamage] = usePlayerStats();

	const { activePlayer } = useActivePlayers();

	const damageIncreaseHanlder = () => {
		dispatchDamage(
			playerActions.increaseSpeedOrDamage({
				player: activePlayer,
				type: "damage",
			})
		);
	};

	const damageDecreaseHanlder = () => {
		dispatchDamage(
			playerActions.decreaseSpeedOrDamage({
				player: activePlayer,
				type: "damage",
			})
		);
	};

	return (
		<section id="damage" className={`${styles["damage"]}`}>
			<Value
				incriment={damageIncreaseHanlder}
				decriment={damageDecreaseHanlder}
				default={player[activePlayer].damage}
			/>
		</section>
	);
};

export default Damage;
