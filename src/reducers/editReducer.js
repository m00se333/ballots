export function editTournament(state={}, action){

    switch(action.type){


      case "EDIT_MODE":
        
        if (state === action.payload){
          return null
        }

        return action.payload;  



      default: 
        return state;


    }
}