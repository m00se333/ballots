export function tournament(state={}, action){
  

    switch(action.type){

        case "INCREMENT":

          let count = state.outRounds + action.payload
          
          return {...state, outRounds: count};

        case "RECORD_NAME":

          console.log(action.payload);
          return {...state, name: action.payload}; 

        case "ADD_PRELIM":

        case "SUBTRACT_PRELIM":

        case "UPDATE_PRELIM":

          return {...state, prelims: action.payload}

        default:
          return state;
    }
};