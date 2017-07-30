export function editTournament(state={}, action){

    switch(action.type){


      case "EDIT_MODE":
        
        if (state === action.payload){
          return null
        }

        return action.payload;  

      case "UPDATE_NAME": 


      
      case "UPDATE_PRELIMS": 


      
      case "UPDATE_OUTROUNDS": 


      
      case "UPDATE_NOTES": 


      

      default: 
        return state;


    }
}