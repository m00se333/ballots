import axios from "axios";

// import { loadTournaments } from "./tournamentActions.js"

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

export function updateTournament(tournamentName, object){

    const route = axios.post("/updateTournament", {tournamentName, object});

    return(dispatch) => {

        route.then(({data}) => {
          console.log("preforming update");

        })


    }
}

export function editMode(tournament){
  return{
    type: "EDIT_TOURNAMENT",
    payload: tournament
  }
}

export function edit(){
  return{
    type: "EDIT_MODE",
    payload: true
  }
}





