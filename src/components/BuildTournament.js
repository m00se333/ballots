import React from "react";
import {connect} from "react-redux";

import List from "./minor/List";
import NewTournament from "./minor/newTournament";


class BuildTournament extends React.Component{

    render(){

      

        return(
          <div id="buildWrapper">
           
            <NewTournament />
                
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





