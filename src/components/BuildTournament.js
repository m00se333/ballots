import React from "react";
import {connect} from "react-redux";

import {addOutround} from  "../actions/tournamentActions.js";


class BuildTournament extends React.Component{

    addAnOutround(){

      const { outRounds } = this.props.tournament;
      this.props.addOutround();
      console.log({outRounds}); // one behind actual
  
    }

    updateName(){
      const { name } = this.props.tournament
      console.log(this.refs.nameRef.value)
    }

    componentDidUpdate(){
      console.log("props changed")

      let i = this.props.tournament.outRounds;
      const anchor = document.getElementById("rounds");


      const outround = document.createElement("input")
            outround.setAttribute("id", i)
            outround.setAttribute("placeholder", `Box ${i}`)


      anchor.appendChild(outround)
    
    }

    addInput(){
      
      

    }

    render(){

        const {name, notes, outRounds, prelims} = this.props.tournament;

        const style = outRounds > 0 ? {display: "block"} : {display: "none"};

        return(
          <div>
            
            <h1>Build A Tournament Here</h1>

            <form action="" className="test">
              <input type="text" placeholder="Tournament Name" ref="nameRef" onChange={() => this.updateName()}/>
              <input type="number" defaultValue={prelims} />
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
  addOutround
};


export default connect(mapStateToProps, mapDispatchToProps)(BuildTournament);





