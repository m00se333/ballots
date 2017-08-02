import React from "react";
import {connect} from "react-redux";
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from "react-transition-group/TransitionGroup"
//actions

//props
import {edit} from "../../actions/editActions.js";

//components
import TournamentEditor from "./TournamentEditor";
import TournamentCreator from "./TournamentCreator";

const SlideUp = ({children, ...props}) => (

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

class TournamentInterfaces extends React.Component{å

render(){

  const display = this.props.editTournament === null ? false : true;


  return(
    <div className="left-column">

        
         <TournamentCreator /> 
        
        
        <SlideUp in={display}>
          <TournamentEditor />
        </SlideUp>

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
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentInterfaces);