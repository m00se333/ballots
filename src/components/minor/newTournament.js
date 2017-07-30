import React from "react";
import {connect} from "react-redux";
import {CSSTransitionGroup} from "react-transition-group";

//actions
import {updateOutrounds, 
        updateName, 
        updatePrelim, 
        updateNotes, 
        createNewTournament,
        retrieveTournaments} from  "../../actions/tournamentActions.js";

//components
import TournamentEditor from "./TournamentEditor";

class NewTournament extends React.Component{


recordOutround(){

      const { outRounds } = this.props.tournament;
      const { outRoundRef } = this.refs;

      this.props.updateOutrounds(outRoundRef.value);

    }

recordName(){

  const { name } = this.props.tournament;
  const { nameRef  } = this.refs;

  this.props.updateName(nameRef.value);

}

recordPrelims(){
  const { prelims } = this.props.tournament;
  const { prelimRef } = this.refs;

  this.props.updatePrelim(prelimRef.value);

}

recordNote(){
  const { notes } = this.props.tournament;
  const { notesRef } = this.refs; 

  this.props.updateNotes(notesRef.value);

}

    createTournament(){

      const { prelims, outRounds, name, notes } = this.props.tournament;
      const { nameRef, prelimRef, outRoundRef, notesRef } = this.refs;

      const tournamentObject = {
                                  name,
                                  prelims,
                                  outRounds,
                                  notes
                               };

      this.props.createNewTournament(tournamentObject);
      this.props.retrieveTournaments();
      nameRef.value = "";
      prelimRef.value = 3;
      outRoundRef.value = 0;
      notesRef.value = "";

    }


render(){

  const { prelims, outRounds} =  this.props.tournament;

  const style = {

      active: { display: "flex", flex: 5 },
      inactive: null
  }

  const dynamic = this.props.editTournament != null ? style.active : style.inactive



  return(
    <div className="left-column">

        <div className="tournament-creator">
              
              <div id="banner">
                <h1>Build A Tournament Here</h1>
              </div>  

              <form action="" className="tournamentBuilder">
                <input type="text" placeholder="Tournament Name" ref="nameRef" onChange={() => this.recordName()}/>
                <input type="number" defaultValue={prelims} ref="prelimRef" onChange={() => this.recordPrelims()} />
                <input type="number" defaultValue={outRounds} ref="outRoundRef" onChange={() => this.recordOutround()}/>
                <input type="text" placeholder="Notes" ref="notesRef" onChange={() => this.recordNote()}/>
              </form>

              <div id="submitButton" onClick={() => this.createTournament()}>
                Create Tournament
              </div>


        </div>
        <CSSTransitionGroup   className="tournament-editor"
                              component="div"
                              transitionName="editBoxRail"
                              transitionEnterTimeout={10000}
                              transitionLeaveTimeout={10000}
                              style={dynamic}>

              <TournamentEditor key="editor" />
        </CSSTransitionGroup>

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tournament: state.tournament,
    editTournament: state.editTournament
  }
};

const mapDispatchToProps = {
  updateOutrounds,
  updateName,
  updatePrelim,
  updateNotes,
  createNewTournament,
  retrieveTournaments
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTournament);