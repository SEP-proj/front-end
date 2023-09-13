export const InputReducer = (state,action)=>{
    console.log('액션값: ', action)
    return{
    'value' : action
    }
};