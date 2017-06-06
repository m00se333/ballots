export function tournament(state={}, action){
  

    switch(action.type){

        case "INCREMENT":

          let count = action.payload
          
          return {...state, outRounds: count++} 

        default:
          return state;
    }
};