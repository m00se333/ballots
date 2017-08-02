import React from "react";
import {connect} from "react-redux";

//actions
import {retrieveTournaments} from "../actions/tournamentActions";
import {setCurrentTournament} from "../actions/ballotReportingActions";

//comonents
import TournamentSelector from "./ballot-reporting-components/TournamentSelector";
import PrelimReporter from "./ballot-reporting-components/PrelimReporter";
import OutRoundReporter from "./ballot-reporting-components/OutRoundReporter";
import NotesReporter from "./ballot-reporting-components/NotesReporter";

class BallotReporting extends React.Component{  

  render(){

      

      return(

            <div className="ballot-reporting-wrapper">

                <div className="selector"> 
                  <TournamentSelector />
                </div>

                <div className="reporting">

                  <PrelimReporter   />
                  <OutRoundReporter  />
                  <NotesReporter  />

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