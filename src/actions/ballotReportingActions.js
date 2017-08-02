import axios from "axios";


export function setCurrentTournament(tournament){

    return{
      type: "SET_TOURNAMENT",
      payload: tournament
    }
}

