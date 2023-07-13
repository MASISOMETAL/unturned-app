import { createStore, combineReducers } from "redux";
import { WeaponReducer } from "./reducers";

const rootReducers = combineReducers({
    weaponRoot: WeaponReducer,
})

export default createStore(rootReducers)