
import {createActions,handleActions} from 'redux-actions'

const initalState='false'
 

export const NEXT='next/NEXTSTEP'

export const actions=createActions({

    [NEXT]:()=>{}
})
 
const nextReducer=handleActions({
    
    [NEXT]:(state,{payload})=>{
        console.log("NEXT TYPE넘어온",payload)
        return payload;
    },
},initalState
)
export default nextReducer;