import React from "react";
import {connect} from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"

import {performNameUpdate,
        performPrelimUpdate,
        performOutRoundUpdate,
        performNotesUpdate} from "../../actions/editActions.js"

class TournamentEditor extends React.Component{

/*
<CSSTransitionGroup className="editBox"
                              component="div"
                              transitionName="editBoxRail"
                              transitionEnterTimeout={2500}
                              transitionLeaveTimeout={1000}
                                                  >

              <h1>This is the tournament editor</h1>
              <span>Currently editing... {this.props.editTournament}</span>
</CSSTransitionGroup>
*/

/*

*/

updateName(){

      const { name } = this.props.tournament;
      const { nameRefUpdate  } = this.refs;

      this.props.performNameUpdate(nameRef.value);

    }

updatePrelims(){
      const { prelims } = this.props.tournament;
      const { prelimRefUpdate } = this.refs;

      this.props.performPrelimUpdate(prelimRef.value);

    }

updateOutround(){

      const { outRounds } = this.props.tournament;
      const { outRoundRefUpdate } = this.refs;

      this.props.performOutRoundUpdate(outRoundRef.value);

    }


updateNote(){
      const { notes } = this.props.tournament;
      const { notesRefUpdate } = this.refs; 

      this.props.performNotesUpdate(notesRef.value);

    }






    render(){

        const {editTournament, tournamentList}  = this.props;

        const tournamentInfo = tournamentList.map((x,i) => { 

                                if(x.name === editTournament){
          
                               
                                return (

                                    <form className="tournamentUpdater" key={"updater-"+ x.name}>
                                        <input type="text" placeholder={x.name} ref="nameRefUpdate" />
                                        <input type="number" placeholder={x.prelims} ref="prelimRefUpdate" />
                                        <input type="number" placeholder={x.outRounds} ref="outroundRefUpdate" />
                                        <input type="text" placeholder={x.notes} ref="notesRefUpdate" />
                                    </form>

                                  )


                              }
                            })
   

        return(

    

            <div className="editBox">

              <h1>This is the tournament editor</h1>
              <span>Currently editing... {this.props.editTournament}</span>

              <div className="target">
                {tournamentInfo}
              </div>
              

              <div id="updateButton">
                Update tournament
              </div>

            </div>



          )
    }
}

const mapStateToProps = (state) => {
  return {
    editTournament: state.editTournament,
    tournamentList: state.tournamentList
  }
}

const mapDispatchToProps = {
      
      performNameUpdate,
      performPrelimUpdate,
      performOutRoundUpdate,
      performNotesUpdate

}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentEditor)