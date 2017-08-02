import React from "react";
import {connect} from "react-redux";

//actions

//components

class PrelimReporter extends React.Component{


butts(){

  console.log("_)_)")

  }



  render(){

     



      return (

        <div onClick={()=>this.butts()}>
            
            <span>{"Prelims: " + this.props.prelims}</span>

        </div>

        )
  }

}



const mapStateToProps = (state) => {
    return{ prelims: state.currentTournament.prelims}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PrelimReporter);
