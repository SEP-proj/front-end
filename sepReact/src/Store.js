import {configureStore} from '@reduxjs/toolkit'
import submitWrite from './reducer/submitWrite'
import inputReducer from './reducer/inputReducer'
import writingsReducer from './reducer/writingsReducer'
import categoryReducer from './reducer/categoryReducer'
import headerReducer from './reducer/headerReducer'
import recommendList from './reducer/recommendList'
import nextReducer from './reducer/nextReducer'
export default configureStore({
    reducer:{
nextReducer,
        recommendList,submitWrite,inputReducer,writingsReducer,headerReducer,categoryReducer
    },
})
