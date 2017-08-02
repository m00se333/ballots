import React from "react";
import {connect} from "react-redux";


class OutRoundReporter extends React.Component{
  render(){
    return(

          <div>
            
              <span>{"Out Rounds: " + this.props.outRounds} </span>

          </div>
      )
  }
}


const mapStateToProps = (state) => {
  return {outRounds: state.currentTournament.outRounds}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OutRoundReporter)