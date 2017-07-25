import React from "react";
import {connect} from "react-redux";

import Item from "./Item"

import {retrieveTournaments} from  "../../actions/tournamentActions.js";


class List extends React.Component{

  componentWillMount(){
      this.props.retrieveTournaments();
  }

  handleClick(node){

    this.props.activate(node);


  }

  
  

  tournamentProfile(item, index){

        const {activate} = this.props;
        //const styleChoice = this.refs[`{item.name}`].id === this.props.active ? {color: "red"} : {color: "black"}


        return(
            <div key={item.name} 
                 ref={item.name}
                 id={item.name} 
                 onClick={() => this.handleClick(item.name)} 
                 className="details">
              
                
                  <p>{item.name}</p>

            </div>
          )
      }

  render(){
      
      
      const { tournamentList } = this.props;
      const list = tournamentList.map((x,i)=>{ return <Item
                                                        name={x.name}
                                                        prelims={x.prelims}
                                                        outRounds={x.outRounds}
                                                        notes={x.notes}
                                                        key={x.name}/> }) //I hate programming, this works.

    return(
      <div className="pipeline">

        {tournamentList.length === 0 ? <p>Loading</p> : list}

      </div>
    )
  }

}



const mapStateToProps = (state) =>{
  return {
    tournamentList: state.tournamentList,
  }
}

const mapDispatchToProps = {
  retrieveTournaments
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
