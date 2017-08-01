import React from "react";
import {connect} from "react-redux";
import CSSTransition from 'react-transition-group/CSSTransition'

//actions
import {updateOutrounds, 
        updateName, 
        updatePrelim, 
        updateNotes, 
        createNewTournament,
        retrieveTournaments} from  "../../actions/tournamentActions.js";

import {edit} from "../../actions/editActions.js";

//components
import TournamentEditor from "./TournamentEditor";

const Test = ({children, ...props}) => (

              <CSSTransition
                {...props}
                timeout={{enter: 500, exit: 500}}
                mountOnEnter={true}
                unmountOnExit={true}
                classNames="edit"

              >
                      
                      {children}

              </CSSTransition>

  )

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
  const { editMode, editTournament} = this.props;

  const display = this.props.editTournament === null ? false : true


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
        
        <Test in={display}>
          <TournamentEditor />
        </Test>

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

export default connect(mapStateToProps, mapDispatchToProps)(NewTournament);