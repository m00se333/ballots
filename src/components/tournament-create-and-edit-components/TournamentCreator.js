import React from "react";
import {connect} from "react-redux";
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from "react-transition-group/TransitionGroup"

//actions
import {updateOutrounds, 
        updateName, 
        updatePrelim, 
        updateNotes, 
        createNewTournament,
        retrieveTournaments} from  "../../actions/tournamentActions.js";

import {edit} from "../../actions/editActions.js";


class TournamentCreator extends React.Component{


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

minimized(){

return(
      <div className="tournament-creator">
            <div className="banner">
              <h1>Make New Tournament</h1>
            </div> 
      </div>
      )
}

maximized(){

  
}


render(){

  //const display = this.props.editMode === true && this.props.editTournament != null ? this.minimized() : this.maximized()
  const { prelims, outRounds} =  this.props.tournament;
  const { editMode, editTournament} = this.props;

  return(
        <div className="tournament-creator">
                      
            <div className="banner">
              <h1>Make New Tournament</h1>
            </div>  

            <div className="form-box">
                <form action="" className="tournamentCreatorForm">
                  <input className="formInput" id="nameRecord" type="text" placeholder="Tournament Name" ref="nameRef" onChange={() => this.recordName()}/>
                  <input className="formInput" id="prelimRecord" type="number" defaultValue={prelims} ref="prelimRef" onChange={() => this.recordPrelims()} />
                  <input className="formInput" id="outRoundRecord" type="number" defaultValue={outRounds} ref="outRoundRef" onChange={() => this.recordOutround()}/>
                  <input className="formInput" id="notesRecord" type="text" placeholder="Notes" ref="notesRef" onChange={() => this.recordNote()}/>
                </form>

                <div id="newTournamentButton" onClick={() => this.createTournament()}>
                  Create Tournament
                </div>
            </div>

          </div>

        )

  } 
}


const mapStateToProps = (state) => {
  return {
    tournament: state.tournament,
    editTournament: state.editTournament,
    editMode: state.editMode
  }
};

const mapDispatchToProps = {
  updateOutrounds,
  updateName,
  updatePrelim,
  updateNotes,
  createNewTournament,
  retrieveTournaments,
  edit
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentCreator);
