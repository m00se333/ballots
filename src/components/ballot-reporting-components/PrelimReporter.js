import React from "react";
import {connect} from "react-redux";

//actions

//components

class PrelimReporter extends React.Component{


  renderPrelimInputs(prelims){

      let i = 0;

      while(i < prelims){

        console.log("hello " + i);
        i++

      }

  }

  render(){

      const {prelims} = this.props.tournamentList

      

      return (

        <div>
            
            {this.renderPrelimInputs(prelims)}

        </div>

        )
  }

}


const mapStateToProps = (state) => {
  return {
    tournamentList: state.tournamentList
  }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(PrelimReporter);
