import axios from "axios";

export function activate(tournament){
  return{
    type: "ACTIVATE",
    payload: tournament
  }
}

export function deactivate(){
  return{
    type: "DEACTIVATE",
    payload: null
  }
}

export function deleteTournament(tournament){
  const route = axios.post("/deleteTournament", {tournament})

  return(dispatch) => {

      route.then(({data}) => {
        console.log(data)
        console.log("deleting...")
        
      })
  }
}

// Related to editReducer
// export function editMode(tournament){
//   const route = axios.post("/retrieveTournament", {tournament})

//   return(dispatch) => {

//     route.then(({data}) => {
//       console.log(data);
//     })
    
//   }

// }


export function editMode(tournament){
  return{
    type: "EDIT_MODE",
    payload: tournament
  }
}