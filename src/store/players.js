import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    player1: {
        active: true,
        health: 20,
        maxHealth: 40

    },
    player2: {
        active: false,
        health: 20,
        maxHealth: 40
    }
};

const player = createSlice({
    name: 'players',
    initialState: initialState,
    reducers: {
        changeActivePlayer(state) {
            state.player1.active = !state.player1.active;
            state.player2.active = !state.player2.active;
            return;
        },
        setPlayersHealth(state, action){
            state.player1.health = action.payload.player1.health;
            state.player2.health = action.payload.player2.health;
            return;
        },
        changePlayerHealth(state, action){
            const incrimentBy = action.payload.healthChange;
            const player = action.payload.player;
            return state[player].health += incrimentBy;
        }
    }
})

const playerReducer = player.reducer;

export const playerActions = player.actions;

export default playerReducer;