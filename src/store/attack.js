import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    damage: 4,
    speed: 4,
            }

const speedDamage = ({
    name: 'speedDamage',
    initialState: initialState,
    reducers:{
        incrimentAttackStats(state, action){

            const change = action.payload.change;
            const type = action.payload.type;

            if(type === 'damage' && change === 'dec') --state.damage;
            if(type === 'damage' && change === 'inc') ++state.damage;
            if(type === 'speed' && change === 'dec') --state.speed;
            if(type === 'speed' && change === 'inc') ++state.speed;
            return alert('error in speedDamage slice');
        }
    }
})