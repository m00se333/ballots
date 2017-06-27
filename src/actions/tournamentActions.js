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