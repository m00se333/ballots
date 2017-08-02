import React from "react";
import {connect} from "react-redux";


import {performNameUpdate,
        performPrelimUpdate,
        performOutRoundUpdate,
        performNotesUpdate,
        updateTournament} from "../../actions/editActions.js"

import {retrieveTournaments} from "../../actions/tournamentActions.js"

class TournamentEditor extends React.Component{


verifyEdits(){

  const { nameRefUpdate, prelimRefUpdate, outRoundRefUpdate, notesRefUpdate } = this.refs;

  const updates = {
                      prelims: prelimRefUpdate.value,
                      outRounds: outRoundRefUpdate.value,
                      notes: notesRefUpdate.value
                    
                  }

  const verify = confirm("make these changes?")

  if (verify === true){


      this.props.updateTournament(nameRefUpdate.value, updates)
      this.props.retrieveTournaments()

  } else {

      console.log("whatever")
  }


}


    render(){

        const {editTournament, tournamentList}  = this.props;

        const tournamentInfo = tournamentList.map((x,i) => { 

                                if(x.name === editTournament){
          
                               
                                return (

                                    <form className="tournamentUpdater" key={"updater-"+ x.name}>
                                        <input type="text" defaultValue={x.name} ref="nameRefUpdate" />
                                        <input type="number" defaultValue={x.prelims} ref="prelimRefUpdate" />
                                        <input type="number" defaultValue={x.outRounds} ref="outRoundRefUpdate" />
                                        <input type="text" defaultValue={x.notes} ref="notesRefUpdate" />
                                    </form>

                                  )


                              }
                            })
   

        return(

    

            <div className="editBox">
              <div className="banner">
                <h1>Edit Tournament</h1>
              </div>
             

              <div className="target">
               <span>Currently editing... {this.props.editTournament}</span>
                {tournamentInfo}
              </div>
              

              <div id="updateButton" onClick={() => this.verifyEdits()}>
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
      performNotesUpdate,
      updateTournament,
      retrieveTournaments

}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentEditor)