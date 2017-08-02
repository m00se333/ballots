import React from "react";
import {connect} from "react-redux";


class NotesReporter extends React.Component{
  render(){
    return(
          <div>
            
              <span>{"Notes: " + this.props.notes} </span>

          </div>

      )
  }
}

const mapStateToProps = (state) => {
  return {notes: state.currentTournament.notes}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NotesReporter)