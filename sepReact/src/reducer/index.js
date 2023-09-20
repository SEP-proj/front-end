import { combineReducers } from "redux";
import submitWrite from "./submitWrite";
import inputReducer from "./inputReducer";
import writingsReducer from "./writingsReducer";
import headerReducer from "./headerReducer";
import categoryReducer from "./categoryReducer";
const rootReducer=combineReducers({submitWrite,inputReducer,writingsReducer,headerReducer,categoryReducer})
export default rootReducer;