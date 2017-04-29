export function data(state={}, action){

    switch(action.type){

      case "TEST":
        return {data: true}

      default: 
        return state;
    }

};