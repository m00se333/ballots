import React from "react";
import {connect} from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup"



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

requestRender(){



}




    render(){

        const {editTournament, tournamentList}  = this.props;

        const tournamentInfo = tournamentList.map((x,i) => { 

                                if(x.name === editTournament){
          
                                console.log("we hav a match what the fuck")
                                return (


                                <form className="tournamentUpdater" key="updater">
                                    <input type="text" placeholder={x.name} ref="nameRefUpdate" />
                                    <input type="number" placeholder={x.prelims} ref="prelimRefUpdate" />
                                    <input type="number" placeholder={x.outRounds} ref="outroundsRefUpdate" />
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
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentEditor)