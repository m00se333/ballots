import React from "react";
import {connect} from "react-redux";

import List from "./tournament-create-and-edit-components/List";
import TournamentInterfaces from "./tournament-create-and-edit-components/TournamentInterfaces";


class BuildTournament extends React.Component{


    render(){

        

        return(
          <div id="buildWrapper">
           
            <TournamentInterfaces />
                
            <List />                              

          </div>
            
          )
    }
}

const mapStateToProps = (state) =>{
  return {

    tournament: state.tournament,
    editTournament: state.editTournament

  }
}

const mapDispatchToProps = {


};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





