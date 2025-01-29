import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";


const logger = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools:  composeWithDevTools(),
})

export default store;
