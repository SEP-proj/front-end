const initalState = {
  intro:'',
  body:'',
  conclu:''
}

export default function writingsReducer(state = initalState, action) {
  console.log("넘어오는action", action);
  switch (action.type) {
case 'WRITING':
      return {
        intro:action.payload.intro,
        body:action.payload.body,
        conclu:action.payload.conclu
      }
    default:
      return state;
  }
}
