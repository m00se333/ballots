export function editTournament(state={}, action){

    switch(action.type){


      case "EDIT_MODE":
        console.log("got it " + action.payload); 
        return action.payload;  



      default: 
        return state;


    }
}