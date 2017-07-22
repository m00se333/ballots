import React from "react";
import {connect} from "react-redux";

import {updateOutrounds, updateName, updatePrelim, updateNotes, createNewTournament, retrieveTournaments } from  "../actions/tournamentActions.js";

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

    componentWillMount(){
      this.props.retrieveTournaments();
    }

    displayTournaments(){

        const { tournamentList } = this.props;

        //prints out stuff in the console, so that's great...
        // tournamentList.map(function(x, i){
        //   console.log(x)
        // })
        tournamentList.map((x,i) => {
                    return <li key={i}>{x.name}</li>
                  })
       

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

      nameRef.value = "";
      prelimRef.value = 3;
      outRoundRef.value = 0;
      notesRef.value = "";

    }


    render(){

        const {prelims, outRounds} = this.props.tournament;
        const {tournamentList} = this.props;




        return(
          <div id="buildWrapper">
            <div className="left-column">
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


            <div className="right-column">
                <div className="pipeline">
                    
                  {tournamentList.map((x,i) => {
                    return <li key={i}>{x.name}</li>
                  })}
                    
                </div>
                  
            </div>

          </div>
            
          )
    }
}

const mapStateToProps = (state) =>{
  return {

    tournament: state.tournament,
    tournamentList: state.tournamentList

  }
}

const mapDispatchToProps = {
  updateOutrounds,
  updateName,
  updatePrelim,
  updateNotes,
  createNewTournament,
  retrieveTournaments

};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





