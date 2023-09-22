
import {createActions,handleActions} from 'redux-actions'

const initalState=''
 

export const INPUTTEXT='input/INPUTTEXT'

export const actions=createActions({

    [INPUTTEXT]:()=>{}
})
 
const inputReducer=handleActions({
    
    [INPUTTEXT]:(state,{payload})=>{
        console.log("INPUTTEXT TYPE넘어온",payload)
        return payload;
    },
},initalState
)
export default inputReducer;