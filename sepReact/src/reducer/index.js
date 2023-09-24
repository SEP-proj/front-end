import { combineReducers } from "redux";
import submitWrite from "./submitWrite";
import inputReducer from "./inputReducer";
import writingsReducer from "./writingsReducer";
import headerReducer from "./headerReducer";
import categoryReducer from "./categoryReducer";
import recommendList from "./recommendList";
import nextReducer from "./nextReducer";
import userReducer from "./userReducer";
const rootReducer=combineReducers({nextReducer,
    submitWrite,
    userReducer,
    inputReducer,writingsReducer,headerReducer,categoryReducer,recommendList})
export default rootReducer;