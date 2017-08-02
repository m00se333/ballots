import axios from "axios";


function setCurrentTournament(object){

    return{
      type: "SET_TOURNAMENT",
      payload: object
    }
}



export function retrieveTournamentInfo(string){

  const route = axios.post("/createNewRankingObject", {query: string})

  return(dispatch) => {

      route.then(({data}) => {

          console.log(data)
          dispatch(setCurrentTournament(data.tournament))

      })
  }
}

      //companion ⬆️
      function createSRO(object){
        return {
          type: "CREATE_SRO",
          payload: object

        }
    }