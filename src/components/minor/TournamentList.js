import React from "react";
import {connect} from "react-redux";

import {retrieveTournaments } from  "../../actions/tournamentActions.js";

class TournamentList extends React.Component{

  componentWillMount(){
      this.props.retrieveTournaments();
  }

  displayTournaments(){
      const { tournamentList } = this.props;

      for (var x in tournamentList){
        return <p key={x.name}>{x.name}</p>
      }
  }

  render(){
      const { tournamentList } = this.props;
      const list = tournamentList.map((x,i)=>{ return <p key={x.name}>{x.name}</p> }) //I hate programming, this works.

    return(
      <div className="pipeline">

        {tournamentList.length === 0 ? <p>Loading</p> : list}

      </div>
    )
  }

}



const mapStateToProps = (state) =>{
  return {
    tournamentList: state.tournamentList
  }
}

const mapDispatchToProps = {
  retrieveTournaments
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentList);
