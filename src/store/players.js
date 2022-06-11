import { createSlice } from "@reduxjs/toolkit";

const player1 = {
	name: "Player1",
	active: true,
	health: 28,
	maxHealth: 35,
	damage: 4,
	speed: 4,
};
const player2 = {
	name: "Player2",
	active: false,
	health: 28,
	maxHealth: 35,
	damage: 4,
	speed: 4,
};

let player = createSlice({
	name: "players",
	initialState: { player1, player2 },
	reducers: {
		changeActivePlayer(state) {
			const { player1, player2 } = state;
			player1.active = !player1.active;
			player2.active = !player2.active;
			return;
		},
		setPlayersStats(state, action) {
			//takes the value of the selected pair and sets both players health to this amount;
			const { player1, player2 } = state;
			player1.health = action.payload.player1.health;
			player1.maxHealth = action.payload.player1.maxHealth;
			player1.name = action.payload.player1.name;
			player2.health = action.payload.player2.health;
			player2.maxHealth = action.payload.player2.maxHealth;
			player2.name = action.payload.player2.name;
			return;
		},
		changePlayerHealth(state, action) {
			//{player: 'player', health: Number }
			//alters health by the passed value of the action;

			const incrimentBy = action.payload.health;
			const player = action.payload.player;
			const health = state[player].health + incrimentBy;
			if (health > state[player].maxHealth) {
				state[player].health = state[player].maxHealth;
				return;
			}
			if (health < 0) {
				state[player].health = 0;
				return;
			}
			state[player].health = health;
			return state;
		},
		increaseSpeedOrDamage(state, action) {
			if (action.payload.type === "speed") {
				state[action.payload.player].speed++;
				return;
			}
			if (action.payload.type === "damage") {
				state[action.payload.player].damage++;
				return;
			}
		},
		decreaseSpeedOrDamage(state, action) {
			if (action.payload.type === "speed") {
				state[action.payload.player].speed--;
				return;
			}
			if (action.payload.type === "damage") {
				state[action.payload.player].damage--;
				return;
			}
		},
		setDefault(state, action) {
			if (action.payload.type === "ALL") {
				state.player1.health = state.player1.maxHealth;
				state.player2.health = state.player2.maxHealth;
			}
			state.player1.speed = 4;
			state.player1.damage = 4;
			state.player2.speed = 4;
			state.player2.damage = 4;
		},
	},
});

const playerReducer = player.reducer;

export const playerActions = player.actions;

export default playerReducer;
