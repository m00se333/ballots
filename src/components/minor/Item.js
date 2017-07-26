import React from "react";
import {connect} from "react-redux";

import {activate, deactivate, editMode} from "../../actions/editActions.js"

class Item extends React.Component{

  
  handle(e){
      console.log("wow");
    }

  beginEdits(tournament){
    
  }


  editMode(name, outRounds, prelims, notes, status){

    return(
      <div ref={name}
              id={name}
              className="details"
              style={status}>

            <div className="title" onClick={()=> this.props.activate(name)}>
                
                <span>{name}</span>

            </div>

            <div className="editBox">
                  <div className="option" id="edit" onClick={() => this.props.editMode(name)}>Edit</div>
                  <div className="option" id="delete">Delete</div>
            </div>
              

      </div>
      )

  }


  render(){

    const {name, outRounds, prelims, notes} = this.props;
    const status = this.props.active === this.props.name ? {color: "red", flex: 10} : {color: "black", flex: 1}


    return this.editMode(name, outRounds, prelims, notes, status)
  }
}

const mapStateToProps = (state) =>{
  return {
    active: state.active,
    editTournament: state.editTournament
  }
}

const mapDispatchToProps = {
  activate,
  deactivate,
  editMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
