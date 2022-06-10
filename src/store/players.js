import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	player1: {
		active: true,
		health: 40,
		maxHealth: 40,
	},
	player2: {
		active: false,
		health: 40,
		maxHealth: 40,
	},
};

const player = createSlice({
	name: "players",
	initialState: initialState,
	reducers: {
		changeActivePlayer(state) {
			state = current(state);
			state.player1.active = !state.player1.active;
			state.player2.active = !state.player2.active;
			return;
		},
		setPlayersHealth(state, action) {
			//takes the value of the selected pair and sets both players health to this amount;
			state = current(state);
			return {
				player1: {
					active: true,
					health: action.payload.player1.health,
					maxHealth: action.payload.player1.maxHealth,
				},
				player2: {
					active: false,
					health: action.payload.player2.health,
					maxHealth: action.payload.player2.maxHealth,
				},
			};
		},
		changePlayerHealth(state, action) {
			//{player: 'player', health: Number }
			state = current(state);
			//alters health by the passed value of the action;
			const incrimentBy = action.payload.health;
			const player = action.payload.player;
			const health = state[player].health + incrimentBy;
			if (action.payload.player === "player1") {
				return {
					player1: {
						health: health,
						maxHealth: state.player1.maxHealth,
						active: state.player1.active,
					},
					player2: {
						health: state.player2.health,
						maxHealth: state.player2.maxHealth,
						active: state.player2.active,
					},
				};
			}
			if (action.payload.player === "player2") {
				return {
					player1: {
						health: state.player1.health,
						maxHealth: state.player1.maxHealth,
						active: state.player1.active,
					},
					player2: {
						health: health,
						maxHealth: state.player2.maxHealth,
						active: state.player2.active,
					},
				};
			}
		},
	},
});

const playerReducer = player.reducer;

export const playerActions = player.actions;

export default playerReducer;
