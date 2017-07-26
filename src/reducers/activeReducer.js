export function active(state={}, action){

    switch(action.type){

      case "ACTIVATE":
        if (state === action.payload){
          return null
        }
        return action.payload;

      case "DEACTIVATE":
        return action.payload;

      default:
        return state;
    }
}