export const SubmitReducer = (state,action)=>{
    console.log('submit액션값: ', action)
    return{
    'value' : action
    }
};