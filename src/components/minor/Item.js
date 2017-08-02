import React from "react";
import {connect} from "react-redux";
import CSSTransition from 'react-transition-group/CSSTransition'

import {deleteTournament, editMode, edit} from "../../actions/editActions.js"
import {retrieveTournaments} from "../../actions/tournamentActions.js";

const EditButtonControls = ({children, ...props}) => (

      <CSSTransition
        {...props}
        timeout={{enter: 500, exit: 250}}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames="option"
      >
        

            {children}


      </CSSTransition>





)


class Item extends React.Component{

  
  delete(tournament){

    this.props.deleteTournament(tournament)
    this.props.retrieveTournaments();
  }

  beginEdits(tournament){
    this.props.editMode(tournament)
    this.props.edit()
  }

  render(){

    const {name, outRounds, prelims, notes} = this.props;
    const status = this.props.active === this.props.name ? {color: "red", flex: 10} : {color: "black", flex: 1}

    const display = this.props.editTournament === null ? true : false;    

    return (

        <div ref={name}
           className="details"
           style={status}
           key={name}>

            <div className="title">
                
                  <span>{name}</span>

            </div>

            <div className="edit-or-delete">
                  <div className="option" id="edit" onClick={() => this.beginEdits(name)}>Edit</div>
                <EditButtonControls in={display}>
                  <div className="option" id="delete" onClick={() => this.delete(name)}>Delete</div>
                </EditButtonControls>
            </div>
              

      </div>

      )
  }
}

const mapStateToProps = (state) =>{
  return {
    editTournament: state.editTournament
  }
}

const mapDispatchToProps = {
  editMode,
  deleteTournament,
  retrieveTournaments,
  edit
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
