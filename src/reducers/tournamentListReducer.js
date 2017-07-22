export function tournamentList(state={}, action){

    switch(action.type){


      case "LOAD":

         return action.payload;
        // return action.payload;


      default: 
        return state;
    };
};