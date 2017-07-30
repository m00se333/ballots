import React from "react";
import {connect} from "react-redux";

import {activate, deactivate, deleteTournament, editMode} from "../../actions/editActions.js"
import {retrieveTournaments} from "../../actions/tournamentActions.js";

class Item extends React.Component{

  
  delete(tournament){

    this.props.deleteTournament(tournament)
    this.props.retrieveTournaments();
  }


  render(){

    const {name, outRounds, prelims, notes} = this.props;
    const status = this.props.active === this.props.name ? {color: "red", flex: 10} : {color: "black", flex: 1}


    return (

        <div ref={name}
           className="details"
           style={status}
           key={name}>

            <div className="title" 
                 onClick={()=> this.props.activate(name)}>
                
                  <span>{name}</span>

            </div>

            <div className="editBox">
                  <div className="option" id="edit" onClick={() => this.props.editMode(name)}>Edit</div>
                  <div className="option" id="delete" onClick={() => this.delete(name)}>Delete</div>
            </div>
              

      </div>

      )
  }
}

const mapStateToProps = (state) =>{
  return {
    //activate is old and I'm not using it
    active: state.active,
    editTournament: state.editTournament
  }
}

const mapDispatchToProps = {
  activate,
  deactivate,
  editMode,
  deleteTournament,
  retrieveTournaments
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
