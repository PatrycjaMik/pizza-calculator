import { createStore } from "redux";
import { pizzaReducer } from "./reducers/globalReducers";

const store = createStore(pizzaReducer);

export default store;
