export function editMode(state={}, action){


    switch(action.type){

      case "EDIT_MODE":

        return action.payload;

      default:

        return state;
    }

}