import styles from "./SelectScreen.module.scss";
import usePlayerStats from "../hooks/usePlayerStats";
import { useRef, useReducer, useState } from "react";
import { playerActions } from "../../store/players";
import { globals } from "../standardVariables";

const { player1, player2 } = globals;

const formReducer = (state, action) => {
	if (action.type === "name" && action.player === player1) {
		state.player1.name = action.value;
	}
	if (action.type === "name" && action.player === player2) {
		state.player2.name = action.value;
	}
	if (action.type === "health" && action.player === player1) {
		state.player1.health = action.value;
		state.player1.maxHealth = action.value;
	}
	if (action.type === "health" && action.player === player2) {
		state.player2.health = action.value;
		state.player2.maxHealth = action.value;
	}
	return {
		player1: {
			health: state.player1.health,
			maxHealth: state.player1.maxHealth,
			name: state.player1.name,
		},
		player2: {
			health: state.player2.health,
			maxHealth: state.player2.maxHealth,
			name: state.player2.name,
		},
	};
};

const SelectScreen = (props) => {
	const [players, dispatchPlayers] = usePlayerStats();
	const [playerStarts, dispatchStart] = useReducer(formReducer, {
		player1: {},
		player2: {},
	});
	const [isValid, setValid] = useState(false);

	const player1Name = useRef();
	const player2Name = useRef();
	const player1Health = useRef();
	const player2Health = useRef();

	const player1NameHandler = (event) => {
		dispatchStart({ type: "name", player: player1, value: event.target.value });
		checkIfValid();
	};

	const player2NameHandler = (event) => {
		const name = event.target.value;
		dispatchStart({ type: "name", player: player2, value: name });
		checkIfValid();
	};

	const player1HealthHandler = (event) => {
		const health = event.target.value * 1;
		if (health > 99) return;
		dispatchStart({
			type: "health",
			player: player1,
			value: health,
		});
		checkIfValid();
	};

	const player2HealthHandler = (event) => {
		const health = event.target.value * 1;
		if (health > 99) return;
		dispatchStart({
			type: "health",
			player: player2,
			value: health,
		});
		checkIfValid();
	};

	const checkIfValid = () => {
		console.log(playerStarts);
		if (playerStarts.player1.name.length < 1) return setValid(false);
		if (playerStarts.player1.name.length < 1) return setValid(false);
		if (playerStarts.player2.health < 1) return setValid(false);
		if (playerStarts.player2.health < 1) return setValid(false);
		return setValid(true);
	};

	const resetHandler = () => {
		props.selectScreenHandler();
		return dispatchPlayers(playerActions.setDefault({ type: "ALL" }));
	};

	const statsSubmitHandler = (event) => {
		event.preventDefault();
		if (isValid === false) return alert("All Fields Need A Value...");
		dispatchPlayers(
			playerActions.setPlayersStats({
				player1: {
					health: playerStarts.player1.health,
					maxHealth: playerStarts.player1.maxHealth,
					name: playerStarts.player1.name,
				},
				player2: {
					health: playerStarts.player2.health,
					maxHealth: playerStarts.player2.maxHealth,
					name: playerStarts.player2.name,
				},
			})
		);
		return props.selectScreenHandler();
	};

	return (
		<section className={`${styles["select-screen"]}`}>
			<form onSubmit={statsSubmitHandler}>
				<figure>
					<label htmlFor="player1">Player 1</label>
					<div className={styles["name"]}>
						<input
							ref={player1Name}
							onChange={player1NameHandler}
							type="text"
							id="player1-name"
							placeholder="NAME"
						/>
					</div>
					<div className={styles["health"]}>
						<input
							onChange={player1HealthHandler}
							ref={player1Health}
							id="player1-health"
							type="number"
							value={playerStarts.player1.health}
							placeholder="HEALTH"
						/>
					</div>
				</figure>
				<figure>
					<label htmlFor="player2">Player 2</label>
					<div className={styles["name"]}>
						<input
							onChange={player2NameHandler}
							ref={player2Name}
							type="text"
							id="player2-name"
							placeholder="NAME"
						/>
					</div>
					<div className={styles["health"]}>
						<input
							onChange={player2HealthHandler}
							ref={player2Health}
							id="player2-health"
							type="number"
							value={playerStarts.player2.health}
							placeholder="HEALTH"
						/>
					</div>
				</figure>
				<figure className={styles["buttons"]}>
					<button className={styles["start-btn"]} type="submit">
						SET
					</button>
					<button onClick={props.selectScreenHandler}>CLOSE</button>
					<button onClick={resetHandler}>RESET</button>
				</figure>
			</form>
		</section>
	);
};

export default SelectScreen;
