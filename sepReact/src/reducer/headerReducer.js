

const initalState=false
 

 
 export default function headerReducer(state=initalState,action){
     console.log('넘어오는action',action)
 switch(action.type){
     case 'FLAG':
         
         return action.payload
         
         
 
     default : return state;
 }
 
 }