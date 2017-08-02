import React from "react";
import {connect} from "react-redux";

//actions
import {retrieveTournaments} from "../actions/tournamentActions";
import {setCurrentTournament} from "../actions/ballotReportingActions";

//comonents
import TournamentSelector from "./ballot-reporting-components/TournamentSelector";
import PrelimReporter from "./ballot-reporting-components/PrelimReporter";

class BallotReporting extends React.Component{

  

  render(){



      return(

            <div className="ballot-reporting-wrapper">

                <div className="selector"> 
                  <TournamentSelector />
                </div>

                <div className="reporting">

                  <PrelimReporter />

                </div>


            </div>


        )




  }

}

const mapStateToProps = (state) => {
  return {
    tournamentList: state.tournamentList,
    currentTournament: state.currentTournament
  }
};

const mapDispatchToProps = {
    retrieveTournaments
};

export default connect(mapStateToProps, mapDispatchToProps)(BallotReporting);