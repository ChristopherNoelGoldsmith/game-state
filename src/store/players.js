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
			return {
				player1: {
					active: true,
					health: action.payload.player1.health,
					maxHealth: action.payload.player1.maxHealth,
				},
				player2,
			};
		},
		changePlayerHealth(state, action) {
			//{player: 'player', health: Number }
			console.log(action);
			//alters health by the passed value of the action;
			const incrimentBy = action.payload.health;
			const player = action.payload.player;
			const health = state[player].health + incrimentBy;
			if (health > state[player].maxHealth) {
				state[player].health = state[player].maxHealth;
				return;
			}
			state[player].health = health;
			console.log(state);
			return state;
		},
	},
});

const playerReducer = player.reducer;

export const playerActions = player.actions;

export default playerReducer;
