export function addOutround(){
  return {
          type: "INCREMENT",
          payload: 1
         }
}

export function updateName(string){
  return {
          type: "RECORD_NAME",
          payload: string
         }
}

export function addPrelim(){
  return {
          type: "ADD_PRELIM",
          payload: 1
         }
}

export function subtractPrelim(){
  return {
          type: "SUBTRACT_PRELIM",
          payload: -1
         }
}

export function updatePrelim(number){
  return {
          type: "UPDATE_PRELIM",
          payload: number
         }
}