

const initalState=''
 

 
 export default function inputReducer(state=initalState,action){
     console.log('넘어오는action',action)
 switch(action.type){
     case 'INPUTTEXT':
         
         return action.payload
         
         
 
     default : return state;
 }
 
 }