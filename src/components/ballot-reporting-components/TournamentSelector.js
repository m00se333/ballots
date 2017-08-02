import React from "react";
import {connect} from "react-redux";

//actions
import {retrieveTournaments} from "../../actions/tournamentActions.js";
import {setCurrentTournament, retrieveTournamentInfo} from "../../actions/ballotReportingActions";


class TournamentSelector extends React.Component{

componentWillMount(){
   
    this.props.retrieveTournaments();

  }


herro(){
    
    const {selectMenu} = this.refs;

    // if (selectMenu.value === "-"){
    //   this.props.setCurrentTournament(null)
    // } else {

    // this.props.setCurrentTournament(selectMenu.value)
    // }

    this.props.retrieveTournamentInfo(selectMenu.value);



}


render(){

    const {tournamentList} = this.props;


    const selectMenu = tournamentList.map(function(x, index) { return <option key={x.name} ref={x.name + "Ref"}>{x.name}</option> })

    const dynamicList = tournamentList != null ? selectMenu : <p>Loading</p>

    return(
          <select name="" id="selectMenu" ref="selectMenu" onChange={()=>this.herro()}>
                <option key="blank" ref="blankRef">-</option>
                {dynamicList}
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
    setCurrentTournament,
    retrieveTournamentInfo
    //createStudentRankObject
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentSelector);

