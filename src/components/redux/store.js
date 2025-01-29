import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
import { createLogger } from "redux-logger";


const logger = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( logger),
    devTools: true,
})

export default store;
