import axios from "axios";

export function updateOutrounds(number){
  return {
          type: "UPDATE_OUTROUND",
          payload: number
         }
}

export function updateName(string){
  return {
          type: "UPDATE_NAME",
          payload: string
         }
}

export function updatePrelim(number){
  return {
          type: "UPDATE_PRELIM",
          payload: number
         }
}

export function updateNotes(string){
  return {
          type: "UPDATE_NOTES",
          payload: string
         }
}

export function createNewTournament(object){

    const route = axios.post("/createNewTournament", object)

    return(dispatch) => {

      route.then(({data}) => {

        console.log(data);

      })
    }
}