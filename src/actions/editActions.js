import axios from "axios";

export function deleteTournament(tournament){

  //unintended function: deleted tournament info sticks around
  //maybe I should remove the delete button when something is being updated

  const route = axios.post("/deleteTournament", {tournament})

  return(dispatch) => {

      route.then(({data}) => {
        console.log(data)
        console.log("deleting...")
        
      })
  }
}

export function editMode(tournament){
  return{
    type: "EDIT_MODE",
    payload: tournament
  }
}

export function performNameUpdate(string){
  return {
    action: "UPDATE_NAME",
    payload: string
  }
}

export function performPrelimUpdate(number){
  return {
    action: "UPDATE_PRELIMS",
    payload: number
  }
}

export function performOutRoundUpdate(number){
  return {
    action: "UPDATE_OUTROUNDS",
    payload: number
  }
}

export function performNotesUpdate(string){
  return {
    action: "UPDATE_NOTES",
    payload: number
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

