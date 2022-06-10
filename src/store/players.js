import { createSlice, current } from "@reduxjs/toolkit";

const player1 = {
	name: null,
	active: true,
	health: 40,
	maxHealth: 40,
	damage: 4,
	speed: 4,
};
const player2 = {
	name: null,
	active: false,
	health: 40,
	maxHealth: 40,
	damage: 4,
	speed: 4,
};

const initialState = { player1, player2 };

let player = createSlice({
	name: "players",
	initialState: { player1, player2 },
	reducers: {
		changeActivePlayer(state) {
			state = current(state);
			const { player1, player2 } = state;
			state.player1.active = !state.player1.active;
			state.player2.active = !state.player2.active;
			return;
		},
		setPlayersHealth(state, action) {
			//takes the value of the selected pair and sets both players health to this amount;
			const { player1, player2 } = state;
			player1.health = action.payload.player1.health;
			player1.maxHealth = action.payload.player1.maxHealth;
			player2.health = action.payload.player2.health;
			player2.maxHealth = action.payload.player2.maxHealth;
			return;
		},
		changePlayerHealth(state, action) {
			//{player: 'player', health: Number }
			//alters health by the passed value of the action;

			console.log(action);
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
			if (action.payload.type === "ALL")
				state.player1.health = state.player1.maxHealth;
			state.player1.speed = 4;
			state.player1.damage = 4;
		},
	},
});

const playerReducer = player.reducer;

export const playerActions = player.actions;

export default playerReducer;
