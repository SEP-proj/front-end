
import {createActions,handleActions} from 'redux-actions'

const initalState=0;
 

export const USERID='user/USERID'

export const actions=createActions({

    [USERID]:()=>{}
})
 
const userReducer=handleActions({
    
    [USERID]:(state,{payload})=>{
        console.log("USERID TYPE넘어온",payload)
        return payload;
    },
},initalState
)
export default userReducer;