import {createActions,handleActions} from 'redux-actions'

const initalState=["1.ssss","2.sdfs"]
 
export const RECOMMENDLIST='recommend/RECOMMNEDLIST'


export const actions=createActions({
    [RECOMMENDLIST]:()=>{},

})
 
const recommendList=handleActions({
    [RECOMMENDLIST]:(state,{payload})=>{
        console.log('recommendList',payload)
        return payload;
    },
    
    
},initalState
)
export default recommendList