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