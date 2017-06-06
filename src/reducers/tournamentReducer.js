export function tournament(state={}, action){
  

    switch(action.type){

        case "INCREMENT":

          let count = state.outRounds + action.payload
          
          return {...state, outRounds: count} 

        default:
          return state;
    }
};