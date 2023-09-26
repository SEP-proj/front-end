
import {createActions,handleActions} from 'redux-actions'

const initalState=''
 

export const CHATTEXTLIST2='chatList/CHATTEXTLIST2'

export const actions=createActions({

    [CHATTEXTLIST2]:()=>{}
})
 
const chatTextListReducer2=handleActions({
    
    [CHATTEXTLIST2]:(state,{payload})=>{
        console.log("CHATTEXTLIST2 TYPE넘어온",payload)
        return payload;
    },
},initalState
)
export default chatTextListReducer2;