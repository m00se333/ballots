import React from "react";
import {connect} from "react-redux";

//actions
import {retrieveTournaments} from "../../actions/tournamentActions.js";
import {setCurrentTournament} from "../../actions/ballotReportingActions";


class TournamentSelector extends React.Component{


componentWillMount(){
    const {selectMenu} = this.refs;

    this.props.retrieveTournaments();
  }

herro(){
    
    const {selectMenu} = this.refs;

    this.props.setCurrentTournament(selectMenu.value)

}


render(){

    const {tournamentList} = this.props;
    const selectMenu = tournamentList.map(function(x, index) { return <option key={x.name} ref={x.name + "Ref"}>{x.name}</option> })

    return(
          <select name="" id="selectMenu" ref="selectMenu" onChange={()=>this.herro()}>

                {selectMenu}

          </select>


      )
}




}







const mapStateToProps = (state) => {
  return{
    tournamentList: state.tournamentList,
    currentTournament: state.currentTournament
  }
};

const mapDispatchToProps = {
    retrieveTournaments,
    setCurrentTournament
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentSelector);

