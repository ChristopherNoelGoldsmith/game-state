import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./players";

const store = configureStore({
    reducer:{
      player: playerReducer  
    }
});

export default store;