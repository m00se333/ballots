export function tournament(state={}, action){
  

    switch(action.type){

        case "UPDATE_OUTROUND":

          return {...state, outRounds: parseInt(action.payload)};

        case "UPDATE_NAME":

          return {...state, name: action.payload}; 

        case "UPDATE_PRELIM":

          return {...state, prelims: parseInt(action.payload)};

        default:
          return state;
    }
};