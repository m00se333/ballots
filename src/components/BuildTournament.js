import React from "react";
import {connect} from "react-redux";

import {addOutround, updateName, updatePrelim} from  "../actions/tournamentActions.js";

class BuildTournament extends React.Component{

    addAnOutround(){

      const { outRounds } = this.props.tournament;
      this.props.addOutround();
      

      let i = this.props.tournament.outRounds;
      const anchor = document.getElementById("rounds");


      const outround = document.createElement("input")
            outround.setAttribute("id", i)
            outround.setAttribute("placeholder", `Box ${i + 1}`)

      anchor.appendChild(outround);


    }

    recordName(){

      const { name } = this.props.tournament;
      const { nameRef  } = this.refs;
      console.log(nameRef.value);

      this.props.updateName(nameRef.value);

    }

    updatePrelims(){
      const { prelims } = this.props.tournament;
      const { prelimRef } = this.refs;

      this.props.updatePrelim(prelimRef.value);

      console.log(prelims)

    }


    render(){

        const {name, notes, outRounds, prelims} = this.props.tournament;

        const style = outRounds > 0 ? {display: "block"} : {display: "none"};

        return(
          <div>
            
            <h1>Build A Tournament Here</h1>

            <form action="" className="test">
              <input type="text" placeholder="Tournament Name" ref="nameRef" onChange={() => this.recordName()}/>
              <input type="number" defaultValue={prelims} ref="prelimRef" onChange={() => this.updatePrelims()} />
              <div id="rounds" style={style}>
                
              </div>
              <input type="button" value="add outround" onClick={() => this.addAnOutround()}/>
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
  addOutround,
  updateName,
  updatePrelim
};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





