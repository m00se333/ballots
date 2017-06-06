import React from "react";
import {connect} from "react-redux";

import {addOutround} from  "../actions/tournamentActions.js";


class BuildTournament extends React.Component{

    hello(){

      const { outRounds } = this.props.tournament;

      console.log({outRounds}); // one behind actual

      this.props.addOutround();
      
    }

    render(){

        const {name, notes, outRounds, prelims} = this.props.tournament;

        const outround = <input type="text" placeholder="name"/>

        const check = outRounds > 0 ? outround : null;

        return(
          <div>
            
            <h1>Build A Tournament Here</h1>

            <form action="" className="test">
              <input type="text" placeholder="Tournament Name"/>
              <input type="number" defaultValue={prelims} />
              {check}
              <input type="button" value="add outround" onClick={() => this.hello()}/>
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
  addOutround
};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





