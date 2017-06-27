import React from "react";
import {connect} from "react-redux";

import {updateOutrounds, updateName, updatePrelim, updateNotes, createNewTournament} from  "../actions/tournamentActions.js";

class BuildTournament extends React.Component{

    updateOutround(){

      const { outRounds } = this.props.tournament;
      const { outRoundRef } = this.refs;

      this.props.updateOutrounds(outRoundRef.value);

    }

    recordName(){

      const { name } = this.props.tournament;
      const { nameRef  } = this.refs;

      this.props.updateName(nameRef.value);

    }

    updatePrelims(){
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

      const tournamentObject = {
                                  name,
                                  prelims,
                                  outRounds,
                                  notes
                               }

      console.log(tournamentObject);
      
      this.props.createNewTournament(tournamentObject);

    }


    render(){

        const {prelims, outRounds} = this.props.tournament;

        return(
          <div>
            
            <div id="banner">
              <h1>Build A Tournament Here</h1>
            </div>
            

            <form action="" className="tournamentBuilder">
              <input type="text" placeholder="Tournament Name" ref="nameRef" onChange={() => this.recordName()}/>
              <input type="number" defaultValue={prelims} ref="prelimRef" onChange={() => this.updatePrelims()} />
              <input type="number" defaultValue={outRounds} ref="outRoundRef" onChange={() => this.updateOutround()}/>
              <input type="text" placeholder="Notes" ref="notesRef" onChange={() => this.recordNote()}/>
            </form>

            <div id="submitButton" onClick={() => this.createTournament()}>
              Create Tournament
            </div>

          </div>
            
          )
    }
}

const mapStateToProps = (state) =>{
  return {

    tournament: state.tournament

  }
}

const mapDispatchToProps = {
  updateOutrounds,
  updateName,
  updatePrelim,
  updateNotes,
  createNewTournament
};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





