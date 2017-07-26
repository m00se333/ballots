import React from "react";
import {connect} from "react-redux";

import Item from "./Item"

import {retrieveTournaments} from "../../actions/tournamentActions.js";

class List extends React.Component{

   componentWillMount(){
      this.props.retrieveTournaments();
    }


  render(){
      
      
      const { tournamentList } = this.props;
      const list = tournamentList.map((x,i)=>{ return <Item
                                                        name={x.name}
                                                        prelims={x.prelims}
                                                        outRounds={x.outRounds}
                                                        notes={x.notes}
                                                        key={x.name}/> })

    return(
      <div className="right-column">

        {tournamentList.length === 0 ? <p>Loading</p> : list}

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

    tournamentList: state.tournamentList

  }
}

const MapDispatchToProps = {
  retrieveTournaments
}




export default connect(mapStateToProps, MapDispatchToProps)(List);
