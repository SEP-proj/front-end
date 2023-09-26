
import {createActions,handleActions} from 'redux-actions'

const initalState=''
 

export const TOKENUSERID='user/TOKENUSERID'

export const actions=createActions({

    [TOKENUSERID]:()=>{}
})
 
const userIdReducer=handleActions({
    
    [TOKENUSERID]:(state,{payload})=>{
        console.log("TOKENUSERID TYPE넘어온",payload)
        return payload;
    },
},initalState
)
export default userIdReducer;