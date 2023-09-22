
import {createActions,handleActions} from 'redux-actions'

const initalState=''
 

export const CATEGORY='category/CATEGORY'

export const actions=createActions({

    [CATEGORY]:()=>{}
})
 
const categoryReducer=handleActions({
    
    [CATEGORY]:(state,{payload})=>{
        console.log("CATEGORY TYPE넘어온",payload)
        return payload;
    },
},initalState
)
export default categoryReducer;