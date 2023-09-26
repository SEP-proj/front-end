import { combineReducers } from "redux";
import submitWrite from "./submitWrite";
import inputReducer from "./inputReducer";
import writingsReducer from "./writingsReducer";
import headerReducer from "./headerReducer";
import categoryReducer from "./categoryReducer";
import recommendList from "./recommendList";
import nextReducer from "./nextReducer";
import userReducer from "./postReducer";
import chatTextListReducer2 from "./chatTextListReducer2";
import userIdReducer from "./userIdReducer";
const rootReducer=combineReducers({nextReducer,
    submitWrite,
    userReducer,
    chatTextListReducer2,
    userIdReducer,
    inputReducer,writingsReducer,headerReducer,categoryReducer,recommendList})
export default rootReducer;