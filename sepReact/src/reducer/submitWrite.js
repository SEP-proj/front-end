

const initalState={ 
     content:'',
   title:''
};

export default function submitWrite(state=initalState,action){
    console.log('넘어오는submitaction',action)
switch(action.type){
    case 'SUBMITTEXT':
        console.log('action.type:submitText 들어옴')
        return {
            content: action.payload.content,
            title:action.payload.title
        }
        

    default : return state;
}

}