const initalState = "";

export default function categoryReducer(state = initalState, action) {
  console.log("넘어오는action", action);
  switch (action.type) {
    case "CATEGORY":
      return action.payload;
    case "SEARCH_CATEHORY" :
        return action.payload;
    default:
      return state;
  }
}
