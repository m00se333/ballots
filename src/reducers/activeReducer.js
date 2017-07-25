export function active(state={}, action){

    switch(action.type){

      case "ACTIVATE":
        return action.payload;

      case "DEACTIVATE":
        return action.payload;

      default:
        return state;
    }
}