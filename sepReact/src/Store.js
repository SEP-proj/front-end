import {configureStore} from '@reduxjs/toolkit'
import submitWrite from './reducer/submitWrite'
import inputReducer from './reducer/inputReducer'
import writingsReducer from './reducer/writingsReducer'
import categoryReducer from './reducer/categoryReducer'
import headerReducer from './reducer/headerReducer'
import recommendList from './reducer/recommendList'
import nextReducer from './reducer/nextReducer'
import userReducer from './reducer/postReducer'
import chatTextListReducer2 from './reducer/chatTextListReducer2'
import userIdReducer from './reducer/userIdReducer'
export default configureStore({
    reducer:{
nextReducer,userReducer,
chatTextListReducer2,
userIdReducer,
        recommendList,submitWrite,inputReducer,writingsReducer,headerReducer,categoryReducer
    },
})
