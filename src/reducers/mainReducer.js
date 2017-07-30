import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

// reducers
// import { activeTab } from "./dashReducer";
// import { loginStatus, user }from "./userReducer";

import {data} from "./dataReducer";
import {tournament} from "./tournamentReducer";
import {tournamentList} from "./tournamentListReducer";
import {editTournament} from "./editReducer";

const rootReducer = combineReducers({data, 
                                    tournament, 
                                    tournamentList, 
                                    editTournament,
                                    routing: routerReducer});
export default rootReducer;