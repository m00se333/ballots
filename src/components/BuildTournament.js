import React from "react";
import {connect} from "react-redux";

import {updateOutrounds, updateName, updatePrelim} from  "../actions/tournamentActions.js";

class BuildTournament extends React.Component{

    updateOutround(){

      const { outRounds } = this.props.tournament;
      const { outRoundRef } = this.refs;

      this.props.updateOutrounds(outRoundRef.value);

    }

    recordName(){

      const { name } = this.props.tournament;
      const { nameRef  } = this.refs;

      this.props.updateName(nameRef.value);

    }

    updatePrelims(){
      const { prelims } = this.props.tournament;
      const { prelimRef } = this.refs;

      this.props.updatePrelim(prelimRef.value);

    }


    render(){

        const {prelims, outRounds} = this.props.tournament;

        return(
          <div>
            
            <h1>Build A Tournament Here</h1>

            <form action="" className="test">
              <input type="text" placeholder="Tournament Name" ref="nameRef" onChange={() => this.recordName()}/>
              <input type="number" defaultValue={prelims} ref="prelimRef" onChange={() => this.updatePrelims()} />
              <input type="number" defaultValue={outRounds} ref="outRoundRef" onChange={() => this.updateOutround()}/>
            </form>

          </div>
            
          )
    }
}

const mapStateToProps = (state) =>{
  return {

    tournament: state.tournament

  }
}

const mapDispatchToProps = {
  updateOutrounds,
  updateName,
  updatePrelim
};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





